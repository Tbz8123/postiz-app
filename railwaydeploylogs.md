2026-05-15T14:27:10.058177200Z [inf]  scheduling build on Metal builder "builder-aolyqp"
2026-05-15T14:27:14.951089576Z [inf]  unpacking archive
2026-05-15T14:27:15.416209905Z [inf]  uploading snapshot
2026-05-15T14:27:15.904763424Z [inf]  [internal] load build definition from Dockerfile
2026-05-15T14:27:15.905009864Z [inf]  [internal] load build definition from Dockerfile
2026-05-15T14:27:15.905131477Z [inf]  [internal] load build definition from Dockerfile
2026-05-15T14:27:16.535828140Z [inf]  [internal] load build definition from Dockerfile
2026-05-15T14:27:16.746835772Z [inf]  [internal] load metadata for docker.io/library/node:22.20-bookworm-slim
2026-05-15T14:27:17.080339051Z [inf]  [internal] load metadata for docker.io/library/node:22.20-bookworm-slim
2026-05-15T14:27:17.081108346Z [inf]  [internal] load .dockerignore
2026-05-15T14:27:17.081349448Z [inf]  [internal] load .dockerignore
2026-05-15T14:27:17.081641496Z [inf]  [internal] load .dockerignore
2026-05-15T14:27:17.252564768Z [inf]  [internal] load .dockerignore
2026-05-15T14:27:17.349289544Z [inf]  [10/10] RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm run build
2026-05-15T14:27:17.349291567Z [inf]  [ 9/10] RUN pnpm install
2026-05-15T14:27:17.349292248Z [inf]  [ 8/10] COPY var/docker/nginx.conf /etc/nginx/nginx.conf
2026-05-15T14:27:17.349292829Z [inf]  [ 7/10] COPY . /app
2026-05-15T14:27:17.349293500Z [inf]  [internal] load build context
2026-05-15T14:27:17.349294121Z [inf]  [ 6/10] WORKDIR /app
2026-05-15T14:27:17.349294722Z [inf]  [ 5/10] RUN curl -sSf https://temporal.download/cli.sh | bash
2026-05-15T14:27:17.349295312Z [inf]  [ 4/10] RUN npm --no-update-notifier --no-fund --global install pnpm@10.6.1 pm2
2026-05-15T14:27:17.349295944Z [inf]  [ 3/10] RUN addgroup --system www  && adduser --system --ingroup www --home /www --shell /usr/sbin/nologin www  && mkdir -p /www  && chown -R www:www /www /var/lib/nginx
2026-05-15T14:27:17.349296424Z [inf]  [ 2/10] RUN apt-get update && apt-get install -y --no-install-recommends     g++     make     python3-pip     bash     nginx     curl && rm -rf /var/lib/apt/lists/*
2026-05-15T14:27:17.349296935Z [inf]  [ 1/10] FROM docker.io/library/node:22.20-bookworm-slim@sha256:b21fe589dfbe5cc39365d0544b9be3f1f33f55f3c86c87a76ff65a02f8f5848e
2026-05-15T14:27:17.349429914Z [inf]  [ 1/10] FROM docker.io/library/node:22.20-bookworm-slim@sha256:b21fe589dfbe5cc39365d0544b9be3f1f33f55f3c86c87a76ff65a02f8f5848e
2026-05-15T14:27:17.349431787Z [inf]  [internal] load build context
2026-05-15T14:27:17.367031871Z [inf]  [ 1/10] FROM docker.io/library/node:22.20-bookworm-slim@sha256:b21fe589dfbe5cc39365d0544b9be3f1f33f55f3c86c87a76ff65a02f8f5848e
2026-05-15T14:27:17.367461716Z [inf]  [internal] load build context
2026-05-15T14:27:18.057480442Z [inf]  [internal] load build context
2026-05-15T14:27:18.113301548Z [inf]  [ 2/10] RUN apt-get update && apt-get install -y --no-install-recommends     g++     make     python3-pip     bash     nginx     curl && rm -rf /var/lib/apt/lists/*
2026-05-15T14:27:18.113305083Z [inf]  [ 3/10] RUN addgroup --system www  && adduser --system --ingroup www --home /www --shell /usr/sbin/nologin www  && mkdir -p /www  && chown -R www:www /www /var/lib/nginx
2026-05-15T14:27:18.113305764Z [inf]  [ 4/10] RUN npm --no-update-notifier --no-fund --global install pnpm@10.6.1 pm2
2026-05-15T14:27:18.113306385Z [inf]  [ 5/10] RUN curl -sSf https://temporal.download/cli.sh | bash
2026-05-15T14:27:18.113306945Z [inf]  [ 6/10] WORKDIR /app
2026-05-15T14:27:18.113329570Z [inf]  [ 7/10] COPY . /app
2026-05-15T14:27:19.187400444Z [inf]  [ 7/10] COPY . /app
2026-05-15T14:27:19.343243886Z [inf]  [ 8/10] COPY var/docker/nginx.conf /etc/nginx/nginx.conf
2026-05-15T14:27:19.990030676Z [inf]  [ 8/10] COPY var/docker/nginx.conf /etc/nginx/nginx.conf
2026-05-15T14:27:20.181678412Z [inf]  [ 9/10] RUN pnpm install
2026-05-15T14:27:21.133820872Z [inf]  Scope: all 7 workspace projects

2026-05-15T14:27:21.299638399Z [inf]  Lockfile is up to date, resolution step is skipped

2026-05-15T14:27:21.834866973Z [inf]  Packages: +4052
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

2026-05-15T14:27:22.045145681Z [inf]  Progress: resolved 0, reused 0, downloaded 1, added 0

2026-05-15T14:27:22.093824373Z [inf]  
   ╭──────────────────────────────────────────────────────────────────╮
   │                                                                  │
   │                Update available! 10.6.1 → 11.1.2.                │
   │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v11.1.2   │
   │                Run "pnpm add -g pnpm" to update.                 │
   │                                                                  │
   ╰──────────────────────────────────────────────────────────────────╯


2026-05-15T14:27:23.045915546Z [inf]  Progress: resolved 0, reused 0, downloaded 147, added 121

2026-05-15T14:27:24.088975512Z [inf]  Progress: resolved 0, reused 0, downloaded 352, added 342

2026-05-15T14:27:25.090202194Z [inf]  Progress: resolved 0, reused 0, downloaded 573, added 623

2026-05-15T14:27:26.090585879Z [inf]  Progress: resolved 0, reused 0, downloaded 868, added 982

2026-05-15T14:27:27.091007291Z [inf]  Progress: resolved 0, reused 0, downloaded 1010, added 1155

2026-05-15T14:27:28.090711066Z [inf]  Progress: resolved 0, reused 0, downloaded 1269, added 1455

2026-05-15T14:27:29.10166444Z [inf]  Progress: resolved 0, reused 0, downloaded 1586, added 1798

2026-05-15T14:27:30.115031868Z [inf]  Progress: resolved 0, reused 0, downloaded 1889, added 2163

2026-05-15T14:27:31.120825405Z [inf]  Progress: resolved 0, reused 0, downloaded 2294, added 2642

2026-05-15T14:27:32.120406396Z [inf]  Progress: resolved 0, reused 0, downloaded 2595, added 3006

2026-05-15T14:27:33.120420056Z [inf]  Progress: resolved 0, reused 0, downloaded 2956, added 3415

2026-05-15T14:27:34.121107387Z [inf]  Progress: resolved 0, reused 0, downloaded 3391, added 3956

2026-05-15T14:27:35.163664328Z [inf]  Progress: resolved 0, reused 0, downloaded 3457, added 4052

2026-05-15T14:27:35.177742785Z [inf]  Progress: resolved 0, reused 0, downloaded 3457, added 4052, done

2026-05-15T14:27:35.22211354Z [inf]  node_modules/bcrypt install$ node-pre-gyp install --fallback-to-build

2026-05-15T14:27:35.418514963Z [inf]  node_modules/bcrypt install: node-pre-gyp info it worked if it ends with ok

2026-05-15T14:27:35.418998659Z [inf]  node_modules/bcrypt install: node-pre-gyp info using node-pre-gyp@1.0.11

2026-05-15T14:27:35.41922546Z [inf]  node_modules/bcrypt install: node-pre-gyp info using node@22.20.0 | linux | x64

2026-05-15T14:27:35.476640779Z [inf]  node_modules/bcrypt install: node-pre-gyp info check checked for "/app/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node" (not found)

2026-05-15T14:27:35.477231786Z [inf]  node_modules/bcrypt install: node-pre-gyp http GET https://github.com/kelektiv/node.bcrypt.js/releases/download/v5.1.1/bcrypt_lib-v5.1.1-napi-v3-linux-x64-glibc.tar.gz

2026-05-15T14:27:35.527395789Z [inf]  node_modules/bcrypt install: node-pre-gyp info install unpacking napi-v3/bcrypt_lib.node

2026-05-15T14:27:35.537050053Z [inf]  node_modules/bcrypt install: node-pre-gyp info extracted file count: 1 

2026-05-15T14:27:35.53766065Z [inf]  node_modules/bcrypt install: node-pre-gyp info ok 

2026-05-15T14:27:35.538181792Z [inf]  node_modules/bcrypt install: [bcrypt] Success: "/app/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node" is installed via remote

2026-05-15T14:27:35.555088725Z [inf]  node_modules/bcrypt install: Done

2026-05-15T14:27:36.75065213Z [inf]  
╭ Warning ─────────────────────────────────────────────────────────────────────╮│                                                                              ││   Ignored build scripts: @nestjs/core,                                       ││   @openapitools/openapi-generator-cli, @parcel/watcher, @prisma/client,      ││   @prisma/engines, @scarf/scarf, @sentry-internal/node-cpu-profiler,         ││   @sentry/cli, @swc/core, bufferutil, canvas, core-js, core-js-pure,         ││   esbuild, prisma, protobufjs, sharp, unrs-resolver, utf-8-validate.         ││   Run "pnpm approve-builds" to pick which dependencies should be allowed     ││   to run scripts.                                                            ││                                                                              │╰──────────────────────────────────────────────────────────────────────────────╯


2026-05-15T14:27:36.751858851Z [inf]  apps/frontend postinstall$ node scripts/fetch-gtm.mjs

2026-05-15T14:27:36.983733742Z [inf]  apps/frontend postinstall: [fetch-gtm] NEXT_PUBLIC_GTM_ID not set, skipping

2026-05-15T14:27:36.984334874Z [inf]  apps/frontend postinstall: Done

2026-05-15T14:27:37.357325426Z [inf]  . postinstall$ pnpm run prisma-generate

2026-05-15T14:27:37.904397752Z [inf]  . postinstall: > gitroom@1.0.0 prisma-generate /app

2026-05-15T14:27:37.904682299Z [inf]  . postinstall: > pnpm dlx prisma@6.5.0 generate --schema ./libraries/nestjs-libraries/src/database/prisma/schema.prisma

2026-05-15T14:27:39.377735677Z [inf]  . postinstall: Progress: resolved 1, reused 0, downloaded 0, added 0

2026-05-15T14:27:40.377483368Z [inf]  . postinstall: Progress: resolved 35, reused 0, downloaded 0, added 0

2026-05-15T14:27:41.329290915Z [inf]  . postinstall: Packages: +12

2026-05-15T14:27:41.329322001Z [inf]  . postinstall: ++++++++++++

2026-05-15T14:27:41.377272912Z [inf]  . postinstall: Progress: resolved 38, reused 0, downloaded 0, added 0

2026-05-15T14:27:41.63350505Z [inf]  . postinstall: Progress: resolved 38, reused 10, downloaded 2, added 12, done

2026-05-15T14:27:41.655250147Z [inf]  . postinstall: .../19e2c092c4b-52/node_modules/prisma preinstall$ node scripts/preinstall-entry.js

2026-05-15T14:27:41.753956307Z [inf]  . postinstall: .../19e2c092c4b-52/node_modules/prisma preinstall: Done

2026-05-15T14:27:42.92196938Z [inf]  . postinstall: Prisma schema loaded from libraries/nestjs-libraries/src/database/prisma/schema.prisma

2026-05-15T14:27:43.866742085Z [inf]  . postinstall: ✔ Generated Prisma Client (v6.5.0) to ./node_modules/@prisma/client in 493ms

2026-05-15T14:27:43.86677871Z [inf]  . postinstall: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

2026-05-15T14:27:43.866897268Z [inf]  . postinstall: Tip: Need your database queries to be 1000x faster? Accelerate offers you that and more: https://pris.ly/tip-2-accelerate

2026-05-15T14:27:44.232951736Z [inf]  . postinstall: Done

2026-05-15T14:27:44.607267227Z [inf]  Done in 23.8s using pnpm v10.6.1

2026-05-15T14:27:48.379652910Z [inf]  [ 9/10] RUN pnpm install
2026-05-15T14:27:48.535361320Z [inf]  [10/10] RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm run build
2026-05-15T14:27:53.083293484Z [inf]  
> gitroom@1.0.0 build /app
> pnpm -r --workspace-concurrency=1 --filter ./apps/frontend --filter ./apps/backend --filter ./apps/orchestrator run build


2026-05-15T14:27:53.593242606Z [inf]  Scope: 3 of 7 workspace projects

2026-05-15T14:27:53.598393389Z [inf]  
> postiz-frontend@1.0.0 build /app/apps/frontend
> next build


2026-05-15T14:27:54.380918557Z [inf]  Attention: Next.js now collects completely anonymous telemetry regarding usage.

2026-05-15T14:27:54.381079248Z [inf]  This information is used to shape Next.js' roadmap and prioritize features.

2026-05-15T14:27:54.381138387Z [inf]  You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry


2026-05-15T14:27:54.437990681Z [inf]  ▲ Next.js 16.2.1 (Turbopack)

2026-05-15T14:27:54.438148598Z [inf]  - Experiments (use with caution):

2026-05-15T14:27:54.438238523Z [inf]    · clientTraceMetadata

2026-05-15T14:27:54.438279074Z [inf]    · proxyTimeout: 90000

2026-05-15T14:27:54.438987257Z [inf]  
2026-05-15T14:27:54.513646405Z [inf]    Creating an optimized production build ...

2026-05-15T14:28:19.250238578Z [inf]  ✓ Compiled successfully in 24.2s

2026-05-15T14:28:19.251714904Z [inf]    Running next.config.js provided runAfterProductionCompile ...

2026-05-15T14:28:19.915300675Z [inf]  ✓ Completed runAfterProductionCompile in 663ms

2026-05-15T14:28:19.91679624Z [inf]    Running TypeScript ...

2026-05-15T14:28:34.574910618Z [inf]    Finished TypeScript in 14.7s ...

2026-05-15T14:28:34.579546509Z [inf]    Collecting page data using 29 workers ...

2026-05-15T14:28:38.633961561Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.637330539Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.648657665Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.655713988Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.656024735Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.661126625Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.674906102Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:38.682507625Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:39.278444783Z [inf]  🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙

2026-05-15T14:28:39.314354675Z [inf]    Generating static pages using 29 workers (0/2) ...

2026-05-15T14:28:39.719227653Z [inf]  ✓ Generating static pages using 29 workers (2/2) in 405ms

2026-05-15T14:28:39.740564386Z [inf]    Finalizing page optimization ...

2026-05-15T14:28:39.758975467Z [inf]  
2026-05-15T14:28:39.761025645Z [inf]  Route (app)
┌ ○ /_not-found
├ ƒ /admin/errors
├ ƒ /agents
├ ƒ /agents/[id]
├ ƒ /analytics
├ ƒ /api/uploads/[[...path]]
├ ƒ /auth
├ ƒ /auth/activate
├ ƒ /auth/activate/[code]
├ ƒ /auth/forgot
├ ƒ /auth/forgot/[token]
├ ƒ /auth/login
├ ƒ /auth/login-required
├ ƒ /billing
├ ƒ /billing/lifetime
├ ƒ /err
├ ƒ /integrations/social/[provider]
├ ƒ /launches
├ ƒ /media
├ ƒ /modal/[style]/[platform]
├ ƒ /oauth/authorize
├ ƒ /p/[id]
├ ƒ /plugs
├ ƒ /provider/[p]
├ ƒ /provider/add
├ ƒ /settings
└ ƒ /third-party


ƒ Proxy (Middleware)


2026-05-15T14:28:39.761086256Z [inf]  ○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


2026-05-15T14:28:40.269429246Z [inf]  
> postiz-backend@1.0.0 build /app/apps/backend
> cross-env NODE_ENV=production nest build


2026-05-15T14:29:07.847625783Z [inf]  [96msrc/api/routes/copilot.controller.ts[0m:[93m55[0m:[93m9[0m - [91merror[0m[90m TS2739: [0mType 'OpenAI' is missing the following properties from type 'OpenAI': defaultHeaders, httpAgent, calculateContentLength, parseHeaders

[7m55[0m         openai: getOpenAIClient('copilot'),
[7m  [0m [91m        ~~~~~~[0m

  [96m../../node_modules/@copilotkit/runtime/dist/groq-adapter-c8aec5c5.d.ts[0m:[93m64[0m:[93m5[0m
    [7m64[0m     openai?: OpenAI;
    [7m  [0m [96m    ~~~~~~[0m
    The expected type comes from property 'openai' which is declared here on type 'OpenAIAdapterParams'
[96msrc/api/routes/copilot.controller.ts[0m:[93m99[0m:[93m9[0m - [91merror[0m[90m TS2322: [0mType 'import("/app/node_modules/openai/client").OpenAI' is not assignable to type 'import("/app/node_modules/@copilotkit/runtime/node_modules/openai/index").OpenAI'.

[7m99[0m         openai: getOpenAIClient('copilot'),
[7m  [0m [91m        ~~~~~~[0m

  [96m../../node_modules/@copilotkit/runtime/dist/groq-adapter-c8aec5c5.d.ts[0m:[93m64[0m:[93m5[0m
    [7m64[0m     openai?: OpenAI;
    [7m  [0m [96m    ~~~~~~[0m
    The expected type comes from property 'openai' which is declared here on type 'OpenAIAdapterParams'


2026-05-15T14:29:07.847808568Z [inf]  Found 2 error(s).


2026-05-15T14:29:08.248686127Z [inf]  /app/apps/backend:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  postiz-backend@1.0.0 build: `cross-env NODE_ENV=production nest build`
Exit status 1

2026-05-15T14:29:08.249335632Z [inf]   WARN   Local package.json exists, but node_modules missing, did you mean to install?

2026-05-15T14:29:08.285984394Z [inf]   ELIFECYCLE  Command failed with exit code 1.

2026-05-15T14:29:08.659855688Z [err]  [10/10] RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm run build
2026-05-15T14:29:08.714713578Z [err]  Build Failed: build daemon returned an error < failed to solve: process "/bin/sh -c NODE_OPTIONS=\"--max-old-space-size=4096\" pnpm run build" did not complete successfully: exit code: 1 >