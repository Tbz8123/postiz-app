import { AgentToolInterface } from '@gitroom/nestjs-libraries/chat/agent.tool.interface';
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { Injectable } from '@nestjs/common';
import { MediaService } from '@gitroom/nestjs-libraries/database/prisma/media/media.service';
import { UploadFactory } from '@gitroom/nestjs-libraries/upload/upload.factory';
import { checkAuth } from '@gitroom/nestjs-libraries/chat/auth.context';

@Injectable()
export class GenerateImageTool implements AgentToolInterface {
  private storage = UploadFactory.createStorage();

  constructor(private _mediaService: MediaService) {}
  name = 'generateImageTool';

  run() {
    return createTool({
      id: 'generateImageTool',
      description: `Generate image to use in a post,
                    in case the user specified a platform that requires attachment and attachment was not provided,
                    ask if they want to generate a picture of a video.
      `,
      mcp: {
        annotations: {
          title: 'Generate Image',
          readOnlyHint: false,
          destructiveHint: false,
          idempotentHint: false,
          openWorldHint: true,
        },
      },
      inputSchema: z.object({
        prompt: z.string(),
      }),
      outputSchema: z.object({
        id: z.string(),
        path: z.string(),
      }),
      execute: async (inputData, context) => {
        checkAuth(inputData, context);
        const org = JSON.parse((context?.requestContext as any)?.get('organization') as string);
        const image = await this._mediaService.generateImage(
          inputData.prompt,
          org
        );

        // Convert base64 to Buffer and use uploadFile (not uploadSimple,
        // which rejects non-HTTPS URLs like data: URIs).
        const buffer = Buffer.from(image, 'base64');
        const uploaded = await this.storage.uploadFile({
          buffer,
          originalname: 'generated-image.png',
          mimetype: 'image/png',
          fieldname: 'file',
          size: buffer.length,
          encoding: '7bit',
          stream: buffer as any,
          destination: '',
          filename: 'generated-image.png',
          path: '',
        });

        const filePath = uploaded.path || uploaded.destination;
        const fileName = filePath.split('/').pop();
        return this._mediaService.saveFile(org.id, fileName, filePath);
      },
    });
  }
}
