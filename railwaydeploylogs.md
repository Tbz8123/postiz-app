2026-05-16T09:22:34.356623571Z [inf]  Mounting volume on: /var/lib/containers/railwayapp/bind-mounts/bb97afc2-fa42-40fe-b15b-627f470e2099/vol_v4cq474hjilh1i3t
2026-05-16T09:22:35.354439026Z [inf]  Starting Container
2026-05-16T09:22:37.840611070Z [inf]  Temporal Metrics: http://0.0.0.0:9233/metrics
2026-05-16T09:22:37.840628675Z [inf]  Temporal CLI 1.7.0 (Server 1.31.0, UI 2.49.1)
2026-05-16T09:22:37.840641525Z [inf]  
2026-05-16T09:22:37.840650281Z [inf]  Temporal Server:  0.0.0.0:7233
2026-05-16T09:22:37.840658180Z [inf]  Temporal UI:      http://0.0.0.0:8233
2026-05-16T09:22:57.563133564Z [inf]       _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
2026-05-16T09:22:57.563144640Z [inf]        _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
2026-05-16T09:22:57.563151600Z [inf]         _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
2026-05-16T09:22:57.563160720Z [inf]          _\///______________\///______________\///__\///////////////__
2026-05-16T09:22:57.563166909Z [inf]  
2026-05-16T09:22:57.563171988Z [inf]  > gitroom@1.0.0 pm2 /app
2026-05-16T09:22:57.563176428Z [inf]  > pnpm run pm2-run
2026-05-16T09:22:57.563181203Z [inf]  
2026-05-16T09:22:57.563182512Z [inf]  
2026-05-16T09:22:57.563187152Z [inf]  
2026-05-16T09:22:57.563191988Z [inf]  > gitroom@1.0.0 pm2-run /app
2026-05-16T09:22:57.563198203Z [inf]  > pm2 delete all || true && pnpm run prisma-db-push && pnpm run --parallel pm2 && pm2 logs
2026-05-16T09:22:57.563200107Z [inf]  
2026-05-16T09:22:57.563203419Z [inf]  
2026-05-16T09:22:57.563209467Z [inf]                            Runtime Edition
2026-05-16T09:22:57.563210295Z [inf]  
2026-05-16T09:22:57.563217078Z [inf]                          -------------
2026-05-16T09:22:57.563219035Z [inf]  
2026-05-16T09:22:57.563227049Z [inf]  
2026-05-16T09:22:57.563228088Z [inf]          PM2 is a Production Process Manager for Node.js applications
2026-05-16T09:22:57.563236388Z [inf]  __/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
2026-05-16T09:22:57.563238183Z [inf]                       with a built-in Load Balancer.
2026-05-16T09:22:57.563242964Z [inf]   _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
2026-05-16T09:22:57.563247284Z [inf]    _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
2026-05-16T09:22:57.563251620Z [inf]     _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
2026-05-16T09:22:57.563256272Z [inf]      _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
2026-05-16T09:22:57.565256628Z [inf]                          -------------
2026-05-16T09:22:57.565260880Z [inf]  
2026-05-16T09:22:57.565269778Z [inf]                  Start and Daemonize any application:
2026-05-16T09:22:57.565270022Z [inf]  
2026-05-16T09:22:57.565278897Z [inf]                  $ pm2 start app.js
2026-05-16T09:22:57.565279865Z [inf]  [PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
2026-05-16T09:22:57.565287254Z [inf]  
2026-05-16T09:22:57.565288592Z [inf]  [PM2] PM2 Successfully daemonized
2026-05-16T09:22:57.565295549Z [inf]                  Load Balance 4 instances of api.js:
2026-05-16T09:22:57.565296235Z [err]  [PM2][WARN] No process found
2026-05-16T09:22:57.565304343Z [inf]                  $ pm2 start api.js -i 4
2026-05-16T09:22:57.565305336Z [inf]  
2026-05-16T09:22:57.565313185Z [inf]  
2026-05-16T09:22:57.565314566Z [inf]  > gitroom@1.0.0 prisma-db-push /app
2026-05-16T09:22:57.565321761Z [inf]                  Monitor in production:
2026-05-16T09:22:57.565323455Z [inf]  > pnpm dlx prisma@6.5.0 db push --accept-data-loss --schema ./libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-16T09:22:57.565330440Z [inf]  
2026-05-16T09:22:57.565338815Z [inf]                  $ pm2 monitor
2026-05-16T09:22:57.565338845Z [inf]  Prisma schema loaded from libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-16T09:22:57.565345585Z [inf]  
2026-05-16T09:22:57.565351837Z [inf]                  Make pm2 auto-boot at server restart:
2026-05-16T09:22:57.565354039Z [inf]  Datasource "db": PostgreSQL database "railway", schema "public" at "postgres.railway.internal:5432"
2026-05-16T09:22:57.565357407Z [inf]                  $ pm2 startup
2026-05-16T09:22:57.565361707Z [inf]  
2026-05-16T09:22:57.565366047Z [inf]                  To go further checkout:
2026-05-16T09:22:57.565372679Z [inf]                  http://pm2.io/
2026-05-16T09:22:57.565377442Z [inf]  
2026-05-16T09:22:57.565382136Z [inf]  
2026-05-16T09:22:57.566919463Z [err]  │  https://pris.ly/d/major-version-upgrade                │
2026-05-16T09:22:57.566931199Z [err]  │                                                         │
2026-05-16T09:22:57.566938618Z [err]  │  Run the following to update                            │
2026-05-16T09:22:57.566945517Z [inf]  
2026-05-16T09:22:57.566947612Z [err]  │    npm i --save-dev prisma@latest                       │
2026-05-16T09:22:57.566955448Z [err]  │    npm i @prisma/client@latest                          │
2026-05-16T09:22:57.566958420Z [inf]  🚀  Your database is now in sync with your Prisma schema. Done in 369ms
2026-05-16T09:22:57.566966801Z [inf]  
2026-05-16T09:22:57.566967395Z [err]  └─────────────────────────────────────────────────────────┘
2026-05-16T09:22:57.566975214Z [inf]  Running generate... (Use --skip-generate to skip the generators)
2026-05-16T09:22:57.566981661Z [inf]  Scope: 6 of 7 workspace projects
2026-05-16T09:22:57.566983880Z [inf]  [2K[1A[2K[GRunning generate... - Prisma Client
2026-05-16T09:22:57.566991291Z [inf]  apps/frontend pm2$ pm2 start pnpm --name frontend -- start
2026-05-16T09:22:57.566993800Z [inf]  [2K[1A[2K[G✔ Generated Prisma Client (v6.5.0) to ./node_modules/@prisma/client in 503ms
2026-05-16T09:22:57.567000345Z [inf]  
2026-05-16T09:22:57.567007083Z [err]  ┌─────────────────────────────────────────────────────────┐
2026-05-16T09:22:57.567013240Z [err]  │  Update available 6.5.0 -> 7.8.0                        │
2026-05-16T09:22:57.567018999Z [err]  │                                                         │
2026-05-16T09:22:57.567024885Z [err]  │  This is a major update - please follow the guide at    │
2026-05-16T09:22:57.568531388Z [inf]  apps/backend pm2$ pm2 start pnpm --name backend -- start
2026-05-16T09:22:57.568538189Z [inf]  apps/orchestrator pm2$ pm2 start pnpm --name orchestrator -- start
2026-05-16T09:22:57.568545597Z [inf]  apps/frontend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-16T09:22:57.568555575Z [inf]  apps/backend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-16T09:22:57.568563367Z [inf]  apps/frontend pm2: [PM2] Done.
2026-05-16T09:22:57.568570640Z [inf]  apps/backend pm2: [PM2] Done.
2026-05-16T09:22:57.568577219Z [inf]  apps/frontend pm2: ┌────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-16T09:22:57.568586744Z [inf]  apps/frontend pm2: │ id │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-16T09:22:57.568592872Z [inf]  apps/frontend pm2: ├────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-16T09:22:57.568598998Z [inf]  apps/frontend pm2: │ 1  │ backend     │ default     │ N/A     │ fork    │ 219      │ 0s     │ 0    │ online    │ 0%       │ 33.0mb   │ root     │ disabled │
2026-05-16T09:22:57.568604854Z [inf]  apps/frontend pm2: │ 0  │ frontend    │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 0%       │ 43.9mb   │ root     │ disabled │
2026-05-16T09:22:57.569784883Z [inf]  apps/frontend pm2: └────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-16T09:22:57.569792705Z [inf]  apps/backend pm2: ┌────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-16T09:22:57.569799345Z [inf]  apps/backend pm2: │ id │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-16T09:22:57.569806145Z [inf]  apps/backend pm2: ├────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-16T09:22:57.569812820Z [inf]  apps/backend pm2: │ 1  │ backend     │ default     │ N/A     │ fork    │ 219      │ 0s     │ 0    │ online    │ 0%       │ 33.5mb   │ root     │ disabled │
2026-05-16T09:22:57.569820723Z [inf]  apps/backend pm2: │ 0  │ frontend    │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 0%       │ 43.9mb   │ root     │ disabled │
2026-05-16T09:22:57.571430853Z [inf]  apps/backend pm2: └────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-16T09:22:57.571441622Z [inf]  apps/orchestrator pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-16T09:22:57.571448521Z [inf]  apps/orchestrator pm2: [PM2] Done.
2026-05-16T09:22:57.571454894Z [inf]  apps/frontend pm2: Done
2026-05-16T09:22:57.571461137Z [inf]  apps/backend pm2: Done
2026-05-16T09:22:57.571467449Z [inf]  apps/orchestrator pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-16T09:22:57.571473640Z [inf]  apps/orchestrator pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-16T09:22:57.571482820Z [inf]  apps/orchestrator pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-16T09:22:57.571489303Z [inf]  apps/orchestrator pm2: │ 1  │ backend         │ default     │ N/A     │ fork    │ 219      │ 0s     │ 0    │ online    │ 100%     │ 43.8mb   │ root     │ disabled │
2026-05-16T09:22:57.573543975Z [inf]  apps/orchestrator pm2: │ 0  │ frontend        │ default     │ N/A     │ fork    │ 209      │ 0s     │ 0    │ online    │ 100%     │ 51.2mb   │ root     │ disabled │
2026-05-16T09:22:57.573550509Z [inf]  apps/orchestrator pm2: │ 2  │ orchestrator    │ default     │ N/A     │ fork    │ 235      │ 0s     │ 0    │ online    │ 0%       │ 16.5mb   │ root     │ disabled │
2026-05-16T09:22:57.573556875Z [inf]  apps/orchestrator pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-16T09:22:57.573563385Z [inf]  apps/orchestrator pm2: Done
2026-05-16T09:22:57.573569277Z [inf]  [TAILING] Tailing last 15 lines for [all] processes (change the value with --lines option)
2026-05-16T09:22:57.573579087Z [inf]  /root/.pm2/pm2.log last 15 lines:
2026-05-16T09:22:57.573584661Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: RPC socket file      : /root/.pm2/rpc.sock
2026-05-16T09:22:57.573590039Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: BUS socket file      : /root/.pm2/pub.sock
2026-05-16T09:22:57.573596899Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: Application log path : /root/.pm2/logs
2026-05-16T09:22:57.573603181Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: Worker Interval      : 30000
2026-05-16T09:22:57.573610664Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: Process dump file    : /root/.pm2/dump.pm2
2026-05-16T09:22:57.575096177Z [inf]  /root/.pm2/logs/backend-error.log last 15 lines:
2026-05-16T09:22:57.575107097Z [inf]  /root/.pm2/logs/orchestrator-out.log last 15 lines:
2026-05-16T09:22:57.575121840Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: Concurrent actions   : 2
2026-05-16T09:22:57.575129840Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: SIGTERM timeout      : 1600
2026-05-16T09:22:57.575136388Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: Runtime Binary       : /usr/local/bin/node
2026-05-16T09:22:57.575142840Z [inf]  PM2        | 2026-05-16T09:22:50: PM2 log: ===============================================================================
2026-05-16T09:22:57.575149530Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [frontend:0] starting in -fork mode-
2026-05-16T09:22:57.575155551Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [backend:1] starting in -fork mode-
2026-05-16T09:22:57.575161517Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [frontend:0] online
2026-05-16T09:22:57.575167368Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [backend:1] online
2026-05-16T09:22:57.575173882Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [orchestrator:2] starting in -fork mode-
2026-05-16T09:22:57.575181107Z [inf]  PM2        | 2026-05-16T09:22:54: PM2 log: App [orchestrator:2] online
2026-05-16T09:22:57.575187871Z [inf]  
2026-05-16T09:22:57.575193837Z [inf]  /root/.pm2/logs/frontend-out.log last 15 lines:
2026-05-16T09:22:57.575201356Z [inf]  /root/.pm2/logs/frontend-error.log last 15 lines:
2026-05-16T09:22:57.575207440Z [inf]  /root/.pm2/logs/backend-out.log last 15 lines:
2026-05-16T09:22:57.576569605Z [inf]  /root/.pm2/logs/orchestrator-error.log last 15 lines:
2026-05-16T09:22:57.576580264Z [inf]  2|orchestrator  | > postiz-orchestrator@1.0.0 start /app/apps/orchestrator
2026-05-16T09:22:57.576588515Z [inf]  2|orchestrator  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/orchestrator/src/main.js
2026-05-16T09:22:57.576595086Z [inf]  1|backend       | > postiz-backend@1.0.0 start /app/apps/backend
2026-05-16T09:22:57.576601358Z [inf]  1|backend       | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/backend/src/main.js
2026-05-16T09:22:57.576607696Z [inf]  0|frontend      | > postiz-frontend@1.0.0 start /app/apps/frontend
2026-05-16T09:22:57.576613878Z [inf]  0|frontend      | > dotenv -e ../../.env -- next start -p 4200
2026-05-16T09:22:57.576620089Z [inf]  0|frontend      | ▲ Next.js 16.2.1
2026-05-16T09:22:57.576626566Z [inf]  0|frontend      | - Local:         http://localhost:4200
2026-05-16T09:22:57.576632564Z [inf]  0|frontend      | - Network:       http://10.199.126.227:4200
2026-05-16T09:22:57.576638965Z [inf]  0|frontend      | ✓ Ready in 147ms
2026-05-16T09:22:58.880506741Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-16T09:22:58.880513142Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-16T09:22:58.880519400Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-16T09:22:58.880525560Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-16T09:22:58.880532737Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-16T09:22:58.880539647Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +5ms[39m
2026-05-16T09:22:58.880545279Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-16T09:22:58.880551775Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-16T09:22:58.880558317Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-16T09:22:58.880564808Z [inf]  2|orchestrator  | Email service provider: no provider
2026-05-16T09:22:58.882948009Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-16T09:22:58.882954330Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-16T09:22:58.882961061Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mHealthController {/health}:[39m[38;5;3m +9ms[39m
2026-05-16T09:22:58.882967242Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:22:58 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/health/status, GET} route[39m[38;5;3m +2ms[39m
2026-05-16T09:23:00.253673465Z [inf]  2|orchestrator  | 2026-05-16T09:23:00.246Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:00.253679593Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:00.253685541Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:00.253694280Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:00.253700809Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:00.253707466Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:00.253714785Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:00.253721006Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:00.253727011Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:00.253733104Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:00.253740561Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:00.253746411Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:00.253752469Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:00.253758680Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 1053 ms { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-16T09:23:00.259834218Z [inf]  2|orchestrator  | 2026-05-16T09:23:00.258Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'main', size: '3.01MB' }
2026-05-16T09:23:01.233422818Z [inf]  2|orchestrator  | 2026-05-16T09:23:01.228Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:01.233429398Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:01.233449842Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:01.233456629Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:01.233463462Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:01.233471993Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:01.233473358Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:01.233479587Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:01.233487693Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:01.233489636Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:01.233494794Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:01.233499071Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:01.233505593Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:01.233512696Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 636 ms { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-16T09:23:01.248318249Z [inf]  2|orchestrator  | 2026-05-16T09:23:01.240Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'x', size: '3.01MB' }
2026-05-16T09:23:02.103618628Z [inf]  2|orchestrator  | 2026-05-16T09:23:02.101Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:02.103627927Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:02.103633933Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:02.103640106Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:02.103640109Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:02.103646672Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:02.103651934Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:02.103652411Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:02.103659659Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:02.103662690Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:02.103668767Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:02.103672020Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:02.103676854Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:02.103683280Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 532 ms { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-16T09:23:02.113817720Z [inf]  2|orchestrator  | 2026-05-16T09:23:02.111Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'linkedin', size: '3.01MB' }
2026-05-16T09:23:02.987778646Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:02.987782862Z [inf]  2|orchestrator  | 2026-05-16T09:23:02.982Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:02.987791501Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:02.987794089Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:02.987801259Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:02.987803069Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:02.987810936Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:02.987811915Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:02.987818481Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:02.987820809Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:02.987826443Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:02.987829476Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 585 ms { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-16T09:23:02.987834096Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:02.987840070Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:02.996543470Z [inf]  2|orchestrator  | 2026-05-16T09:23:02.993Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'reddit', size: '3.01MB' }
2026-05-16T09:23:03.898210169Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:03.898221514Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:03.898221756Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:03.898226684Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:03.898230939Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:03.898236044Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:03.898237338Z [inf]  2|orchestrator  | 2026-05-16T09:23:03.827Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:03.898237609Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:03.898244570Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:03.898246790Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 506 ms { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-16T09:23:03.898247865Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:03.898255029Z [inf]  2|orchestrator  | 2026-05-16T09:23:03.839Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'instagram', size: '3.01MB' }
2026-05-16T09:23:03.898258831Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:03.898259361Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:03.898267109Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:04.892633239Z [inf]  2|orchestrator  | 2026-05-16T09:23:04.617Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'facebook', size: '3.01MB' }
2026-05-16T09:23:04.892684998Z [inf]  2|orchestrator  | 2026-05-16T09:23:04.606Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:04.892691822Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:04.892699709Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:04.892707019Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:04.892709782Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:04.892715918Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:04.892724421Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:04.892725230Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:04.892733332Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:04.892735927Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:04.892742584Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:04.892745598Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:04.892752133Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:04.892759281Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 465 ms { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-16T09:23:05.393031504Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 495 ms { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-16T09:23:05.393041243Z [inf]  2|orchestrator  | 2026-05-16T09:23:05.386Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:05.393048113Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:05.393052473Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:05.393055220Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:05.393063391Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:05.393067580Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:05.393074368Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:05.393078845Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:05.393084697Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:05.393088470Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:05.393093729Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:05.393097388Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:05.393106187Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:05.400454015Z [inf]  2|orchestrator  | 2026-05-16T09:23:05.397Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'threads', size: '3.01MB' }
2026-05-16T09:23:06.093691315Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 440 ms { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-16T09:23:06.093721366Z [inf]  2|orchestrator  | 2026-05-16T09:23:06.088Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:06.093728746Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:06.093735139Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:06.093742170Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:06.093748755Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:06.093755278Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:06.093763813Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:06.093768912Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:06.093774758Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:06.093779858Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:06.093784274Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:06.093788638Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:06.093793338Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:06.101365639Z [inf]  2|orchestrator  | 2026-05-16T09:23:06.098Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'youtube', size: '3.01MB' }
2026-05-16T09:23:06.894328575Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:06.894338300Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:06.894343957Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:06.894344444Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:06.894349888Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 390 ms { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-16T09:23:06.894355269Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:06.894357409Z [inf]  2|orchestrator  | 2026-05-16T09:23:06.754Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'gmb', size: '3.01MB' }
2026-05-16T09:23:06.894362045Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:06.894367639Z [inf]  2|orchestrator  | 2026-05-16T09:23:06.743Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:06.894370016Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:06.894375750Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:06.894385321Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:06.894392092Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:06.894396972Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:06.894401856Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:07.466547922Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:07.466568714Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:07.466576196Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:07.466582595Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:07.466588320Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 452 ms { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-16T09:23:07.466613945Z [inf]  2|orchestrator  | 2026-05-16T09:23:07.460Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:07.466619804Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:07.466626784Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:07.466632597Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:07.466638537Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:07.466644287Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:07.466651409Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:07.466657347Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:07.466663694Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:07.473772609Z [inf]  2|orchestrator  | 2026-05-16T09:23:07.471Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'tiktok', size: '3.01MB' }
2026-05-16T09:23:08.209861580Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:08.209861648Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:08.209871430Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:08.209873762Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:08.209878536Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 482 ms { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-16T09:23:08.209883773Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:08.209891281Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:08.209903567Z [inf]  2|orchestrator  | 2026-05-16T09:23:08.205Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:08.209910400Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:08.209917224Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:08.209923859Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:08.209929951Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:08.209937250Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:08.209944123Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:08.220627550Z [inf]  2|orchestrator  | 2026-05-16T09:23:08.214Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'pinterest', size: '3.01MB' }
2026-05-16T09:23:08.900810808Z [inf]  2|orchestrator  | 2026-05-16T09:23:08.893Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:08.900948989Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:08.900955994Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:08.900960879Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:08.900966877Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:08.900971427Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:08.900976844Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:08.900981734Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:08.900986513Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:08.900991190Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:08.900996024Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:08.901001098Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:08.901005977Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:08.901010687Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 428 ms { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-16T09:23:08.906019134Z [inf]  2|orchestrator  | 2026-05-16T09:23:08.903Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'dribbble', size: '3.01MB' }
2026-05-16T09:23:09.559138237Z [inf]  2|orchestrator  | 2026-05-16T09:23:09.554Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:09.559142833Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:09.559147557Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:09.559151818Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:09.559157404Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:09.559162010Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:09.559166181Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:09.559170756Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:09.559175082Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:09.559181215Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:09.559185241Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:09.559189181Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:09.559192996Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:09.559197716Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 406 ms { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-16T09:23:09.571082718Z [inf]  2|orchestrator  | 2026-05-16T09:23:09.567Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'discord', size: '3.01MB' }
2026-05-16T09:23:10.267241951Z [inf]  2|orchestrator  | 2026-05-16T09:23:10.264Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:10.267248887Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:10.267255212Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:10.267261786Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:10.267268328Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:10.267274944Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:10.267282347Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:10.267288946Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:10.267295735Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:10.267302415Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:10.267309265Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:10.267316506Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:10.267323196Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:10.267330248Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 436 ms { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-16T09:23:10.279987034Z [inf]  2|orchestrator  | 2026-05-16T09:23:10.275Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'slack', size: '3.01MB' }
2026-05-16T09:23:10.974202185Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:10.974210633Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:10.974216520Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:10.974226536Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:10.974232520Z [inf]  2|orchestrator  | 2026-05-16T09:23:10.971Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:10.974235476Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 427 ms { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-16T09:23:10.974243458Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:10.974249242Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:10.974254295Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:10.974259335Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:10.974265473Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:10.974270251Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:10.974275051Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:10.974279486Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:10.983690698Z [inf]  2|orchestrator  | 2026-05-16T09:23:10.981Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'kick', size: '3.01MB' }
2026-05-16T09:23:11.907244866Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 462 ms { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-16T09:23:11.907253791Z [inf]  2|orchestrator  | 2026-05-16T09:23:11.717Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:11.907255485Z [inf]  2|orchestrator  | 2026-05-16T09:23:11.726Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'twitch', size: '3.01MB' }
2026-05-16T09:23:11.907259977Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:11.907265094Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:11.907282527Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:11.907292546Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:11.907295988Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:11.907299507Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:11.907306477Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:11.907309125Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:11.907314591Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:11.907320953Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:11.907321178Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:11.907328592Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:12.393711000Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:12.393719809Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:12.393725382Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:12.393730204Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:12.393735273Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 416 ms { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-16T09:23:12.393789087Z [inf]  2|orchestrator  | 2026-05-16T09:23:12.386Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:12.393796618Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:12.393803348Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:12.393810099Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:12.393818001Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:12.393825459Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:12.393831618Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:12.393837980Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:12.393844709Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:12.401742388Z [inf]  2|orchestrator  | 2026-05-16T09:23:12.398Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mastodon', size: '3.01MB' }
2026-05-16T09:23:13.078659469Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:13.078667459Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 425 ms { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-16T09:23:13.078688463Z [inf]  2|orchestrator  | 2026-05-16T09:23:13.075Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:13.078693342Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:13.078698354Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:13.078702925Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:13.078708021Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:13.078715226Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:13.078719868Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:13.078726301Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:13.078731466Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:13.078736359Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:13.078740611Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:13.078745353Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:13.092275804Z [inf]  2|orchestrator  | 2026-05-16T09:23:13.087Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'bluesky', size: '3.01MB' }
2026-05-16T09:23:13.906606687Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:13.906608921Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:13.906617836Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:13.906621395Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 435 ms { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-16T09:23:13.906625996Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:13.906633142Z [inf]  2|orchestrator  | 2026-05-16T09:23:13.789Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'lemmy', size: '3.01MB' }
2026-05-16T09:23:13.906633252Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:13.906643880Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:13.906653464Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:13.906663787Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:13.906675110Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:13.906704181Z [inf]  2|orchestrator  | 2026-05-16T09:23:13.778Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:13.906713038Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:13.906722380Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:13.906728525Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:14.456574956Z [inf]  2|orchestrator  | 2026-05-16T09:23:14.454Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:14.456579524Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:14.456583747Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:14.456587793Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:14.456591918Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:14.456606138Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:14.456612470Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:14.456618198Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:14.456623104Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:14.456628575Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:14.456634531Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:14.456640486Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:14.456647406Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:14.456653353Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 412 ms { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-16T09:23:14.467117288Z [inf]  2|orchestrator  | 2026-05-16T09:23:14.464Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wrapcast', size: '3.01MB' }
2026-05-16T09:23:15.251982828Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:15.251983904Z [inf]  2|orchestrator  | 2026-05-16T09:23:15.249Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:15.251995476Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:15.251996415Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:15.252002462Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:15.252007918Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:15.252014130Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:15.252015062Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:15.252023034Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:15.252024341Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:15.252032226Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:15.252035669Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:15.252042868Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 529 ms { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-16T09:23:15.252044874Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:15.265346268Z [inf]  2|orchestrator  | 2026-05-16T09:23:15.259Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'telegram', size: '3.01MB' }
2026-05-16T09:23:15.913246430Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:15.913248355Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:15.913254314Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:15.913259097Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:15.913262179Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 414 ms { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-16T09:23:15.913268974Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:15.913269154Z [inf]  2|orchestrator  | 2026-05-16T09:23:15.909Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:15.913276446Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:15.913279527Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:15.913285744Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:15.913287221Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:15.913292322Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:15.913297314Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:15.913304202Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:15.922592612Z [inf]  2|orchestrator  | 2026-05-16T09:23:15.920Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'nostr', size: '3.01MB' }
2026-05-16T09:23:16.575079101Z [inf]  2|orchestrator  | 2026-05-16T09:23:16.570Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:16.575083694Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:16.575087946Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:16.575093045Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:16.575097929Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:16.575102816Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:16.575107646Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:16.575112354Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:16.575116795Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:16.575120988Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:16.575127472Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:16.575133932Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:16.575139937Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:16.575146497Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 392 ms { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-16T09:23:16.583059440Z [inf]  2|orchestrator  | 2026-05-16T09:23:16.580Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'vk', size: '3.01MB' }
2026-05-16T09:23:17.283110888Z [inf]  2|orchestrator  | 2026-05-16T09:23:17.280Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:17.283120854Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:17.283121483Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:17.283130104Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:17.283133694Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:17.283137850Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:17.283143613Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:17.283146923Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:17.283150809Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:17.283156283Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:17.283158051Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:17.283165308Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 437 ms { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-16T09:23:17.283165709Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:17.283173040Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:17.297086991Z [inf]  2|orchestrator  | 2026-05-16T09:23:17.291Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'medium', size: '3.01MB' }
2026-05-16T09:23:17.932114324Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:17.932140264Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:17.932143350Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:17.932153096Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:17.932153173Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:17.932158553Z [inf]  2|orchestrator  | 2026-05-16T09:23:17.926Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:17.932163948Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:17.932172951Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:17.932173023Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:17.932180787Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:17.932183425Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:17.932183870Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:17.932189575Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:17.932196265Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 393 ms { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-16T09:23:17.939310363Z [inf]  2|orchestrator  | 2026-05-16T09:23:17.936Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'devto', size: '3.01MB' }
2026-05-16T09:23:18.921145039Z [inf]  2|orchestrator  | 2026-05-16T09:23:18.692Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:18.921148648Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:18.921152914Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:18.921156955Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:18.921160671Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:18.921164723Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:18.921169357Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:18.921173199Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:18.921176913Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:18.921181275Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:18.921185013Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:18.921188923Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:18.921192583Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:18.921196438Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 490 ms { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-16T09:23:18.921200457Z [inf]  2|orchestrator  | 2026-05-16T09:23:18.701Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'hashnode', size: '3.01MB' }
2026-05-16T09:23:19.365526212Z [inf]  2|orchestrator  | 2026-05-16T09:23:19.362Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:19.365533124Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:19.365539922Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:19.365546634Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:19.365553062Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:19.365559354Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:19.365566510Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:19.365573437Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:19.365580370Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:19.365586992Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:19.365593573Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:19.365600189Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:19.365608614Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:19.365615297Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 416 ms { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-16T09:23:19.375420378Z [inf]  2|orchestrator  | 2026-05-16T09:23:19.372Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wordpress', size: '3.01MB' }
2026-05-16T09:23:20.060916930Z [inf]  2|orchestrator  | 2026-05-16T09:23:20.058Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:20.060920817Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:20.060924834Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:20.060928891Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:20.060933634Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:20.060938626Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:20.060942621Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:20.060946559Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:20.060950399Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:20.060955067Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:20.060960372Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:20.060964494Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:20.060968494Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:20.060973991Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 430 ms { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-16T09:23:20.071534086Z [inf]  2|orchestrator  | 2026-05-16T09:23:20.069Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'listmonk', size: '3.01MB' }
2026-05-16T09:23:20.946075747Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:20.946086926Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:20.946095048Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:20.946102390Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:20.946110015Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:20.946118054Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:20.946123615Z [inf]  2|orchestrator  | 2026-05-16T09:23:20.722Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:20.946138824Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:20.946156429Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:20.946164961Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:20.946172418Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:20.946180394Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:20.946187418Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:20.947051892Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 407 ms { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-16T09:23:20.947056609Z [inf]  2|orchestrator  | 2026-05-16T09:23:20.733Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'moltbook', size: '3.01MB' }
2026-05-16T09:23:21.408691500Z [inf]  2|orchestrator  | 2026-05-16T09:23:21.405Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:21.408699126Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:21.408705366Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:21.408713728Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:21.408720703Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:21.408729054Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:21.408734361Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:21.408739098Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:21.408744036Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:21.408748415Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:21.408752776Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:21.408757564Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:21.408762518Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:21.408767013Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 422 ms { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-16T09:23:21.420147746Z [inf]  2|orchestrator  | 2026-05-16T09:23:21.417Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'whop', size: '3.01MB' }
2026-05-16T09:23:22.168945868Z [inf]  2|orchestrator  | 2026-05-16T09:23:22.165Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:22.168953109Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:22.168959682Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:22.168967269Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:22.168972689Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:22.168978911Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:22.168987376Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:22.168994188Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:22.169000171Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:22.169006269Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:22.169012146Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:22.169018008Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:22.169023644Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:22.169030012Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 479 ms { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-16T09:23:22.179008190Z [inf]  2|orchestrator  | 2026-05-16T09:23:22.175Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'skool', size: '3.01MB' }
2026-05-16T09:23:22.960180910Z [inf]  2|orchestrator  | 2026-05-16T09:23:22.845Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-16T09:23:22.960185943Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-16T09:23:22.960190152Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-16T09:23:22.960194337Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-16T09:23:22.960198304Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-16T09:23:22.960202348Z [inf]  2|orchestrator  |   + 4 modules
2026-05-16T09:23:22.960206738Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-16T09:23:22.960211112Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-16T09:23:22.960216058Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-16T09:23:22.960221136Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-16T09:23:22.960225507Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-16T09:23:22.960229480Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:22.960233959Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-16T09:23:22.960238026Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 423 ms { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-16T09:23:22.960242212Z [inf]  2|orchestrator  | 2026-05-16T09:23:22.857Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mewe', size: '3.01MB' }
2026-05-16T09:23:23.110901559Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.107Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'main', state: 'RUNNING' }
2026-05-16T09:23:23.113149346Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.110Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-16T09:23:23.114997981Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.113Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'x', state: 'RUNNING' }
2026-05-16T09:23:23.115004378Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.113Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-16T09:23:23.115008880Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.114Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'linkedin', state: 'RUNNING' }
2026-05-16T09:23:23.116845935Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.114Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-16T09:23:23.116854443Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.115Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'reddit', state: 'RUNNING' }
2026-05-16T09:23:23.116860521Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.115Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-16T09:23:23.116866276Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.115Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'instagram', state: 'RUNNING' }
2026-05-16T09:23:23.118328635Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.116Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-16T09:23:23.118337083Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.116Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'facebook', state: 'RUNNING' }
2026-05-16T09:23:23.118343235Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.116Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-16T09:23:23.118350488Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.116Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'threads', state: 'RUNNING' }
2026-05-16T09:23:23.118356348Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.117Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-16T09:23:23.118362591Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.117Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'youtube', state: 'RUNNING' }
2026-05-16T09:23:23.118368735Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.117Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-16T09:23:23.119878765Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.117Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'gmb', state: 'RUNNING' }
2026-05-16T09:23:23.119943699Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.117Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-16T09:23:23.119951385Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.118Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'tiktok', state: 'RUNNING' }
2026-05-16T09:23:23.119957646Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.118Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-16T09:23:23.119963712Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.118Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'pinterest', state: 'RUNNING' }
2026-05-16T09:23:23.119970598Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.118Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-16T09:23:23.119976343Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'dribbble', state: 'RUNNING' }
2026-05-16T09:23:23.122049647Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-16T09:23:23.122061868Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'discord', state: 'RUNNING' }
2026-05-16T09:23:23.122069095Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-16T09:23:23.122074918Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'slack', state: 'RUNNING' }
2026-05-16T09:23:23.122082788Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-16T09:23:23.122089820Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'kick', state: 'RUNNING' }
2026-05-16T09:23:23.122096771Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.119Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-16T09:23:23.122103182Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'twitch', state: 'RUNNING' }
2026-05-16T09:23:23.122110166Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-16T09:23:23.122115718Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mastodon', state: 'RUNNING' }
2026-05-16T09:23:23.122121380Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-16T09:23:23.124098408Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'telegram', state: 'RUNNING' }
2026-05-16T09:23:23.124107505Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-16T09:23:23.124114874Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'nostr', state: 'RUNNING' }
2026-05-16T09:23:23.124121978Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-16T09:23:23.124128672Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'bluesky', state: 'RUNNING' }
2026-05-16T09:23:23.124130916Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'vk', state: 'RUNNING' }
2026-05-16T09:23:23.124136610Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-16T09:23:23.124142785Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'lemmy', state: 'RUNNING' }
2026-05-16T09:23:23.124149059Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.120Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-16T09:23:23.124155171Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wrapcast', state: 'RUNNING' }
2026-05-16T09:23:23.124161971Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.121Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-16T09:23:23.125726068Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-16T09:23:23.125738176Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'medium', state: 'RUNNING' }
2026-05-16T09:23:23.125745639Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-16T09:23:23.125752672Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'devto', state: 'RUNNING' }
2026-05-16T09:23:23.125759083Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-16T09:23:23.125765665Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'hashnode', state: 'RUNNING' }
2026-05-16T09:23:23.125781280Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-16T09:23:23.125789748Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wordpress', state: 'RUNNING' }
2026-05-16T09:23:23.125796188Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.122Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-16T09:23:23.125802712Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'listmonk', state: 'RUNNING' }
2026-05-16T09:23:23.125808998Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-16T09:23:23.127741125Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'moltbook', state: 'RUNNING' }
2026-05-16T09:23:23.127745459Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-16T09:23:23.127749923Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'whop', state: 'RUNNING' }
2026-05-16T09:23:23.127754047Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-16T09:23:23.127758158Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'skool', state: 'RUNNING' }
2026-05-16T09:23:23.127763681Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-16T09:23:23.127767818Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mewe', state: 'RUNNING' }
2026-05-16T09:23:23.127772188Z [inf]  2|orchestrator  | 2026-05-16T09:23:23.123Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-16T09:23:23.127776527Z [inf]  2|orchestrator  | [32m[Nest] 290  - [39m05/16/2026, 9:23:23 AM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +24428ms[39m
2026-05-16T09:23:23.129320768Z [inf]  2|orchestrator  | Orchestrator health check listening on port 3002
2026-05-16T09:35:44.542292954Z [err]  2026/05/16 09:35:44 [error] 23#23: *14 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:35:44.542299663Z [err]  2026/05/16 09:35:44 [error] 23#23: *14 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:35:44.542367743Z [inf]  0|frontend      | 🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙
2026-05-16T09:35:44.542373866Z [err]  2026/05/16 09:35:38 [error] 22#22: *9 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:35:44.542379925Z [err]  2026/05/16 09:35:38 [error] 22#22: *9 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:04.215241109Z [err]  2026/05/16 09:35:54 [error] 26#26: *24 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:04.215245321Z [err]  2026/05/16 09:35:54 [error] 26#26: *24 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:04.215249268Z [err]  2026/05/16 09:36:02 [error] 28#28: *29 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:04.215253673Z [err]  2026/05/16 09:36:02 [error] 28#28: *29 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:04.759276947Z [err]  2026/05/16 09:36:04 [error] 28#28: *29 no live upstreams while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://localhost/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:10.895197464Z [err]  2026/05/16 09:36:10 [error] 27#27: *36 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:10.895207317Z [err]  2026/05/16 09:36:10 [error] 27#27: *36 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:15.122665357Z [err]  2026/05/16 09:36:15 [error] 29#29: *41 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:15.122671099Z [err]  2026/05/16 09:36:15 [error] 29#29: *41 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:21.125820733Z [err]  2026/05/16 09:36:21 [error] 30#30: *44 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:21.125829134Z [err]  2026/05/16 09:36:21 [error] 30#30: *44 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:29.618384130Z [err]  2026/05/16 09:36:29 [error] 31#31: *47 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:35.126256494Z [err]  2026/05/16 09:36:35 [error] 32#32: *52 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://[::1]:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"
2026-05-16T09:36:35.126263044Z [err]  2026/05/16 09:36:35 [error] 32#32: *52 connect() failed (111: Connection refused) while connecting to upstream, client: 100.64.0.2, server: _, request: "GET /api/user/self HTTP/1.1", upstream: "http://127.0.0.1:3000/user/self", host: "postiz-v2113-production-1e17.up.railway.app", referrer: "https://postiz-v2113-production-1e17.up.railway.app/launches"