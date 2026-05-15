# Railway AI Variables Guide

This file explains exactly what to put in the AI-related Railway variables for this fork.

## Quick Rule

You have 2 ways to configure AI:

1. Use the old OpenAI-style names
2. Use the new `AI_*` names

If you want the easiest setup, use the old names first:

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

That is enough for most cases.

## Which Variables Matter

### Minimum Setup

Fill these if you want one provider for text and images:

```env
OPENAI_API_KEY=
OPENAI_BASE_URL=
OPENAI_MODEL=
OPENAI_IMAGE_MODEL=
```

What each one means:

- `OPENAI_API_KEY`: your provider API key
- `OPENAI_BASE_URL`: the API base URL of your provider
- `OPENAI_MODEL`: the text/chat model used by most AI features
- `OPENAI_IMAGE_MODEL`: the image generation model

## Best Simple Setup For OpenRouter

If you are using OpenRouter:

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

Use this when:

- you want the easiest setup
- you want one text model for most features
- you want one image model for image generation

## What Uses `OPENAI_MODEL`

This model is used for:

- copilot chat
- agent text generation
- classifier flows
- autopost text generation
- general text prompts

Recommended values:

- `openai/gpt-4o-mini`
- `openai/gpt-4.1-mini`
- `openai/gpt-oss-120b:free`

My recommendation:

- use `openai/gpt-4o-mini` if you want the safest option
- use `openai/gpt-oss-120b:free` only if you want the cheapest text option and accept weaker structured/tool behavior

## What Uses `OPENAI_IMAGE_MODEL`

This model is used for image generation features.

Recommended value:

- `black-forest-labs/flux.2-klein-4b`

Important:

- this must be an image generation model
- do not put a text-only model here
- not every OpenRouter model supports images

## New `AI_*` Variables

These exist for advanced setups where you want different providers or different models for different purposes.

Global defaults:

```env
AI_API_KEY=
AI_BASE_URL=
AI_MODEL=
```

Per-purpose overrides:

```env
AI_COPILOT_API_KEY=
AI_COPILOT_BASE_URL=
AI_COPILOT_MODEL=

AI_AGENT_API_KEY=
AI_AGENT_BASE_URL=
AI_AGENT_MODEL=

AI_CLASSIFIER_API_KEY=
AI_CLASSIFIER_BASE_URL=
AI_CLASSIFIER_MODEL=

AI_AUTOPOST_API_KEY=
AI_AUTOPOST_BASE_URL=
AI_AUTOPOST_MODEL=
```

Image overrides:

```env
AI_IMAGE_API_KEY=
AI_IMAGE_BASE_URL=
AI_IMAGE_MODEL=
```

How they work:

- if a scoped variable exists, the app uses it
- if it does not exist, the app falls back to the global one
- if global `AI_*` is missing, the app can still use the old `OPENAI_*` names

## Easiest Recommendation

If you are lazy and want the least work:

Use only these:

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

That is the best first setup.

## Advanced Example

Use different models for different purposes:

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1

AI_COPILOT_MODEL=openai/gpt-4o-mini
AI_AGENT_MODEL=openai/gpt-4o-mini
AI_CLASSIFIER_MODEL=openai/gpt-4o-mini
AI_AUTOPOST_MODEL=openai/gpt-oss-120b:free
AI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

Use this when:

- you want a stronger model for chat and agent work
- you want a cheaper model for autopost text
- you want a separate image model

## Video Variables

Video is different from text and image in this repo.

The current video flow still uses provider-specific services.

Available variables:

```env
AI_VIDEO_API_KEY=
AI_VIDEO_BASE_URL=
AI_VIDEO_MODEL=

AI_VIDEO_IMAGE_API_KEY=
AI_VIDEO_IMAGE_BASE_URL=
AI_VIDEO_IMAGE_MODEL=

AI_VOICE_API_KEY=
AI_ASSEMBLY_AUTH_KEY=
AI_ASSEMBLY_AUTH_SECRET=
```

What they mean:

- `AI_VIDEO_API_KEY`: API key for the current video provider
- `AI_VIDEO_BASE_URL`: base URL for the current video provider
- `AI_VIDEO_MODEL`: video model name
- `AI_VIDEO_IMAGE_*`: image provider used inside the current video workflow
- `AI_VOICE_API_KEY`: voice provider key
- `AI_ASSEMBLY_AUTH_KEY`: Transloadit auth key
- `AI_ASSEMBLY_AUTH_SECRET`: Transloadit auth secret

Important:

- video is not yet universal like text
- do not assume every OpenRouter video model will work here automatically
- text and image are much more flexible right now than video

## Fill It Like This

### Option 1: Easiest Possible Setup

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

### Option 2: Text Only First

If you want to start with text only:

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=
```

### Option 3: Fully Split Setup

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1

AI_COPILOT_MODEL=openai/gpt-4o-mini
AI_AGENT_MODEL=openai/gpt-4o-mini
AI_CLASSIFIER_MODEL=openai/gpt-4o-mini
AI_AUTOPOST_MODEL=openai/gpt-oss-120b:free
AI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

## Common Mistakes

- putting a text model in `OPENAI_IMAGE_MODEL`
- putting an image model in `OPENAI_MODEL`
- using the wrong OpenRouter model slug
- forgetting `https://openrouter.ai/api/v1` in `OPENAI_BASE_URL`
- trying to use a free text model for image generation

## My Final Recommendation

Start with this:

```env
OPENAI_API_KEY=sk-or-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=openai/gpt-4o-mini
OPENAI_IMAGE_MODEL=black-forest-labs/flux.2-klein-4b
```

Then only move to `AI_*` scoped variables if you really want different models for different features.
