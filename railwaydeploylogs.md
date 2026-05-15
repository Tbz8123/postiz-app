2026-05-15T15:24:07.534996644Z [inf]  Mounting volume on: /var/lib/containers/railwayapp/bind-mounts/8fa4fccf-59d9-4a40-9569-e70c5d61fe0b/vol_v4cq474hjilh1i3t
2026-05-15T15:24:08.541873744Z [inf]  Starting Container
2026-05-15T15:24:10.264339135Z [inf]  Temporal UI:      http://0.0.0.0:8233
2026-05-15T15:24:10.264349741Z [inf]  Temporal Metrics: http://0.0.0.0:9233/metrics
2026-05-15T15:24:10.264460901Z [inf]  Temporal CLI 1.7.0 (Server 1.31.0, UI 2.49.1)
2026-05-15T15:24:10.264467270Z [inf]  
2026-05-15T15:24:10.264472168Z [inf]  Temporal Server:  0.0.0.0:7233
2026-05-15T15:24:29.995146272Z [inf]                       with a built-in Load Balancer.
2026-05-15T15:24:29.995156853Z [inf]    _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
2026-05-15T15:24:29.995168380Z [inf]  
2026-05-15T15:24:29.995169514Z [inf]     _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
2026-05-15T15:24:29.995177272Z [inf]  > gitroom@1.0.0 pm2 /app
2026-05-15T15:24:29.995179025Z [inf]      _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
2026-05-15T15:24:29.995186058Z [inf]  > pnpm run pm2-run
2026-05-15T15:24:29.995188030Z [inf]       _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
2026-05-15T15:24:29.995193451Z [inf]  
2026-05-15T15:24:29.995201167Z [inf]  
2026-05-15T15:24:29.995201663Z [inf]        _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
2026-05-15T15:24:29.995209646Z [inf]  > gitroom@1.0.0 pm2-run /app
2026-05-15T15:24:29.995210925Z [inf]         _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
2026-05-15T15:24:29.995217640Z [inf]  > pm2 delete all || true && pnpm run prisma-db-push && pnpm run --parallel pm2 && pm2 logs
2026-05-15T15:24:29.995220433Z [inf]          _\///______________\///______________\///__\///////////////__
2026-05-15T15:24:29.995225820Z [inf]  
2026-05-15T15:24:29.995229967Z [inf]  
2026-05-15T15:24:29.995233001Z [inf]  
2026-05-15T15:24:29.995241509Z [inf]  
2026-05-15T15:24:29.995243487Z [inf]                          -------------
2026-05-15T15:24:29.995251187Z [inf]                            Runtime Edition
2026-05-15T15:24:29.995252225Z [inf]  
2026-05-15T15:24:29.995261228Z [inf]  
2026-05-15T15:24:29.995261312Z [inf]  __/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
2026-05-15T15:24:29.995270208Z [inf]   _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
2026-05-15T15:24:29.995297410Z [inf]          PM2 is a Production Process Manager for Node.js applications
2026-05-15T15:24:29.996989009Z [inf]  
2026-05-15T15:24:29.996992668Z [inf]  
2026-05-15T15:24:29.997000505Z [inf]                  Start and Daemonize any application:
2026-05-15T15:24:29.997002099Z [inf]                  Make pm2 auto-boot at server restart:
2026-05-15T15:24:29.997008645Z [inf]                  $ pm2 start app.js
2026-05-15T15:24:29.997011583Z [inf]                  $ pm2 startup
2026-05-15T15:24:29.997015784Z [inf]  
2026-05-15T15:24:29.997020941Z [inf]  
2026-05-15T15:24:29.997023705Z [inf]                  Load Balance 4 instances of api.js:
2026-05-15T15:24:29.997029945Z [inf]                  To go further checkout:
2026-05-15T15:24:29.997031742Z [inf]                  $ pm2 start api.js -i 4
2026-05-15T15:24:29.997039379Z [inf]                  http://pm2.io/
2026-05-15T15:24:29.997039517Z [inf]  
2026-05-15T15:24:29.997048481Z [inf]  
2026-05-15T15:24:29.997048545Z [inf]                  Monitor in production:
2026-05-15T15:24:29.997056849Z [inf]                  $ pm2 monitor
2026-05-15T15:24:29.997058069Z [inf]  
2026-05-15T15:24:29.997064982Z [inf]                          -------------
2026-05-15T15:24:29.997070917Z [inf]  
2026-05-15T15:24:29.997076789Z [inf]  [PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
2026-05-15T15:24:29.997083508Z [inf]  [PM2] PM2 Successfully daemonized
2026-05-15T15:24:29.997089687Z [err]  [PM2][WARN] No process found
2026-05-15T15:24:29.997095800Z [inf]  
2026-05-15T15:24:29.997101887Z [inf]  > gitroom@1.0.0 prisma-db-push /app
2026-05-15T15:24:29.997108408Z [inf]  > pnpm dlx prisma@6.5.0 db push --accept-data-loss --schema ./libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-15T15:24:29.997115842Z [inf]  
2026-05-15T15:24:29.997122332Z [inf]  Prisma schema loaded from libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-15T15:24:29.997128721Z [inf]  Datasource "db": PostgreSQL database "railway", schema "public" at "postgres.railway.internal:5432"
2026-05-15T15:24:29.998674987Z [err]  │  https://pris.ly/d/major-version-upgrade                │
2026-05-15T15:24:29.998686341Z [err]  │                                                         │
2026-05-15T15:24:29.998693349Z [err]  │  Run the following to update                            │
2026-05-15T15:24:29.998701145Z [err]  │    npm i --save-dev prisma@latest                       │
2026-05-15T15:24:29.998702662Z [inf]  
2026-05-15T15:24:29.998709882Z [err]  │    npm i @prisma/client@latest                          │
2026-05-15T15:24:29.998711812Z [inf]  The database is already in sync with the Prisma schema.
2026-05-15T15:24:29.998719498Z [err]  └─────────────────────────────────────────────────────────┘
2026-05-15T15:24:29.998720504Z [inf]  
2026-05-15T15:24:29.998728812Z [inf]  Scope: 6 of 7 workspace projects
2026-05-15T15:24:29.998731144Z [inf]  Running generate... (Use --skip-generate to skip the generators)
2026-05-15T15:24:29.998738721Z [inf]  apps/backend pm2$ pm2 start pnpm --name backend -- start
2026-05-15T15:24:29.998740495Z [inf]  [2K[1A[2K[GRunning generate... - Prisma Client
2026-05-15T15:24:29.998747939Z [inf]  [2K[1A[2K[G✔ Generated Prisma Client (v6.5.0) to ./node_modules/@prisma/client in 446ms
2026-05-15T15:24:29.998754542Z [inf]  
2026-05-15T15:24:29.998761589Z [err]  ┌─────────────────────────────────────────────────────────┐
2026-05-15T15:24:29.998769104Z [err]  │  Update available 6.5.0 -> 7.8.0                        │
2026-05-15T15:24:29.998775147Z [err]  │                                                         │
2026-05-15T15:24:29.998781377Z [err]  │  This is a major update - please follow the guide at    │
2026-05-15T15:24:30.000269914Z [inf]  apps/frontend pm2$ pm2 start pnpm --name frontend -- start
2026-05-15T15:24:30.000278242Z [inf]  apps/orchestrator pm2$ pm2 start pnpm --name orchestrator -- start
2026-05-15T15:24:30.000285799Z [inf]  apps/frontend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-15T15:24:30.000291627Z [inf]  apps/orchestrator pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-15T15:24:30.000300994Z [inf]  apps/frontend pm2: [PM2] Done.
2026-05-15T15:24:30.000306865Z [inf]  apps/orchestrator pm2: [PM2] Done.
2026-05-15T15:24:30.000312494Z [inf]  apps/frontend pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-15T15:24:30.000318030Z [inf]  apps/frontend pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-15T15:24:30.000323526Z [inf]  apps/frontend pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-15T15:24:30.000331550Z [inf]  apps/frontend pm2: │ 0  │ frontend        │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 0%       │ 43.4mb   │ root     │ disabled │
2026-05-15T15:24:30.001707844Z [inf]  apps/frontend pm2: │ 1  │ orchestrator    │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 0%       │ 39.6mb   │ root     │ disabled │
2026-05-15T15:24:30.001716430Z [inf]  apps/frontend pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-15T15:24:30.001722547Z [inf]  apps/orchestrator pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-15T15:24:30.001729832Z [inf]  apps/orchestrator pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-15T15:24:30.001737988Z [inf]  apps/orchestrator pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-15T15:24:30.001747751Z [inf]  apps/orchestrator pm2: │ 0  │ frontend        │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 0%       │ 43.6mb   │ root     │ disabled │
2026-05-15T15:24:30.003342591Z [inf]  apps/orchestrator pm2: │ 1  │ orchestrator    │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 0%       │ 39.9mb   │ root     │ disabled │
2026-05-15T15:24:30.003353127Z [inf]  apps/orchestrator pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-15T15:24:30.003362445Z [inf]  apps/backend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-15T15:24:30.003369123Z [inf]  apps/frontend pm2: Done
2026-05-15T15:24:30.003382180Z [inf]  apps/backend pm2: [PM2] Done.
2026-05-15T15:24:30.003388652Z [inf]  apps/orchestrator pm2: Done
2026-05-15T15:24:30.003394780Z [inf]  apps/backend pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-15T15:24:30.003400788Z [inf]  apps/backend pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-15T15:24:30.003408768Z [inf]  apps/backend pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-15T15:24:30.005931831Z [inf]  [TAILING] Tailing last 15 lines for [all] processes (change the value with --lines option)
2026-05-15T15:24:30.005943337Z [inf]  /root/.pm2/pm2.log last 15 lines:
2026-05-15T15:24:30.005952298Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: RPC socket file      : /root/.pm2/rpc.sock
2026-05-15T15:24:30.005959205Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: BUS socket file      : /root/.pm2/pub.sock
2026-05-15T15:24:30.005965880Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: Application log path : /root/.pm2/logs
2026-05-15T15:24:30.005973787Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: Worker Interval      : 30000
2026-05-15T15:24:30.006030898Z [inf]  apps/backend pm2: │ 2  │ backend         │ default     │ N/A     │ fork    │ 235      │ 0s     │ 0    │ online    │ 0%       │ 20.2mb   │ root     │ disabled │
2026-05-15T15:24:30.006038168Z [inf]  apps/backend pm2: │ 0  │ frontend        │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 100%     │ 51.4mb   │ root     │ disabled │
2026-05-15T15:24:30.006045061Z [inf]  apps/backend pm2: │ 1  │ orchestrator    │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 100%     │ 50.4mb   │ root     │ disabled │
2026-05-15T15:24:30.006051722Z [inf]  apps/backend pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-15T15:24:30.006058417Z [inf]  apps/backend pm2: Done
2026-05-15T15:24:30.011391876Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: Process dump file    : /root/.pm2/dump.pm2
2026-05-15T15:24:30.011417572Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: Concurrent actions   : 2
2026-05-15T15:24:30.011426204Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: SIGTERM timeout      : 1600
2026-05-15T15:24:30.011432787Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: Runtime Binary       : /usr/local/bin/node
2026-05-15T15:24:30.011439414Z [inf]  PM2        | 2026-05-15T15:24:23: PM2 log: ===============================================================================
2026-05-15T15:24:30.011446085Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [frontend:0] starting in -fork mode-
2026-05-15T15:24:30.011454952Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [orchestrator:1] starting in -fork mode-
2026-05-15T15:24:30.011460609Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [frontend:0] online
2026-05-15T15:24:30.011466586Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [orchestrator:1] online
2026-05-15T15:24:30.011473265Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [backend:2] starting in -fork mode-
2026-05-15T15:24:30.011480206Z [inf]  PM2        | 2026-05-15T15:24:27: PM2 log: App [backend:2] online
2026-05-15T15:24:30.011488842Z [inf]  
2026-05-15T15:24:30.011494597Z [inf]  /root/.pm2/logs/frontend-out.log last 15 lines:
2026-05-15T15:24:30.011499983Z [inf]  /root/.pm2/logs/frontend-error.log last 15 lines:
2026-05-15T15:24:30.013090683Z [inf]  /root/.pm2/logs/orchestrator-out.log last 15 lines:
2026-05-15T15:24:30.013098387Z [inf]  /root/.pm2/logs/orchestrator-error.log last 15 lines:
2026-05-15T15:24:30.013104977Z [inf]  /root/.pm2/logs/backend-out.log last 15 lines:
2026-05-15T15:24:30.013111334Z [inf]  /root/.pm2/logs/backend-error.log last 15 lines:
2026-05-15T15:24:30.013118151Z [inf]  0|frontend  | > postiz-frontend@1.0.0 start /app/apps/frontend
2026-05-15T15:24:30.013124485Z [inf]  0|frontend  | > dotenv -e ../../.env -- next start -p 4200
2026-05-15T15:24:30.013130473Z [inf]  1|orchestrator  | > postiz-orchestrator@1.0.0 start /app/apps/orchestrator
2026-05-15T15:24:30.013140005Z [inf]  1|orchestrator  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/orchestrator/src/main.js
2026-05-15T15:24:30.013145430Z [inf]  2|backend       | > postiz-backend@1.0.0 start /app/apps/backend
2026-05-15T15:24:30.013150031Z [inf]  2|backend       | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/backend/src/main.js
2026-05-15T15:24:30.013154413Z [inf]  0|frontend      | ▲ Next.js 16.2.1
2026-05-15T15:24:30.013159044Z [inf]  0|frontend      | - Local:         http://localhost:4200
2026-05-15T15:24:30.013163725Z [inf]  0|frontend      | - Network:       http://10.209.43.206:4200
2026-05-15T15:24:30.013169121Z [inf]  0|frontend      | ✓ Ready in 343ms
2026-05-15T15:24:30.324122494Z [inf]  0|frontend      | 🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙
2026-05-15T15:24:30.955241604Z [err]  2026/05/15 15:24:30 [error] 19#19: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:24:30.955251446Z [err]  2026/05/15 15:24:30 [error] 19#19: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:24:36.347642494Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-15T15:24:36.347651095Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mVideoModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.347664611Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mUploadModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.347667384Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-15T15:24:36.347671710Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-15T15:24:36.347677171Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-15T15:24:36.347683650Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThrottlerModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.347685255Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-15T15:24:36.347694522Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mSentryModule dependencies initialized[39m[38;5;3m +24ms[39m
2026-05-15T15:24:36.347703804Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-15T15:24:36.348378095Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-15T15:24:36.348380833Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.348383590Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mChatModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.348391477Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThirdPartyModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.348392563Z [inf]  2|backend       | Email service provider: no provider
2026-05-15T15:24:36.348400095Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-15T15:24:36.348410763Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalRegisterMissingSearchAttributesModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.348420057Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mInfiniteWorkflowRegisterModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.348427136Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-15T15:24:36.348433766Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAgentModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.349231180Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mPublicApiModule dependencies initialized[39m[38;5;3m +4ms[39m
2026-05-15T15:24:36.349242678Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mApiModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.349282678Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.398276136Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mRootController {/}:[39m[38;5;3m +118ms[39m
2026-05-15T15:24:36.399993888Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/, GET} route[39m[38;5;3m +3ms[39m
2026-05-15T15:24:36.400003137Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mStripeController {/stripe}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.400009820Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/stripe, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.400016165Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAuthController {/auth}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.401417722Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/can-register, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.401422905Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.401428916Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/login, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.401433453Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.403121769Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot-return, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.403132636Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth-mobile-callback, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.403140139Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.403146360Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/activate, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.403152499Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/resend-activation, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.403159389Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider/exists, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404762153Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicController {/public}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404770628Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404777818Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404784421Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id/comments, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404790902Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404797182Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/modify-subscription, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.404803093Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/crypto/:path, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404809103Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/stream, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404815157Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMonitorController {/monitor}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.404821500Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/monitor/queue/:name, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406232944Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mEnterpriseController {/enterprise}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406246250Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/create-user, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.406252455Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/url, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406258613Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/delete-channel, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406265312Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNoAuthIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406272911Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406280733Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social-connect/:integration, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406287207Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/public/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.406293608Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/extension-refresh, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408049564Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408059842Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408060905Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408071007Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.408077878Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/token, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408084182Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mUsersController {/user}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408089908Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/agent-media-sso, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408098396Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/self, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408104244Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.408110513Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409755898Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409764022Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409770602Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/api-key/rotate, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409778198Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409785488Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription/tiers, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409791700Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/join-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409798430Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/organizations, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.409805071Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/change-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.409812644Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/logout, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411267170Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411277590Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:identifier/internal-plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411286594Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/customers, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411292549Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/group, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411328745Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411334762Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnalyticsController {/analytics}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411340757Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411346316Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.411352272Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.412982771Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/customer-name, PUT} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.412992874Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.412999680Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/settings, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413007110Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/nickname, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413013673Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413018732Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413023525Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/time, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413027904Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/mentions, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.413032405Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414522049Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/disable, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414529831Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/enable, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414536404Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.414543608Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plug/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414549739Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414556860Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414563230Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plugs/:id/activate, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414570657Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/telegram/updates, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.414577518Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416175947Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/status, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416184378Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSettingsController {/settings}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416202220Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416208462Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416214201Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.416220130Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416227209Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416233578Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPostsController {/posts}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.416239530Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/statistics, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417856066Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417864799Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417872628Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/should-shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417879313Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/comments, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417885869Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.417892715Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417898682Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417904833Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.417912725Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419423275Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419435322Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419442662Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419449711Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419455571Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/old, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.419462276Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group/debug-export, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419468464Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419474304Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419480275Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.419486036Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator/draft, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421264845Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image-with-prompt, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421275956Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-server, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421286473Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/save-media, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421320991Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421328655Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/date, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421334709Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/separate-posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421340911Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMediaController {/media}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421346909Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.421353086Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.421359301Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422857638Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/information, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422863787Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-simple, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422870299Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:endpoint, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.422876826Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422883885Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video-options, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422890056Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422895858Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video/:type/allowed, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422901635Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mBillingController {/billing}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.422907963Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424417330Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check-discount, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.424424982Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/apply-discount, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424430714Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/finish-trial, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424436348Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/is-trial-finished, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424442101Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/embedded, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424447568Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/subscribe, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424453410Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/portal, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424458662Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.424464130Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426611896Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/prorate, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426619875Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/lifetime, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426625309Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/charges, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426630768Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/refund-charges, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426635688Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426640603Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/add-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426645129Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/crypto, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426649765Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNotificationsController {/notifications}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.426654629Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.428403034Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428410209Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mCopilotController {/copilot}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428417574Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/chat, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428426505Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428433314Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/credits, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428439762Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/:thread/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428446730Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428453608Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mWebhookController {/webhooks}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428460713Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.428468039Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429922914Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429931984Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429939399Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/send, POST} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.429945490Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSignatureController {/signatures}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429951670Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429958063Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/default, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429964221Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429970270Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429976384Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.429982364Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAutopostController {/autopost}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431544939Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431552314Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431559143Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, PUT} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.431567568Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431573705Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id/active, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431580198Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431586072Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSetsController {/sets}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431592256Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.431597878Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433102553Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433113577Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433120293Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mThirdPartyController {/third-party}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433127716Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433134149Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party, GET} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.433140666Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433147081Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/submit, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433153410Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/function/:id/:functionName, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.433159554Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/import, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434655805Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434663445Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, PUT} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.434668833Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434673415Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app/rotate-secret, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434679758Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mApprovedAppsController {/user/approved-apps}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434685013Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434736195Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:identifier, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434743045Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAppController {/user/oauth-app}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.434749209Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435857740Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435871097Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAuthorizedController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435878263Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435912073Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnnouncementsController {/announcements}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435920035Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435926319Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435932407Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.435938477Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAdminController {/admin}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.435945367Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437133008Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors/platforms, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437141027Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicIntegrationsController {/public/v1}:[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437148332Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437156904Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload-from-url, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437163252Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437170694Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437177689Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437183722Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.437189550Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/group/:group, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-15T15:24:36.438539853Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/is-connected, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438548925Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438555525Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438564610Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438571139Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438577174Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438583382Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438589650Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-settings/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.438595735Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.439970014Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/status, PUT} route[39m[38;5;3m +7ms[39m
2026-05-15T15:24:36.439977995Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.439985058Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.439990947Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/post/:postId, GET} route[39m[38;5;3m +2ms[39m
2026-05-15T15:24:36.440003099Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:36 PM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-trigger/:id, POST} route[39m[38;5;3m +0ms[39m
2026-05-15T15:24:36.710861091Z [err]  2026/05/15 15:24:36 [error] 20#20: *6 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:24:36.710870916Z [err]  2026/05/15 15:24:36 [error] 20#20: *6 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:24:37.349510187Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:37 PM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +667ms[39m
2026-05-15T15:24:37.349514935Z [inf]  2|backend       | Backend started successfully on port 3000
2026-05-15T15:24:37.349519364Z [inf]  2|backend       | [33m[Nest] 303  - [39m05/15/2026, 3:24:37 PM [33m   WARN[39m [38;5;3m[Configuration issue] [39m[33mMAIN_URL is not a valid URL[39m
2026-05-15T15:24:37.349523880Z [inf]  2|backend       | [33m[Nest] 303  - [39m05/15/2026, 3:24:37 PM [33m   WARN[39m [38;5;3m[Configuration issue] [39m[33mFRONTEND_URL is not a valid URL[39m
2026-05-15T15:24:37.349528510Z [inf]  2|backend       | [33m[Nest] 303  - [39m05/15/2026, 3:24:37 PM [33m   WARN[39m [33mConfiguration issues found: 2[39m
2026-05-15T15:24:37.349533215Z [inf]  2|backend       | [32m[Nest] 303  - [39m05/15/2026, 3:24:37 PM [32m    LOG[39m [32m🚀 Backend is running on: http://localhost:3000[39m
2026-05-15T15:24:40.863274563Z [err]  2026/05/15 15:24:40 [error] 20#20: *6 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:24:41.924042781Z [err]  2026/05/15 15:24:41 [error] 20#20: *6 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-15T15:26:01.933634661Z [inf]  2|backend       |       at async OpenAIResponsesLanguageModel.doStream (/app/node_modules/@ai-sdk/openai/dist/index.js:3729:50)
2026-05-15T15:26:01.933644220Z [inf]  2|backend       |       at async AISDKV5LanguageModel.doStream (/app/node_modules/@mastra/core/dist/chunk-TDTG2WDG.cjs:1070:12)
2026-05-15T15:26:01.933654025Z [inf]  2|backend       |       at async Module.pRetry (file:///app/node_modules/@mastra/core/node_modules/p-retry/index.js:197:19)
2026-05-15T15:26:01.933672106Z [inf]  2|backend       | error Error: AI_APICallError: Invalid Responses API request
2026-05-15T15:26:01.933684806Z [inf]  2|backend       |     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2026-05-15T15:26:01.933690815Z [inf]  2|backend       |     at async /app/node_modules/@ag-ui/mastra/dist/mastra-Ca_loQjN.js:2:2333
2026-05-15T15:26:01.933697254Z [inf]  2|backend       | Upstream LLM API error {
2026-05-15T15:26:01.933708757Z [inf]  2|backend       |       at /app/node_modules/@ai-sdk/openai/node_modules/@ai-sdk/provider-utils/dist/index.js:1108:14
2026-05-15T15:26:01.933714186Z [inf]  2|backend       |       at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2026-05-15T15:26:01.933719736Z [inf]  2|backend       |       at async postToApi (/app/node_modules/@ai-sdk/openai/node_modules/@ai-sdk/provider-utils/dist/index.js:953:28)
2026-05-15T15:26:01.935614898Z [inf]  2|backend       |       instructions: undefined,
2026-05-15T15:26:01.935630458Z [inf]  2|backend       |       metadata: undefined,
2026-05-15T15:26:01.935641204Z [inf]  2|backend       |       at async Object.start (/app/node_modules/@mastra/core/dist/chunk-TLEMLJH7.cjs:2132:27) {
2026-05-15T15:26:01.935653127Z [inf]  2|backend       |       previous_response_id: undefined,
2026-05-15T15:26:01.935655938Z [inf]  2|backend       |     cause: undefined,
2026-05-15T15:26:01.935664027Z [inf]  2|backend       |     url: 'https://openrouter.ai/api/v1/responses',
2026-05-15T15:26:01.935672183Z [inf]  2|backend       |     requestBodyValues: {
2026-05-15T15:26:01.935679482Z [inf]  2|backend       |       model: 'openai/gpt-4o-mini',
2026-05-15T15:26:01.935685224Z [inf]  2|backend       |       input: [Array],
2026-05-15T15:26:01.935700731Z [inf]  2|backend       |       top_p: undefined,
2026-05-15T15:26:01.935706457Z [inf]  2|backend       |       max_output_tokens: undefined,
2026-05-15T15:26:01.935712054Z [inf]  2|backend       |       conversation: undefined,
2026-05-15T15:26:01.935717495Z [inf]  2|backend       |       max_tool_calls: undefined,
2026-05-15T15:26:01.937890240Z [inf]  2|backend       |       service_tier: undefined,
2026-05-15T15:26:01.937895431Z [inf]  2|backend       |       include: undefined,
2026-05-15T15:26:01.937900662Z [inf]  2|backend       |       prompt_cache_key: undefined,
2026-05-15T15:26:01.937905820Z [inf]  2|backend       |       prompt_cache_retention: undefined,
2026-05-15T15:26:01.937910503Z [inf]  2|backend       |       safety_identifier: undefined,
2026-05-15T15:26:01.937920731Z [inf]  2|backend       |       truncation: undefined,
2026-05-15T15:26:01.937926271Z [inf]  2|backend       |       tools: [Array],
2026-05-15T15:26:01.937937335Z [inf]  2|backend       |       stream: true
2026-05-15T15:26:01.937942512Z [inf]  2|backend       |     },
2026-05-15T15:26:01.937949006Z [inf]  2|backend       |     statusCode: 400,
2026-05-15T15:26:01.937961107Z [inf]  2|backend       |       'access-control-allow-origin': '*',
2026-05-15T15:26:01.937973692Z [inf]  2|backend       |       'cf-ray': '9fc3287f7842ff96-SIN',
2026-05-15T15:26:01.937986770Z [inf]  2|backend       |       'content-type': 'application/json',
2026-05-15T15:26:01.940101289Z [inf]  2|backend       |       'x-content-type-options': 'nosniff'
2026-05-15T15:26:01.940112968Z [inf]  2|backend       |     },
2026-05-15T15:26:01.940130689Z [inf]  2|backend       |       date: 'Fri, 15 May 2026 15:25:57 GMT',
2026-05-15T15:26:01.940139591Z [inf]  2|backend       |       'permissions-policy': 'payment=(self "https://checkout.stripe.com" "https://connect-js.stripe.com" "https://js.stripe.com" "https://*.js.stripe.com" "https://hooks.stripe.com")',
2026-05-15T15:26:01.940163149Z [inf]  2|backend       |       'transfer-encoding': 'chunked',
2026-05-15T15:26:01.941476235Z [inf]  2|backend       |     responseBody: '{"error":{"code":"invalid_prompt","message":"Invalid Responses API request"},"metadata":{"raw":"[\\n  {\\n    \\"code\\": \\"invalid_union\\",\\n    \\"errors\\": [\\n      [\\n        {\\n          \\"expected\\": \\"string\\",\\n          \\"code\\": \\"invalid_type\\",\\n          \\"path\\": [],\\n          \\"message\\": \\"Invalid input: expected string, received array\\"\\n        }\\n      ],\\n      [\\n        {\\n          \\"code\\": \\"invalid_union\\",\\n          \\"errors\\": [\\n            [\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"reasoning\\"\\n                ],\\n                \\"path\\": [\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"reasoning\\\\\\"\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"reasoning_text\\"\\n                ],\\n                \\"path\\": [\\n                  \\"content\\",\\n                  0,\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"reasoning_text\\\\\\"\\"\\n              },\\n              {\\n                \\"expected\\": \\"array\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"summary\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected array, received undefined\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_union\\",\\n                \\"errors\\": [\\n                  [\\n                    {\\n                      \\"code\\": \\"invalid_union\\",\\n                      \\"errors\\": [],\\n                      \\"note\\": \\"No matching discriminator\\",\\n                      \\"discriminator\\": \\"type\\",\\n                      \\"path\\": [\\n                        0,\\n                        \\"type\\"\\n                      ],\\n                      \\"message\\": \\"Invalid input\\"\\n                    }\\n                  ],\\n                  [\\n                    {\\n                      \\"expected\\": \\"string\\",\\n                      \\"code\\": \\"invalid_type\\",\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected string, received array\\"\\n                    }\\n                  ]\\n                ],\\n                \\"path\\": [\\n                  \\"content\\"\\n                ],\\n                \\"message\\": \\"Invalid input\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_union\\",\\n                \\"errors\\": [\\n                  [\\n                    {\\n                      \\"code\\": \\"invalid_value\\",\\n                      \\"values\\": [\\n                        \\"user\\"\\n                      ],\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected \\\\\\"user\\\\\\"\\"\\n                    }\\n                  ],\\n                  [\\n                    {\\n                      \\"code\\": \\"invalid_value\\",\\n                      \\"values\\": [\\n                        \\"system\\"\\n                      ],\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected \\\\\\"system\\\\\\"\\"\\n                    }\\n                  ],\\n                  [\\n                    {\\n                      \\"code\\": \\"invalid_value\\",\\n                      \\"values\\": [\\n                        \\"developer\\"\\n                      ],\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected \\\\\\"developer\\\\\\"\\"\\n                    }\\n                  ]\\n                ],\\n                \\"path\\": [\\n                  \\"role\\"\\n                ],\\n                \\"message\\": \\"Invalid input\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_union\\",\\n                \\"errors\\": [],\\n                \\"note\\": \\"No matching discriminator\\",\\n                \\"discriminator\\": \\"type\\",\\n                \\"path\\": [\\n                  \\"content\\",\\n                  0,\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"function_call\\"\\n                ],\\n                \\"path\\": [\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"function_call\\\\\\"\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"call_id\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"name\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"arguments\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"id\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"function_call_output\\"\\n                ],\\n                \\"path\\": [\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"function_call_output\\\\\\"\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"call_id\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_union\\",\\n                \\"errors\\": [\\n                  [\\n                    {\\n                      \\"expected\\": \\"string\\",\\n                      \\"code\\": \\"invalid_type\\",\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n                    }\\n                  ],\\n                  [\\n                    {\\n                      \\"expected\\": \\"array\\",\\n                      \\"code\\": \\"invalid_type\\",\\n                      \\"path\\": [],\\n                      \\"message\\": \\"Invalid input: expected array, received undefined\\"\\n                    }\\n                  ]\\n                ],\\n                \\"path\\": [\\n                  \\"output\\"\\n                ],\\n                \\"message\\": \\"Invalid input\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"apply_patch_call\\"\\n                ],\\n                \\"path\\": [\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"apply_patch_call\\\\\\"\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"call_id\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"in_progress\\",\\n                  \\"completed\\"\\n                ],\\n                \\"path\\": [\\n                  \\"status\\"\\n                ],\\n                \\"message\\": \\"Invalid option: expected one of \\\\\\"in_progress\\\\\\"|\\\\\\"completed\\\\\\"\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_type\\",\\n                \\"expected\\": \\"object\\",\\n                \\"path\\": [\\n                  \\"operation\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected object, received undefined\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"apply_patch_call_output\\"\\n                ],\\n                \\"path\\": [\\n                  \\"type\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected \\\\\\"apply_patch_call_output\\\\\\"\\"\\n              },\\n              {\\n                \\"expected\\": \\"string\\",\\n                \\"code\\": \\"invalid_type\\",\\n                \\"path\\": [\\n                  \\"call_id\\"\\n                ],\\n                \\"message\\": \\"Invalid input: expected string, received undefined\\"\\n              },\\n              {\\n                \\"code\\": \\"invalid_value\\",\\n                \\"values\\": [\\n                  \\"completed\\",\\n                  \\"failed\\"\\n                ],\\n                \\"path\\": [\\n                  \\"status\\"\\n                ],\\n                \\"message\\": \\"Invalid option: expected one of \\\\\\"completed\\\\\\"|\\\\\\"failed\\\\\\"\\"\\n              }\\n            ],\\n            [\\n              {\\n                \\"code\\": \\"invalid_union\\",\\n                \\"errors\\": [\\n                  [\\n                    {\\n                      \\"code\\": \\"invalid_value\\",\\n                      \\"values\\": [\\n                        \\"message\\"\\n      '... 42132 more characters,
2026-05-15T15:26:01.943450937Z [inf]  2|backend       |     isRetryable: false,
2026-05-15T15:26:01.943458016Z [inf]  2|backend       |     data: { error: [Object] },
2026-05-15T15:26:01.943463865Z [inf]  2|backend       |     [Symbol(vercel.ai.error)]: true,
2026-05-15T15:26:01.943471463Z [inf]  2|backend       |     [Symbol(vercel.ai.error.AI_APICallError)]: true
2026-05-15T15:26:01.943483801Z [inf]  2|backend       |   runId: 'a6f5cdf7-2561-4cc4-82c8-87885f61c8ee',
2026-05-15T15:26:01.943490074Z [inf]  2|backend       |   provider: 'openai.responses',
2026-05-15T15:26:01.943497014Z [inf]  2|backend       |   modelId: 'openai/gpt-4o-mini'
2026-05-15T15:26:01.943503548Z [inf]  2|backend       | }
2026-05-15T15:26:31.945539978Z [inf]  2|backend       |     at r.streamMastraAgent (/app/node_modules/@ag-ui/mastra/dist/mastra-Ca_loQjN.js:2:4601)
2026-05-15T15:26:31.945547467Z [inf]  2|backend       |     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2026-05-15T15:26:31.945554391Z [inf]  2|backend       |     at async /app/node_modules/@ag-ui/mastra/dist/mastra-Ca_loQjN.js:2:2333
2026-05-15T15:26:31.945561171Z [inf]  2|backend       | Upstream LLM API error {
2026-05-15T15:26:31.945570417Z [inf]  2|backend       |   error: APICallError [AI_APICallError]: Invalid Responses API request
2026-05-15T15:26:31.945576909Z [inf]  2|backend       |       at /app/node_modules/@ai-sdk/openai/node_modules/@ai-sdk/provider-utils/dist/index.js:1108:14
2026-05-15T15:26:31.945603297Z [inf]  2|backend       |       at async AISDKV5LanguageModel.doStream (/app/node_modules/@mastra/core/dist/chunk-TDTG2WDG.cjs:1070:12)
2026-05-15T15:26:31.945610179Z [inf]  2|backend       |       at async pRetry.default.retries (/app/node_modules/@mastra/core/dist/chunk-TLEMLJH7.cjs:12257:34)
2026-05-15T15:26:31.945616808Z [inf]  2|backend       |       at async Module.pRetry (file:///app/node_modules/@mastra/core/node_modules/p-retry/index.js:197:19)
2026-05-15T15:26:31.946920493Z [inf]  2|backend       |       at async Object.start (/app/node_modules/@mastra/core/dist/chunk-TLEMLJH7.cjs:2132:27) {
2026-05-15T15:26:31.946930191Z [inf]  2|backend       |     url: 'https://openrouter.ai/api/v1/responses',
2026-05-15T15:26:31.946935850Z [inf]  2|backend       |     requestBodyValues: {
2026-05-15T15:26:31.946945697Z [inf]  2|backend       |       metadata: undefined,
2026-05-15T15:26:31.946952555Z [inf]  2|backend       |       parallel_tool_calls: undefined,
2026-05-15T15:26:31.946961888Z [inf]  2|backend       |       top_p: undefined,
2026-05-15T15:26:31.946968730Z [inf]  2|backend       |       store: undefined,
2026-05-15T15:26:31.946974785Z [inf]  2|backend       |       user: undefined,
2026-05-15T15:26:31.948713091Z [inf]  2|backend       |       include: undefined,
2026-05-15T15:26:31.948734728Z [inf]  2|backend       |       top_logprobs: undefined,
2026-05-15T15:26:31.948744848Z [inf]  2|backend       |       tools: [Array],
2026-05-15T15:26:31.948759067Z [inf]  2|backend       |     },
2026-05-15T15:26:31.948787251Z [inf]  2|backend       |       connection: 'keep-alive',
2026-05-15T15:26:31.948793368Z [inf]  2|backend       |       'content-type': 'application/json',
2026-05-15T15:26:31.950620808Z [inf]  2|backend       |       'permissions-policy': 'payment=(self "https://checkout.stripe.com" "https://connect-js.stripe.com" "https://js.stripe.com" "https://*.js.stripe.com" "https://hooks.stripe.com")',
2026-05-15T15:26:31.950655411Z [inf]  2|backend       |       server: 'cloudflare',
2026-05-15T15:26:31.950667171Z [inf]  2|backend       |       'transfer-encoding': 'chunked',
2026-05-15T15:26:31.950676518Z [inf]  2|backend       |       'x-content-type-options': 'nosniff'
2026-05-15T15:26:31.953237856Z [inf]  2|backend       |     isRetryable: false,
2026-05-15T15:26:31.953254428Z [inf]  2|backend       |     [Symbol(vercel.ai.error)]: true,
2026-05-15T15:26:31.953266558Z [inf]  2|backend       |   },
2026-05-15T15:26:31.953280591Z [inf]  2|backend       |   provider: 'openai.responses',
2026-05-15T15:26:31.953292159Z [inf]  2|backend       | }