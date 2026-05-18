2026-05-17T13:14:08.259847032Z [inf]  PM2        | 2026-05-17T13:14:05: PM2 log: App [backend:0] online
2026-05-17T13:14:08.259848531Z [inf]  1|orchestrator  | > postiz-orchestrator@1.0.0 start /app/apps/orchestrator
2026-05-17T13:14:08.259853504Z [inf]  PM2        | 2026-05-17T13:14:05: PM2 log: App [orchestrator:1] starting in -fork mode-
2026-05-17T13:14:08.259860804Z [inf]  PM2        | 2026-05-17T13:14:05: PM2 log: App [orchestrator:1] online
2026-05-17T13:14:08.259866745Z [inf]  PM2        | 2026-05-17T13:14:05: PM2 log: App [frontend:2] starting in -fork mode-
2026-05-17T13:14:08.259872339Z [inf]  PM2        | 2026-05-17T13:14:05: PM2 log: App [frontend:2] online
2026-05-17T13:14:08.259880945Z [inf]  
2026-05-17T13:14:08.259957128Z [inf]  /root/.pm2/logs/backend-out.log last 15 lines:
2026-05-17T13:14:08.259964324Z [inf]  /root/.pm2/logs/backend-error.log last 15 lines:
2026-05-17T13:14:08.259970170Z [inf]  /root/.pm2/logs/orchestrator-out.log last 15 lines:
2026-05-17T13:14:08.260768879Z [inf]  1|orchestrator  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/orchestrator/src/main.js
2026-05-17T13:14:08.260775939Z [inf]  2|frontend      | > postiz-frontend@1.0.0 start /app/apps/frontend
2026-05-17T13:14:08.260780903Z [inf]  2|frontend      | > dotenv -e ../../.env -- next start -p 4200
2026-05-17T13:14:08.260785621Z [inf]  2|frontend      | ▲ Next.js 16.2.1
2026-05-17T13:14:08.260790036Z [inf]  2|frontend      | - Local:         http://localhost:4200
2026-05-17T13:14:08.260794319Z [inf]  2|frontend      | - Network:       http://10.168.185.127:4200
2026-05-17T13:14:08.260798609Z [inf]  2|frontend      | ✓ Ready in 144ms
2026-05-17T13:14:08.260805335Z [inf]  2|frontend      | 🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙
2026-05-17T13:14:08.539089039Z [err]  2026/05/17 13:14:08 [error] 20#20: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-17T13:14:08.539097571Z [err]  2026/05/17 13:14:08 [error] 20#20: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-17T13:14:09.667551393Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-17T13:14:09.696926068Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-17T13:14:09.696930418Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:09.721986473Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-17T13:14:09.721990737Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:09.721994548Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +5ms[39m
2026-05-17T13:14:09.725471971Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-17T13:14:09.725481398Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:09.727477520Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:09.727482522Z [inf]  1|orchestrator  | Email service provider: no provider
2026-05-17T13:14:09.729750391Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-17T13:14:09.729761022Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:09.740550248Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mHealthController {/health}:[39m[38;5;3m +11ms[39m
2026-05-17T13:14:09.746610051Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:09 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/health/status, GET} route[39m[38;5;3m +3ms[39m
2026-05-17T13:14:10.879066365Z [err]  2026/05/17 13:14:10 [error] 20#20: *1 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-17T13:14:11.596376624Z [inf]  1|orchestrator  | 2026-05-17T13:14:11.308Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:11.596387355Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:11.596394335Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:11.596472649Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:11.596482508Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:11.596490597Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:11.596498083Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:11.596504639Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:11.596510216Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:11.596515947Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:11.596521361Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:11.596526539Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:11.596531842Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:11.596536401Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 1056 ms { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-17T13:14:11.596550738Z [inf]  1|orchestrator  | 2026-05-17T13:14:11.319Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'main', size: '3.01MB' }
2026-05-17T13:14:11.597514776Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.597523766Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mVideoModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.597532824Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mUploadModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.597540106Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-17T13:14:11.597548104Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:11.597550678Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-17T13:14:11.597556634Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThrottlerModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.597559664Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-17T13:14:11.597566627Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:11.597572991Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mSentryModule dependencies initialized[39m[38;5;3m +20ms[39m
2026-05-17T13:14:11.599685033Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalRegisterMissingSearchAttributesModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.599695663Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mInfiniteWorkflowRegisterModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.599700559Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThirdPartyModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.599703841Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.599711610Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAgentModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.599714159Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-17T13:14:11.599719828Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mChatModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.599723456Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-17T13:14:11.599730276Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.599738168Z [inf]  0|backend       | Email service provider: no provider
2026-05-17T13:14:11.601124549Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.601134901Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mPublicApiModule dependencies initialized[39m[38;5;3m +3ms[39m
2026-05-17T13:14:11.601140003Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mApiModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.620964570Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mRootController {/}:[39m[38;5;3m +112ms[39m
2026-05-17T13:14:11.620970622Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/, GET} route[39m[38;5;3m +2ms[39m
2026-05-17T13:14:11.620976068Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mStripeController {/stripe}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.622498903Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/stripe, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.622505793Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAuthController {/auth}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.622510470Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/can-register, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.622514909Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.622519528Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/login, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.622524344Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.622530364Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot-return, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.624136866Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth-mobile-callback, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.624143882Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.624150112Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/activate, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.624156094Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/resend-activation, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.624162444Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider/exists, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.625972046Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicController {/public}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.625979979Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.625986076Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.625991988Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id/comments, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.625997818Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.626003252Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/modify-subscription, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.626008999Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/crypto/:path, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.626014711Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/stream, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.626023347Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMonitorController {/monitor}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627735741Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/monitor/queue/:name, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627744542Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mEnterpriseController {/enterprise}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627750220Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/create-user, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627755331Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/url, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627760830Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/delete-channel, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627766102Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNoAuthIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627770694Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.627775341Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social-connect/:integration, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.627780100Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/public/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629515791Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/extension-refresh, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629522139Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629526831Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629531439Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/token, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629536304Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mUsersController {/user}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629541378Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/agent-media-sso, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629546266Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/self, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.629550765Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.629555104Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631635557Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631649670Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631656080Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631662391Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631668591Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/api-key/rotate, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631674859Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631683221Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription/tiers, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631689011Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/join-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.631694920Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/organizations, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634001341Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/change-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634006471Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/logout, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634012413Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634017425Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnalyticsController {/analytics}:[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.634021880Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634032431Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634037848Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634042003Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.634046666Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:identifier/internal-plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635772992Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/customers, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635779089Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/group, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635785161Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/customer-name, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635794694Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635800661Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/settings, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635807539Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/nickname, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635811817Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.635816227Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social/:integration, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.635822691Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/time, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637803460Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/mentions, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637811820Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637818914Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/disable, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637825421Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/enable, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637831963Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637839261Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plug/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637848659Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637852866Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.637857408Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plugs/:id/activate, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639843994Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/telegram/updates, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639852409Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639858982Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/status, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639867944Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSettingsController {/settings}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639873261Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.639878610Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639927214Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639936093Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.639944311Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641871096Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPostsController {/posts}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641879564Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/statistics, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641885147Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641891002Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641911100Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/should-shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641916732Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/comments, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641922080Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641927454Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.641933769Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643912101Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643922768Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643930525Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.643936768Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643952057Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643958303Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/old, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643964456Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group/debug-export, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643970037Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.643978556Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645433388Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645439550Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator/draft, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645444905Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645451431Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645457419Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/date, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645463207Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/separate-posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645469011Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMediaController {/media}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645474983Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.645480914Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647118837Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.647123942Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image-with-prompt, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647129508Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-server, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647135186Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/save-media, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647140849Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/information, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647146329Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-simple, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647152488Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:endpoint, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647157658Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.647162308Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video-options, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648677418Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648684525Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video/:type/allowed, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648690584Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mBillingController {/billing}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648699644Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check/:id, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.648707036Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check-discount, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648712928Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/apply-discount, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648718706Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/finish-trial, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648724006Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/is-trial-finished, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.648729272Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/embedded, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650206308Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/subscribe, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650212634Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/portal, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650219724Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650226634Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650232768Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/prorate, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650239130Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/lifetime, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650245381Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/charges, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650251570Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/refund-charges, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.650257280Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651768702Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/add-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651776756Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/crypto, GET} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.651782985Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNotificationsController {/notifications}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651789088Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651794544Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651800471Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mCopilotController {/copilot}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651807208Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/chat, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.651813472Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653635936Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/credits, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653640701Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/:thread/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653645284Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653649908Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mWebhookController {/webhooks}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653653894Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653659222Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653663517Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653667304Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.653672248Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/send, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.653676216Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSignatureController {/signatures}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654956608Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654962004Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/default, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654974596Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654981112Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654986041Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654993764Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAutopostController {/autopost}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.654999276Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.655004127Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.655009248Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.655014128Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656913872Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id/active, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656921861Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656928219Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSetsController {/sets}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656935322Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656942296Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, POST} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.656948664Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656954537Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656963946Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mThirdPartyController {/third-party}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.656969706Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659047201Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659052403Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659056619Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/submit, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659060743Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/function/:id/:functionName, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659065011Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/import, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659069746Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:identifier, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659074308Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAppController {/user/oauth-app}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659078751Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.659082898Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660795091Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660803554Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660809320Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app/rotate-secret, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660814647Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mApprovedAppsController {/user/approved-apps}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660820109Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660826548Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.660832755Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAuthorizedController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660839091Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.660845699Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnnouncementsController {/announcements}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662858568Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662864083Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662876236Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662881204Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAdminController {/admin}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662886378Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662890773Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors/platforms, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662895813Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicIntegrationsController {/public/v1}:[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662901586Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.662908040Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload-from-url, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664761948Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664769593Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664774526Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664781400Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-17T13:14:11.664792359Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/group/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664797521Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/is-connected, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664801996Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664806692Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.664811064Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666495801Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666506603Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666512462Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666517027Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-settings/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666521226Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666527471Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/status, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666531923Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.666536916Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.668195281Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:11.668205138Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:11 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-trigger/:id, POST} route[39m[38;5;3m +0ms[39m
2026-05-17T13:14:12.075562708Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:12 PM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +435ms[39m
2026-05-17T13:14:12.075567145Z [inf]  0|backend       | Backend started successfully on port 3000
2026-05-17T13:14:12.077355807Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:12 PM [32m    LOG[39m [32mConfiguration check completed without any issues[39m
2026-05-17T13:14:12.077366600Z [inf]  0|backend       | [32m[Nest] 284  - [39m05/17/2026, 1:14:12 PM [32m    LOG[39m [32m🚀 Backend is running on: http://localhost:3000[39m
2026-05-17T13:14:12.235436879Z [inf]  1|orchestrator  | 2026-05-17T13:14:12.233Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:12.235443983Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:12.235450431Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:12.235456831Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:12.235463378Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:12.235469278Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:12.235475662Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:12.235484182Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:12.235490819Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:12.235496691Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:12.235502846Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:12.235509060Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:12.235514600Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:12.235520991Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 588 ms { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-17T13:14:12.248647144Z [inf]  1|orchestrator  | 2026-05-17T13:14:12.246Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'x', size: '3.01MB' }
2026-05-17T13:14:13.071481718Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 558 ms { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-17T13:14:13.071527068Z [inf]  1|orchestrator  | 2026-05-17T13:14:13.068Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:13.071533341Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:13.071539254Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:13.071545394Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:13.071551998Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:13.071559398Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:13.071565750Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:13.071578097Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:13.071585107Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:13.071590956Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:13.071596979Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:13.071603539Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:13.071609433Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:13.086147416Z [inf]  1|orchestrator  | 2026-05-17T13:14:13.082Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'linkedin', size: '3.01MB' }
2026-05-17T13:14:13.856416259Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:13.856428038Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:13.856436730Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:13.856444831Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:13.856451762Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:13.856456200Z [inf]  1|orchestrator  | 2026-05-17T13:14:13.854Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:13.856461016Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:13.856466284Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:13.856470618Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 494 ms { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-17T13:14:13.856473015Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:13.856477645Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:13.856482282Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:13.856486738Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:13.856491017Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:13.870513300Z [inf]  1|orchestrator  | 2026-05-17T13:14:13.867Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'reddit', size: '3.01MB' }
2026-05-17T13:14:14.577200459Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:14.577202912Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:14.577203539Z [inf]  1|orchestrator  | 2026-05-17T13:14:14.572Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:14.577210033Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 449 ms { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-17T13:14:14.577214668Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:14.577215172Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:14.577224250Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:14.577225121Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:14.577225167Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:14.577231185Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:14.577235234Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:14.577236953Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:14.577243546Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:14.577250693Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:14.589821732Z [inf]  1|orchestrator  | 2026-05-17T13:14:14.587Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'instagram', size: '3.01MB' }
2026-05-17T13:14:14.971232276Z [err]  2026/05/17 13:14:14 [error] 20#20: *1 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-17T13:14:15.567328085Z [inf]  1|orchestrator  | 2026-05-17T13:14:15.384Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'facebook', size: '3.01MB' }
2026-05-17T13:14:15.567332858Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:15.567338876Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:15.567345732Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:15.567346667Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:15.567353521Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:15.567359220Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:15.567364442Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:15.567371882Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:15.567377618Z [inf]  1|orchestrator  | 2026-05-17T13:14:15.373Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:15.567380428Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 506 ms { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-17T13:14:15.567404250Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:15.567412922Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:15.567419040Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:15.567424658Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:16.068022654Z [inf]  1|orchestrator  | 2026-05-17T13:14:16.065Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:16.068029467Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:16.068035563Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:16.068041187Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:16.068041440Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:16.068046818Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:16.068054121Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:16.068054191Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:16.068065089Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:16.068071414Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:16.068077546Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:16.068083675Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:16.068089802Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:16.068095511Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 432 ms { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-17T13:14:16.079015801Z [inf]  1|orchestrator  | 2026-05-17T13:14:16.076Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'threads', size: '3.01MB' }
2026-05-17T13:14:16.789779222Z [inf]  1|orchestrator  | 2026-05-17T13:14:16.787Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:16.789785046Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:16.789790739Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:16.789796531Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:16.789802387Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:16.789808695Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:16.789814133Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:16.789820101Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:16.789825598Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:16.789831296Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:16.789837897Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:16.789843836Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:16.789849021Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:16.789853501Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 439 ms { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-17T13:14:16.800585171Z [inf]  1|orchestrator  | 2026-05-17T13:14:16.798Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'youtube', size: '3.01MB' }
2026-05-17T13:14:17.569765439Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:17.569774705Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:17.569781808Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:17.569786896Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 443 ms { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-17T13:14:17.569791995Z [inf]  1|orchestrator  | 2026-05-17T13:14:17.523Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'gmb', size: '3.01MB' }
2026-05-17T13:14:17.569800942Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:17.569805769Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:17.569811974Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:17.569814433Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:17.569819322Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:17.569823448Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:17.569826948Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:17.569832339Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:17.569839083Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:17.569865817Z [inf]  1|orchestrator  | 2026-05-17T13:14:17.512Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:18.582323800Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:18.582333556Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:18.582335545Z [inf]  1|orchestrator  | 2026-05-17T13:14:18.299Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:18.582341660Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:18.582347708Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:18.582350360Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:18.582354483Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:18.582360256Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:18.582361046Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:18.582368607Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:18.582372545Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:18.582375116Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:18.582382714Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:18.582389125Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 511 ms { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-17T13:14:18.582395732Z [inf]  1|orchestrator  | 2026-05-17T13:14:18.310Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'tiktok', size: '3.01MB' }
2026-05-17T13:14:18.583649463Z [err]  2026/05/17 13:14:18 [error] 20#20: *1 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-17T13:14:19.086086958Z [inf]  1|orchestrator  | 2026-05-17T13:14:19.082Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:19.086092201Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:19.086097393Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:19.086101614Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:19.086107891Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:19.086114180Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:19.086120109Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:19.086130341Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:19.086136421Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:19.086143146Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:19.086152281Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:19.086157229Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:19.086161794Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:19.086166196Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 481 ms { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-17T13:14:19.096003467Z [inf]  1|orchestrator  | 2026-05-17T13:14:19.093Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'pinterest', size: '3.01MB' }
2026-05-17T13:14:19.799803088Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:19.799813178Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 456 ms { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-17T13:14:19.799826976Z [inf]  1|orchestrator  | 2026-05-17T13:14:19.794Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:19.799830003Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:19.799835473Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:19.799838921Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:19.799846252Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:19.799848104Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:19.799855417Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:19.799858544Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:19.799864891Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:19.799867856Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:19.799872569Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:19.799878852Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:19.806830287Z [inf]  1|orchestrator  | 2026-05-17T13:14:19.804Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'dribbble', size: '3.01MB' }
2026-05-17T13:14:20.597167106Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:20.597178340Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 453 ms { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-17T13:14:20.597194535Z [inf]  1|orchestrator  | 2026-05-17T13:14:20.520Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'discord', size: '3.01MB' }
2026-05-17T13:14:20.597211610Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:20.597218158Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:20.597223346Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:20.597228200Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:20.597230113Z [inf]  1|orchestrator  | 2026-05-17T13:14:20.509Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:20.597231265Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:20.597236979Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:20.597242001Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:20.597242675Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:20.597250537Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:20.597260244Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:20.597267626Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:21.185160309Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:21.185168617Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:21.185173976Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:21.185178729Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:21.185183728Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:21.185188858Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:21.185194374Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 415 ms { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-17T13:14:21.185238069Z [inf]  1|orchestrator  | 2026-05-17T13:14:21.182Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:21.185246225Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:21.185254063Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:21.185260720Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:21.185267801Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:21.185273561Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:21.185279434Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:21.198464393Z [inf]  1|orchestrator  | 2026-05-17T13:14:21.192Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'slack', size: '3.01MB' }
2026-05-17T13:14:21.883948376Z [inf]  1|orchestrator  | 2026-05-17T13:14:21.876Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:21.883954039Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:21.883959531Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:21.883964836Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:21.883969713Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:21.883973356Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:21.883978596Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:21.883982406Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:21.883986301Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:21.883990505Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:21.883994309Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:21.883999601Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:21.884003486Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:21.884007135Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 429 ms { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-17T13:14:21.891006846Z [inf]  1|orchestrator  | 2026-05-17T13:14:21.886Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'kick', size: '3.01MB' }
2026-05-17T13:14:22.599084725Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:22.599096318Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:22.599103336Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:22.599109743Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 453 ms { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-17T13:14:22.599122649Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:22.599129760Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:22.599135381Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:22.599140822Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:22.599146762Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:22.599153803Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:22.599161084Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:22.599168797Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:22.599170622Z [inf]  1|orchestrator  | 2026-05-17T13:14:22.595Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:22.599176922Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:22.609043883Z [inf]  1|orchestrator  | 2026-05-17T13:14:22.605Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'twitch', size: '3.01MB' }
2026-05-17T13:14:23.591859501Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:23.591867276Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:23.591869257Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:23.591873043Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:23.591880643Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:23.591881299Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 432 ms { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-17T13:14:23.591882567Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:23.591883509Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:23.591903323Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:23.591914447Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:23.591922720Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:23.591938499Z [inf]  1|orchestrator  | 2026-05-17T13:14:23.297Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:23.591948380Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:23.591955188Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:23.592444091Z [inf]  1|orchestrator  | 2026-05-17T13:14:23.307Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mastodon', size: '3.01MB' }
2026-05-17T13:14:24.011271454Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:24.011279385Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:24.011285937Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:24.011291693Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:24.011298337Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:24.011304828Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:24.011309837Z [inf]  1|orchestrator  | 2026-05-17T13:14:24.005Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:24.011312457Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 444 ms { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-17T13:14:24.011317301Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:24.011325960Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:24.011331176Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:24.011336406Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:24.011341128Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:24.011346247Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:24.017866658Z [inf]  1|orchestrator  | 2026-05-17T13:14:24.014Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'bluesky', size: '3.01MB' }
2026-05-17T13:14:24.690869488Z [inf]  1|orchestrator  | 2026-05-17T13:14:24.682Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:24.690874582Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:24.690879408Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:24.690883872Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:24.690888871Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:24.690895088Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:24.690899092Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:24.690903114Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:24.690907485Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:24.690911705Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:24.690915840Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:24.690919545Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:24.690924115Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:24.690928532Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 420 ms { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-17T13:14:24.699620651Z [inf]  1|orchestrator  | 2026-05-17T13:14:24.695Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'lemmy', size: '3.01MB' }
2026-05-17T13:14:25.598501602Z [inf]  1|orchestrator  | 2026-05-17T13:14:25.344Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:25.598506397Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:25.598512166Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:25.598517339Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:25.598523210Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:25.598529377Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:25.598534854Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:25.598540413Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:25.598546175Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:25.598551375Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:25.598556780Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:25.598562323Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:25.598567438Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:25.598571835Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 393 ms { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-17T13:14:25.598577478Z [inf]  1|orchestrator  | 2026-05-17T13:14:25.357Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wrapcast', size: '3.01MB' }
2026-05-17T13:14:26.069951253Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:26.069962748Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:26.069970768Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:26.069978566Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 433 ms { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-17T13:14:26.069996968Z [inf]  1|orchestrator  | 2026-05-17T13:14:26.067Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:26.070005148Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:26.070012465Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:26.070019400Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:26.070026425Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:26.070032873Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:26.070039346Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:26.070050340Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:26.070055278Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:26.070059429Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:26.082027832Z [inf]  1|orchestrator  | 2026-05-17T13:14:26.079Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'telegram', size: '3.01MB' }
2026-05-17T13:14:26.759269533Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:26.759278309Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:26.759284335Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:26.759290790Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 422 ms { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-17T13:14:26.759291083Z [inf]  1|orchestrator  | 2026-05-17T13:14:26.757Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:26.759300731Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:26.759307145Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:26.759321766Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:26.759328401Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:26.759334471Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:26.759339941Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:26.759345762Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:26.759351784Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:26.759358057Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:26.775252915Z [inf]  1|orchestrator  | 2026-05-17T13:14:26.768Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'nostr', size: '3.01MB' }
2026-05-17T13:14:27.603066940Z [inf]  1|orchestrator  | 2026-05-17T13:14:27.393Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:27.603072192Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 390 ms { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-17T13:14:27.603079111Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:27.603083471Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:27.603085914Z [inf]  1|orchestrator  | 2026-05-17T13:14:27.404Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'vk', size: '3.01MB' }
2026-05-17T13:14:27.603089079Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:27.603095582Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:27.603098924Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:27.603103033Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:27.603103234Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:27.603115168Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:27.603121902Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:27.603133671Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:27.603141157Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:27.603147584Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:28.084339855Z [inf]  1|orchestrator  | 2026-05-17T13:14:28.081Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:28.084353085Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:28.084361750Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:28.084370273Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:28.084377179Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:28.084384411Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:28.084390879Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:28.084397564Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:28.084405413Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:28.084413018Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:28.084419890Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:28.084427429Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:28.084434227Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:28.084441221Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 427 ms { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-17T13:14:28.097527593Z [inf]  1|orchestrator  | 2026-05-17T13:14:28.094Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'medium', size: '3.01MB' }
2026-05-17T13:14:28.800097519Z [inf]  1|orchestrator  | 2026-05-17T13:14:28.797Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:28.800108628Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:28.800116222Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:28.800122452Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:28.800130402Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:28.800137118Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:28.800143502Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:28.800149790Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:28.800155629Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:28.800161336Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:28.800167552Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:28.800173482Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:28.800180438Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:28.800186467Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 425 ms { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-17T13:14:28.814837519Z [inf]  1|orchestrator  | 2026-05-17T13:14:28.809Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'devto', size: '3.01MB' }
2026-05-17T13:14:29.661890536Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:29.661901507Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:29.661908938Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 491 ms { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-17T13:14:29.661914078Z [inf]  1|orchestrator  | 2026-05-17T13:14:29.580Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'hashnode', size: '3.01MB' }
2026-05-17T13:14:29.661948544Z [inf]  1|orchestrator  | 2026-05-17T13:14:29.567Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:29.661958501Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:29.661964538Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:29.661969288Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:29.661974684Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:29.661981786Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:29.661987447Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:29.661994434Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:29.662005009Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:29.662012408Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:29.662017222Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:30.245347559Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:30.245352614Z [inf]  1|orchestrator  | 2026-05-17T13:14:30.241Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:30.245357097Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:30.245360117Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:30.245366917Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 416 ms { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-17T13:14:30.245369861Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:30.245375933Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:30.245381759Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:30.245388002Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:30.245393923Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:30.245401669Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:30.245407331Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:30.245413215Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:30.245418567Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:30.259973454Z [inf]  1|orchestrator  | 2026-05-17T13:14:30.253Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wordpress', size: '3.01MB' }
2026-05-17T13:14:30.896225930Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:30.896235977Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:30.896242383Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:30.896248277Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:30.896255117Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 394 ms { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-17T13:14:30.896258788Z [inf]  1|orchestrator  | 2026-05-17T13:14:30.890Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:30.896265597Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:30.896271981Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:30.896278196Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:30.896284275Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:30.896291529Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:30.896298205Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:30.896304540Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:30.896310875Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:30.905153304Z [inf]  1|orchestrator  | 2026-05-17T13:14:30.901Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'listmonk', size: '3.01MB' }
2026-05-17T13:14:31.604903493Z [inf]  1|orchestrator  | 2026-05-17T13:14:31.585Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'moltbook', size: '3.01MB' }
2026-05-17T13:14:31.604913665Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:31.604927481Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:31.604934912Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:31.604940816Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:31.604946604Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:31.604952754Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:31.604959032Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:31.604965600Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:31.604971310Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 426 ms { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-17T13:14:31.605070275Z [inf]  1|orchestrator  | 2026-05-17T13:14:31.572Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:31.605076515Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:31.605083280Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:31.605089294Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:31.605100143Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:32.251602340Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:32.251612544Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:32.251612619Z [inf]  1|orchestrator  | 2026-05-17T13:14:32.245Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:32.251621361Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:32.251622575Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:32.251630180Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:32.251632277Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:32.251639242Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:32.251642147Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 408 ms { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-17T13:14:32.251647627Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:32.251653959Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:32.251660006Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:32.251666285Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:32.251671414Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:32.264040007Z [inf]  1|orchestrator  | 2026-05-17T13:14:32.260Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'whop', size: '3.01MB' }
2026-05-17T13:14:33.026732182Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.025Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:33.026737588Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:33.026743418Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:33.026749458Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:33.026755314Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:33.026761007Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:33.026767254Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:33.026772779Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:33.026778526Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:33.026784292Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:33.026789791Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:33.026795455Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:33.026801408Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:33.026807946Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 475 ms { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-17T13:14:33.037709744Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.035Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'skool', size: '3.01MB' }
2026-05-17T13:14:33.731773787Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:33.731785716Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-17T13:14:33.731794114Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 442 ms { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-17T13:14:33.731820901Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.729Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-17T13:14:33.731826970Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-17T13:14:33.731832594Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-17T13:14:33.731840359Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-17T13:14:33.731845631Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-17T13:14:33.731849887Z [inf]  1|orchestrator  |   + 4 modules
2026-05-17T13:14:33.731853914Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-17T13:14:33.731857893Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-17T13:14:33.731862337Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-17T13:14:33.731866845Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-17T13:14:33.731870837Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-17T13:14:33.745074378Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.740Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mewe', size: '3.01MB' }
2026-05-17T13:14:33.985457712Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.981Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'main', state: 'RUNNING' }
2026-05-17T13:14:33.985463970Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.984Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-17T13:14:33.992427367Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.986Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'x', state: 'RUNNING' }
2026-05-17T13:14:33.992434163Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.986Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-17T13:14:33.992441270Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.987Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'linkedin', state: 'RUNNING' }
2026-05-17T13:14:33.992447653Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.987Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-17T13:14:33.992454433Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.988Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'reddit', state: 'RUNNING' }
2026-05-17T13:14:33.992460919Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.988Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-17T13:14:33.992467957Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.989Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'instagram', state: 'RUNNING' }
2026-05-17T13:14:33.992476707Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.989Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-17T13:14:33.992483319Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.989Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'facebook', state: 'RUNNING' }
2026-05-17T13:14:33.992489496Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-17T13:14:33.992497800Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'threads', state: 'RUNNING' }
2026-05-17T13:14:33.993998011Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-17T13:14:33.994004848Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'youtube', state: 'RUNNING' }
2026-05-17T13:14:33.994011815Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-17T13:14:33.994018008Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.990Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'gmb', state: 'RUNNING' }
2026-05-17T13:14:33.994024991Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-17T13:14:33.994031237Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.991Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'tiktok', state: 'RUNNING' }
2026-05-17T13:14:33.994038375Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-17T13:14:33.994050736Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.991Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'pinterest', state: 'RUNNING' }
2026-05-17T13:14:33.994057255Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-17T13:14:33.994063778Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'dribbble', state: 'RUNNING' }
2026-05-17T13:14:33.994070053Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-17T13:14:33.995982930Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'discord', state: 'RUNNING' }
2026-05-17T13:14:33.995993845Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-17T13:14:33.996001291Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'slack', state: 'RUNNING' }
2026-05-17T13:14:33.996007399Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-17T13:14:33.996013163Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'kick', state: 'RUNNING' }
2026-05-17T13:14:33.996019488Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-17T13:14:33.996025855Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'twitch', state: 'RUNNING' }
2026-05-17T13:14:33.996033157Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-17T13:14:33.996038962Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mastodon', state: 'RUNNING' }
2026-05-17T13:14:33.996046747Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-17T13:14:33.996053139Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'bluesky', state: 'RUNNING' }
2026-05-17T13:14:33.997861924Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-17T13:14:33.997868514Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'lemmy', state: 'RUNNING' }
2026-05-17T13:14:33.997875321Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-17T13:14:33.997881002Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wrapcast', state: 'RUNNING' }
2026-05-17T13:14:33.997897355Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-17T13:14:33.997903463Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'telegram', state: 'RUNNING' }
2026-05-17T13:14:33.997908700Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-17T13:14:33.997915296Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'nostr', state: 'RUNNING' }
2026-05-17T13:14:33.997920872Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-17T13:14:33.997927801Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'vk', state: 'RUNNING' }
2026-05-17T13:14:33.997933358Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-17T13:14:33.999168984Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'medium', state: 'RUNNING' }
2026-05-17T13:14:33.999177001Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-17T13:14:33.999182222Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'devto', state: 'RUNNING' }
2026-05-17T13:14:33.999188694Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-17T13:14:33.999193642Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'hashnode', state: 'RUNNING' }
2026-05-17T13:14:33.999198240Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-17T13:14:33.999202737Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wordpress', state: 'RUNNING' }
2026-05-17T13:14:33.999206980Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-17T13:14:33.999213157Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'listmonk', state: 'RUNNING' }
2026-05-17T13:14:33.999219404Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-17T13:14:33.999224995Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'moltbook', state: 'RUNNING' }
2026-05-17T13:14:34.000975440Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-17T13:14:34.000986623Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'whop', state: 'RUNNING' }
2026-05-17T13:14:34.000994192Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-17T13:14:34.001000999Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.997Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'skool', state: 'RUNNING' }
2026-05-17T13:14:34.001007775Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.997Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-17T13:14:34.001015179Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.997Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mewe', state: 'RUNNING' }
2026-05-17T13:14:34.001021339Z [inf]  1|orchestrator  | 2026-05-17T13:14:33.997Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-17T13:14:34.001027150Z [inf]  1|orchestrator  | [32m[Nest] 296  - [39m05/17/2026, 1:14:33 PM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +24257ms[39m
2026-05-17T13:14:34.002166191Z [inf]  1|orchestrator  | Orchestrator health check listening on port 3002
2026-05-17T13:24:54.893623244Z [inf]  0|backend       |     visibility: 'banner',
2026-05-17T13:24:54.893634056Z [inf]  0|backend       |     severity: 'critical',
2026-05-17T13:24:54.893641246Z [inf]  0|backend       |     troubleshootingUrl: 'https://docs.copilotkit.ai/troubleshooting/common-issues#i-am-getting-a-network-errors--api-not-found',
2026-05-17T13:24:54.893646760Z [inf]  0|backend       |     originalError: CopilotKitLowLevelError [GraphQLError]: OpenAI API error: Cannot read properties of undefined (reading 'completions')
2026-05-17T13:24:54.893658498Z [inf]  0|backend       | [OpenAI] Error during API call: TypeError: Cannot read properties of undefined (reading 'completions')
2026-05-17T13:24:54.893665918Z [inf]  0|backend       |     at OpenAIAdapter.process (/app/node_modules/@copilotkit/runtime/dist/index.js:462:44)
2026-05-17T13:24:54.893672904Z [inf]  0|backend       |     at CopilotRuntime.processRuntimeRequest (/app/node_modules/@copilotkit/runtime/dist/index.js:5064:43)
2026-05-17T13:24:54.893679871Z [inf]  0|backend       |     at async CopilotResolver.generateCopilotResponse (/app/node_modules/@copilotkit/runtime/dist/index.js:7324:25)
2026-05-17T13:24:54.893686275Z [inf]  0|backend       | Application error: GraphQLError: OpenAI API error: Cannot read properties of undefined (reading 'completions')
2026-05-17T13:24:54.893692636Z [inf]  0|backend       |     at CopilotResolver.generateCopilotResponse (/app/node_modules/@copilotkit/runtime/dist/index.js:7343:15) {
2026-05-17T13:24:54.893699926Z [inf]  0|backend       |   path: [ 'generateCopilotResponse' ],
2026-05-17T13:24:54.893706470Z [inf]  0|backend       |   locations: [ { line: 2, column: 3 } ],
2026-05-17T13:24:54.893712871Z [inf]  0|backend       |   extensions: {
2026-05-17T13:24:54.893719429Z [inf]  0|backend       |     name: 'CopilotError',
2026-05-17T13:24:54.893725932Z [inf]  0|backend       |     statusCode: 503,
2026-05-17T13:24:54.893733038Z [inf]  0|backend       |     code: 'NETWORK_ERROR',
2026-05-17T13:24:54.895148828Z [inf]  0|backend       |       severity: 'critical',
2026-05-17T13:24:54.895157853Z [inf]  0|backend       |       visibility: 'banner',
2026-05-17T13:24:54.895364775Z [inf]  0|backend       |         at new CopilotKitError (/app/node_modules/@copilotkit/shared/dist/index.js:349:5)
2026-05-17T13:24:54.895372743Z [inf]  0|backend       |         at new CopilotKitLowLevelError (/app/node_modules/@copilotkit/shared/dist/index.js:464:5)
2026-05-17T13:24:54.895377230Z [inf]  0|backend       |         at convertServiceAdapterError (/app/node_modules/@copilotkit/runtime/dist/index.js:376:27)
2026-05-17T13:24:54.895382671Z [inf]  0|backend       |         at OpenAIAdapter.process (/app/node_modules/@copilotkit/runtime/dist/index.js:554:13)
2026-05-17T13:24:54.895388634Z [inf]  0|backend       |         at CopilotRuntime.processRuntimeRequest (/app/node_modules/@copilotkit/runtime/dist/index.js:5064:43)
2026-05-17T13:24:54.895393324Z [inf]  0|backend       |         at async CopilotResolver.generateCopilotResponse (/app/node_modules/@copilotkit/runtime/dist/index.js:7324:25) {
2026-05-17T13:24:54.895398026Z [inf]  0|backend       |       path: undefined,
2026-05-17T13:24:54.895402373Z [inf]  0|backend       |       locations: undefined,
2026-05-17T13:24:54.895413986Z [inf]  0|backend       |       extensions: [Object],
2026-05-17T13:24:54.895418773Z [inf]  0|backend       |       code: 'NETWORK_ERROR',
2026-05-17T13:24:54.895423215Z [inf]  0|backend       |       statusCode: 503,
2026-05-17T13:24:54.896386211Z [inf]  0|backend       |       originalErrorType: 'TypeError'
2026-05-17T13:24:54.896392807Z [inf]  0|backend       |     }
2026-05-17T13:24:54.896398121Z [inf]  0|backend       |   }
2026-05-17T13:24:54.896407971Z [inf]  0|backend       | }
2026-05-17T13:25:34.627699537Z [inf]  0|backend       | {
2026-05-17T13:25:34.627706327Z [inf]  0|backend       |   "type": "schedule",
2026-05-17T13:25:34.627710613Z [inf]  0|backend       |   "inter": 1,
2026-05-17T13:25:34.627716188Z [inf]  0|backend       |   "tags": [],
2026-05-17T13:25:34.627720218Z [inf]  0|backend       |   "shortLink": false,
2026-05-17T13:25:34.627724780Z [inf]  0|backend       |   "date": "2026-05-17T13:30:00",
2026-05-17T13:25:34.627728718Z [inf]  0|backend       |   "posts": [
2026-05-17T13:25:34.627734149Z [inf]  0|backend       |     {
2026-05-17T13:25:34.627738692Z [inf]  0|backend       |       "integration": {
2026-05-17T13:25:34.627742695Z [inf]  0|backend       |         "id": "cmp9psz0q0001pe807uxpz08h"
2026-05-17T13:25:34.627747219Z [inf]  0|backend       |       },
2026-05-17T13:25:34.627751334Z [inf]  0|backend       |       "group": "CWMRPelni9",
2026-05-17T13:25:34.627756000Z [inf]  0|backend       |       "settings": {
2026-05-17T13:25:34.627760230Z [inf]  0|backend       |         "url": ""
2026-05-17T13:25:34.627764203Z [inf]  0|backend       |       },
2026-05-17T13:25:34.627768435Z [inf]  0|backend       |       "value": [
2026-05-17T13:25:34.627773057Z [inf]  0|backend       |         {
2026-05-17T13:25:34.627777450Z [inf]  0|backend       |           "id": "Ra9lObCBVc",
2026-05-17T13:25:34.627781373Z [inf]  0|backend       |           "content": "<p>Hi Testing</p>",
2026-05-17T13:25:34.627785685Z [inf]  0|backend       |           "delay": 0,
2026-05-17T13:25:34.627790188Z [inf]  0|backend       |           "image": []
2026-05-17T13:25:34.627794308Z [inf]  0|backend       |         }
2026-05-17T13:25:34.627798289Z [inf]  0|backend       |       ]
2026-05-17T13:25:34.627802193Z [inf]  0|backend       |     }
2026-05-17T13:25:34.629427920Z [inf]  0|backend       |   ]
2026-05-17T13:25:34.629433372Z [inf]  0|backend       | }
2026-05-17T13:26:34.638393468Z [inf]  0|backend       |           "image": []
2026-05-17T13:26:34.638395378Z [inf]  0|backend       | {
2026-05-17T13:26:34.638403046Z [inf]  0|backend       |         }
2026-05-17T13:26:34.638407097Z [inf]  0|backend       |   "type": "now",
2026-05-17T13:26:34.638413231Z [inf]  0|backend       |       },
2026-05-17T13:26:34.638414121Z [inf]  0|backend       |   "tags": [],
2026-05-17T13:26:34.638419197Z [inf]  0|backend       |       ]
2026-05-17T13:26:34.638425274Z [inf]  0|backend       |   "shortLink": false,
2026-05-17T13:26:34.638428041Z [inf]  0|backend       |       "value": [
2026-05-17T13:26:34.638432226Z [inf]  0|backend       |   "date": "2026-05-17T13:30:00",
2026-05-17T13:26:34.638438417Z [inf]  0|backend       |         {
2026-05-17T13:26:34.638439318Z [inf]  0|backend       |   "posts": [
2026-05-17T13:26:34.638446115Z [inf]  0|backend       |     {
2026-05-17T13:26:34.638448827Z [inf]  0|backend       |           "id": "el3Vt7Q6yU",
2026-05-17T13:26:34.638452721Z [inf]  0|backend       |       "integration": {
2026-05-17T13:26:34.638458260Z [inf]  0|backend       |           "content": "<p>Hi Testing</p>",
2026-05-17T13:26:34.638460924Z [inf]  0|backend       |         "id": "cmp9psz0q0001pe807uxpz08h"
2026-05-17T13:26:34.638467467Z [inf]  0|backend       |       },
2026-05-17T13:26:34.638469299Z [inf]  0|backend       |           "delay": 0,
2026-05-17T13:26:34.638473324Z [inf]  0|backend       |       "group": "lNe8NKJNNz",
2026-05-17T13:26:34.638478370Z [inf]  0|backend       |       "settings": {
2026-05-17T13:26:34.638483690Z [inf]  0|backend       |         "url": ""
2026-05-17T13:26:34.640714624Z [inf]  0|backend       |     }
2026-05-17T13:26:34.640723452Z [inf]  0|backend       |   ]
2026-05-17T13:26:34.640730116Z [inf]  0|backend       | }
2026-05-17T13:26:34.640735908Z [inf]  1|orchestrator  | 2026-05-17T13:26:29.275Z [WARN] Activity failed {
2026-05-17T13:26:34.640741684Z [inf]  1|orchestrator  |   sdkComponent: 'worker',
2026-05-17T13:26:34.640747082Z [inf]  1|orchestrator  |   taskQueue: 'facebook',
2026-05-17T13:26:34.640752756Z [inf]  1|orchestrator  |   isLocal: false,
2026-05-17T13:26:34.640758000Z [inf]  1|orchestrator  |   attempt: 1,
2026-05-17T13:26:34.640763413Z [inf]  1|orchestrator  |   namespace: 'default',
2026-05-17T13:26:34.640769103Z [inf]  1|orchestrator  |   taskToken: 'CiQwMTllMzYxMi0zZDMyLTdkYWQtYjQ4OC0zOTE0MmQyNTdhYjQSHnBvc3RfY21wOXQ2cXpnMDAwMW8xN3dxbHZjejRoeRokMDE5ZTM2MWQtZGYzZi03ZTNjLTkzNjYtYjg2ZjE1Nzc1OWQ5IBYoATIBM0IKcG9zdFNvY2lhbEoICAEQi4FAGAE=',
2026-05-17T13:26:34.640774393Z [inf]  1|orchestrator  |   workflowId: 'post_cmp9t6qzg0001o17wqlvcz4hy',
2026-05-17T13:26:34.640779149Z [inf]  1|orchestrator  |   workflowRunId: '019e361d-df3f-7e3c-9366-b86f157759d9',
2026-05-17T13:26:34.640784437Z [inf]  1|orchestrator  |   workflowType: 'postWorkflowV105',
2026-05-17T13:26:34.640789990Z [inf]  1|orchestrator  |   activityId: '3',
2026-05-17T13:26:34.640795118Z [inf]  1|orchestrator  |   activityType: 'postSocial',
2026-05-17T13:26:34.640800189Z [inf]  1|orchestrator  |   error: ApplicationFailure: 
2026-05-17T13:26:34.640805266Z [inf]  1|orchestrator  |       at FacebookProvider.fetch (/app/libraries/nestjs-libraries/src/integrations/social.abstract.ts:167:11)
2026-05-17T13:26:34.642542142Z [inf]  1|orchestrator  |       at processTicksAndRejections (node:internal/process/task_queues:105:5)
2026-05-17T13:26:34.642548404Z [inf]  1|orchestrator  |       at FacebookProvider.post (/app/libraries/nestjs-libraries/src/integrations/social/facebook.provider.ts:475:9)
2026-05-17T13:26:34.642552759Z [inf]  1|orchestrator  |       at PostActivity.postSocial (/app/apps/orchestrator/src/activities/post.activity.ts:223:21)
2026-05-17T13:26:34.642557184Z [inf]  1|orchestrator  |       at Activity.execute (/app/node_modules/@temporalio/worker/src/activity.ts:138:14)
2026-05-17T13:26:34.642561278Z [inf]  1|orchestrator  |       at NativeConnection.withAbortSignal (/app/node_modules/@temporalio/worker/src/connection.ts:220:12)
2026-05-17T13:26:34.642565375Z [inf]  1|orchestrator  |       at Client.withAbortSignal (/app/node_modules/@temporalio/client/src/base-client.ts:105:12)
2026-05-17T13:26:34.642569786Z [inf]  1|orchestrator  |       at /app/node_modules/@temporalio/worker/src/activity.ts:192:24
2026-05-17T13:26:34.642575309Z [inf]  1|orchestrator  |       at /app/node_modules/@temporalio/worker/src/worker.ts:1208:24 {
2026-05-17T13:26:34.642579749Z [inf]  1|orchestrator  |     cause: undefined,
2026-05-17T13:26:34.642584212Z [inf]  1|orchestrator  |     failure: undefined,
2026-05-17T13:26:34.642588625Z [inf]  1|orchestrator  |     type: 'bad_body',
2026-05-17T13:26:34.642592638Z [inf]  1|orchestrator  |     nonRetryable: true,
2026-05-17T13:26:34.642596654Z [inf]  1|orchestrator  |     details: [ [Object] ],
2026-05-17T13:26:34.642600843Z [inf]  1|orchestrator  |     nextRetryDelay: undefined,
2026-05-17T13:26:34.642605522Z [inf]  1|orchestrator  |     category: undefined
2026-05-17T13:26:34.644672250Z [inf]  1|orchestrator  |   },
2026-05-17T13:26:34.644685373Z [inf]  1|orchestrator  |   durationMs: 263
2026-05-17T13:26:34.644692448Z [inf]  1|orchestrator  | }
2026-05-17T13:26:34.644699019Z [inf]  1|orchestrator  | Email sender information not found in environment variables
2026-05-18T04:46:14.440397381Z [inf]  0|backend       |           "id": "zAtJr60fNR",
2026-05-18T04:46:14.440403586Z [inf]  0|backend       | {
2026-05-18T04:46:14.440410521Z [inf]  0|backend       |   "type": "schedule",
2026-05-18T04:46:14.440410522Z [inf]  0|backend       |           "content": "<p>Testing</p>",
2026-05-18T04:46:14.440417703Z [inf]  0|backend       |   "tags": [],
2026-05-18T04:46:14.440420318Z [inf]  0|backend       |           "delay": 0,
2026-05-18T04:46:14.440424589Z [inf]  0|backend       |   "shortLink": false,
2026-05-18T04:46:14.440429125Z [inf]  0|backend       |           "image": []
2026-05-18T04:46:14.440431914Z [inf]  0|backend       |   "date": "2026-05-18T08:40:00",
2026-05-18T04:46:14.440437139Z [inf]  0|backend       |         }
2026-05-18T04:46:14.440438806Z [inf]  0|backend       |   "posts": [
2026-05-18T04:46:14.440444808Z [inf]  0|backend       |       ]
2026-05-18T04:46:14.440445819Z [inf]  0|backend       |     {
2026-05-18T04:46:14.440452861Z [inf]  0|backend       |     }
2026-05-18T04:46:14.440454314Z [inf]  0|backend       |       "integration": {
2026-05-18T04:46:14.440459494Z [inf]  0|backend       |         "id": "cmp9psz0q0001pe807uxpz08h"
2026-05-18T04:46:14.440711015Z [inf]  0|backend       |       },
2026-05-18T04:46:14.440718314Z [inf]  0|backend       |       "group": "PY9WcYbkos",
2026-05-18T04:46:14.440723168Z [inf]  0|backend       |       "settings": {
2026-05-18T04:46:14.440728511Z [inf]  0|backend       |         "url": ""
2026-05-18T04:46:14.440733157Z [inf]  0|backend       |       },
2026-05-18T04:46:14.440739066Z [inf]  0|backend       |       "value": [
2026-05-18T04:46:14.440744646Z [inf]  0|backend       |         {
2026-05-18T04:46:14.441483015Z [inf]  0|backend       |   ]
2026-05-18T04:46:14.441492268Z [inf]  0|backend       | }
2026-05-18T04:46:54.213363876Z [inf]  0|backend       |       "value": [
2026-05-18T04:46:54.213377920Z [inf]  0|backend       |         {
2026-05-18T04:46:54.213387339Z [inf]  0|backend       |           "id": "ZMs0BBdKpg",
2026-05-18T04:46:54.213390036Z [inf]  0|backend       | {
2026-05-18T04:46:54.213397038Z [inf]  0|backend       |           "content": "<p>testing</p>",
2026-05-18T04:46:54.213398760Z [inf]  0|backend       |   "type": "schedule",
2026-05-18T04:46:54.213407083Z [inf]  0|backend       |   "tags": [],
2026-05-18T04:46:54.213407512Z [inf]  0|backend       |           "delay": 0,
2026-05-18T04:46:54.213415647Z [inf]  0|backend       |   "shortLink": false,
2026-05-18T04:46:54.213417882Z [inf]  0|backend       |           "image": []
2026-05-18T04:46:54.213424306Z [inf]  0|backend       |   "date": "2026-05-18T04:47:00",
2026-05-18T04:46:54.213427542Z [inf]  0|backend       |         }
2026-05-18T04:46:54.213432836Z [inf]  0|backend       |   "posts": [
2026-05-18T04:46:54.213439675Z [inf]  0|backend       |     {
2026-05-18T04:46:54.213446550Z [inf]  0|backend       |       "integration": {
2026-05-18T04:46:54.213454880Z [inf]  0|backend       |         "id": "cmp9psz0q0001pe807uxpz08h"
2026-05-18T04:46:54.213461015Z [inf]  0|backend       |       },
2026-05-18T04:46:54.213466780Z [inf]  0|backend       |       "group": "g8QOdzF2HZ",
2026-05-18T04:46:54.213472489Z [inf]  0|backend       |       "settings": {
2026-05-18T04:46:54.213478234Z [inf]  0|backend       |         "url": ""
2026-05-18T04:46:54.213484114Z [inf]  0|backend       |       },
2026-05-18T04:46:54.219363597Z [inf]  0|backend       |       ]
2026-05-18T04:46:54.219372593Z [inf]  0|backend       |     }
2026-05-18T04:46:54.219380292Z [inf]  0|backend       |   ]
2026-05-18T04:46:54.219386669Z [inf]  0|backend       | }