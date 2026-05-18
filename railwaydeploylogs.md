2026-05-18T05:56:59.971426861Z [inf]  Mounting volume on: /var/lib/containers/railwayapp/bind-mounts/c996a3a9-3d6a-41e4-8aec-ba464161a53b/vol_v4cq474hjilh1i3t
2026-05-18T05:57:00.819478986Z [inf]  Starting Container
2026-05-18T05:57:03.405265637Z [inf]  Temporal CLI 1.7.0 (Server 1.31.0, UI 2.49.1)
2026-05-18T05:57:03.405272240Z [inf]  
2026-05-18T05:57:03.405278107Z [inf]  Temporal Server:  0.0.0.0:7233
2026-05-18T05:57:03.405284074Z [inf]  Temporal UI:      http://0.0.0.0:8233
2026-05-18T05:57:03.405290795Z [inf]  Temporal Metrics: http://0.0.0.0:9233/metrics
2026-05-18T05:57:23.159977478Z [inf]  
2026-05-18T05:57:23.159986152Z [inf]  > gitroom@1.0.0 pm2 /app
2026-05-18T05:57:23.159991904Z [inf]                       with a built-in Load Balancer.
2026-05-18T05:57:23.159992932Z [inf]  > pnpm run pm2-run
2026-05-18T05:57:23.159998906Z [inf]  
2026-05-18T05:57:23.160004687Z [inf]  
2026-05-18T05:57:23.160009763Z [inf]         _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
2026-05-18T05:57:23.160011193Z [inf]  > gitroom@1.0.0 pm2-run /app
2026-05-18T05:57:23.160016482Z [inf]  > pm2 delete all || true && pnpm run prisma-db-push && pnpm run --parallel pm2 && pm2 logs
2026-05-18T05:57:23.160021819Z [inf]  
2026-05-18T05:57:23.160024620Z [inf]          _\///______________\///______________\///__\///////////////__
2026-05-18T05:57:23.160029529Z [inf]  
2026-05-18T05:57:23.160034256Z [inf]                          -------------
2026-05-18T05:57:23.160038612Z [inf]  
2026-05-18T05:57:23.160040946Z [inf]  
2026-05-18T05:57:23.160047314Z [inf]  __/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
2026-05-18T05:57:23.160050937Z [inf]  
2026-05-18T05:57:23.160053788Z [inf]   _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
2026-05-18T05:57:23.160061185Z [inf]                            Runtime Edition
2026-05-18T05:57:23.160061674Z [inf]    _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
2026-05-18T05:57:23.160070177Z [inf]     _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
2026-05-18T05:57:23.160071421Z [inf]  
2026-05-18T05:57:23.160080470Z [inf]      _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
2026-05-18T05:57:23.160080706Z [inf]          PM2 is a Production Process Manager for Node.js applications
2026-05-18T05:57:23.160087439Z [inf]       _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
2026-05-18T05:57:23.160093672Z [inf]        _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
2026-05-18T05:57:23.161170129Z [inf]  
2026-05-18T05:57:23.161181966Z [inf]                  Start and Daemonize any application:
2026-05-18T05:57:23.161187046Z [inf]                  $ pm2 start app.js
2026-05-18T05:57:23.161191537Z [inf]  
2026-05-18T05:57:23.161200290Z [inf]                  Load Balance 4 instances of api.js:
2026-05-18T05:57:23.161205745Z [inf]                  $ pm2 start api.js -i 4
2026-05-18T05:57:23.161209542Z [inf]  
2026-05-18T05:57:23.161213577Z [inf]                  Monitor in production:
2026-05-18T05:57:23.161217808Z [inf]                  $ pm2 monitor
2026-05-18T05:57:23.161223065Z [inf]  
2026-05-18T05:57:23.161228418Z [inf]                  Make pm2 auto-boot at server restart:
2026-05-18T05:57:23.161232729Z [inf]                  $ pm2 startup
2026-05-18T05:57:23.161238742Z [inf]  
2026-05-18T05:57:23.161242594Z [inf]                  To go further checkout:
2026-05-18T05:57:23.161247821Z [inf]                  http://pm2.io/
2026-05-18T05:57:23.161251886Z [inf]  
2026-05-18T05:57:23.161255808Z [inf]  
2026-05-18T05:57:23.161259742Z [inf]                          -------------
2026-05-18T05:57:23.161264474Z [inf]  
2026-05-18T05:57:23.161269670Z [inf]  [PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
2026-05-18T05:57:23.161273540Z [inf]  [PM2] PM2 Successfully daemonized
2026-05-18T05:57:23.161277143Z [err]  [PM2][WARN] No process found
2026-05-18T05:57:23.161281025Z [inf]  
2026-05-18T05:57:23.161284852Z [inf]  > gitroom@1.0.0 prisma-db-push /app
2026-05-18T05:57:23.161288812Z [inf]  > pnpm dlx prisma@6.5.0 db push --accept-data-loss --schema ./libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-18T05:57:23.161292613Z [inf]  
2026-05-18T05:57:23.161296509Z [inf]  Prisma schema loaded from libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-18T05:57:23.161300310Z [inf]  Datasource "db": PostgreSQL database "railway", schema "public" at "postgres.railway.internal:5432"
2026-05-18T05:57:23.162339578Z [err]  │                                                         │
2026-05-18T05:57:23.162347984Z [err]  │  Run the following to update                            │
2026-05-18T05:57:23.162354051Z [err]  │    npm i --save-dev prisma@latest                       │
2026-05-18T05:57:23.162359375Z [err]  │    npm i @prisma/client@latest                          │
2026-05-18T05:57:23.162364170Z [inf]  
2026-05-18T05:57:23.162366332Z [err]  └─────────────────────────────────────────────────────────┘
2026-05-18T05:57:23.162373557Z [inf]  Scope: 6 of 7 workspace projects
2026-05-18T05:57:23.162373638Z [inf]  🚀  Your database is now in sync with your Prisma schema. Done in 354ms
2026-05-18T05:57:23.162380047Z [inf]  
2026-05-18T05:57:23.162380531Z [inf]  apps/backend pm2$ pm2 start pnpm --name backend -- start
2026-05-18T05:57:23.162386521Z [inf]  Running generate... (Use --skip-generate to skip the generators)
2026-05-18T05:57:23.162391394Z [inf]  [2K[1A[2K[GRunning generate... - Prisma Client
2026-05-18T05:57:23.162395602Z [inf]  [2K[1A[2K[G✔ Generated Prisma Client (v6.5.0) to ./node_modules/@prisma/client in 433ms
2026-05-18T05:57:23.162399468Z [inf]  
2026-05-18T05:57:23.162403408Z [err]  ┌─────────────────────────────────────────────────────────┐
2026-05-18T05:57:23.162407857Z [err]  │  Update available 6.5.0 -> 7.8.0                        │
2026-05-18T05:57:23.162412661Z [err]  │                                                         │
2026-05-18T05:57:23.162417231Z [err]  │  This is a major update - please follow the guide at    │
2026-05-18T05:57:23.162421461Z [err]  │  https://pris.ly/d/major-version-upgrade                │
2026-05-18T05:57:23.163265651Z [inf]  apps/backend pm2: │ 0  │ backend    │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 0%       │ 41.3mb   │ root     │ disabled │
2026-05-18T05:57:23.163274433Z [inf]  apps/frontend pm2$ pm2 start pnpm --name frontend -- start
2026-05-18T05:57:23.163280065Z [inf]  apps/orchestrator pm2$ pm2 start pnpm --name orchestrator -- start
2026-05-18T05:57:23.163284970Z [inf]  apps/backend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:57:23.163289569Z [inf]  apps/backend pm2: [PM2] Done.
2026-05-18T05:57:23.163294822Z [inf]  apps/orchestrator pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:57:23.163300159Z [inf]  apps/frontend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:57:23.163305241Z [inf]  apps/backend pm2: ┌────┬────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:57:23.163309863Z [inf]  apps/backend pm2: │ id │ name       │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:57:23.163314828Z [inf]  apps/backend pm2: ├────┼────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:57:23.164390125Z [inf]  apps/backend pm2: └────┴────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:57:23.164396437Z [inf]  apps/orchestrator pm2: [PM2] Done.
2026-05-18T05:57:23.164400813Z [inf]  apps/backend pm2: Done
2026-05-18T05:57:23.164406432Z [inf]  apps/frontend pm2: [PM2] Done.
2026-05-18T05:57:23.164410548Z [inf]  apps/orchestrator pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:57:23.164415121Z [inf]  apps/orchestrator pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:57:23.164418916Z [inf]  apps/orchestrator pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:57:23.164422700Z [inf]  apps/orchestrator pm2: │ 0  │ backend         │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 50%      │ 51.3mb   │ root     │ disabled │
2026-05-18T05:57:23.165681130Z [inf]  apps/orchestrator pm2: │ 2  │ frontend        │ default     │ N/A     │ fork    │ 230      │ 0s     │ 0    │ online    │ 0%       │ 21.0mb   │ root     │ disabled │
2026-05-18T05:57:23.165689752Z [inf]  apps/orchestrator pm2: │ 1  │ orchestrator    │ default     │ N/A     │ fork    │ 229      │ 0s     │ 0    │ online    │ 0%       │ 27.2mb   │ root     │ disabled │
2026-05-18T05:57:23.165696270Z [inf]  apps/orchestrator pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:57:23.165702010Z [inf]  apps/frontend pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:57:23.165706812Z [inf]  apps/frontend pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:57:23.165711521Z [inf]  apps/frontend pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:57:23.166947247Z [inf]  apps/frontend pm2: │ 0  │ backend         │ default     │ N/A     │ fork    │ 210      │ 0s     │ 0    │ online    │ 0%       │ 51.6mb   │ root     │ disabled │
2026-05-18T05:57:23.166956351Z [inf]  apps/frontend pm2: │ 2  │ frontend        │ default     │ N/A     │ fork    │ 230      │ 0s     │ 0    │ online    │ 0%       │ 21.8mb   │ root     │ disabled │
2026-05-18T05:57:23.166962166Z [inf]  apps/frontend pm2: │ 1  │ orchestrator    │ default     │ N/A     │ fork    │ 229      │ 0s     │ 0    │ online    │ 0%       │ 28.2mb   │ root     │ disabled │
2026-05-18T05:57:23.166966769Z [inf]  apps/frontend pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:57:23.166971756Z [inf]  apps/frontend pm2: Done
2026-05-18T05:57:23.166977240Z [inf]  apps/orchestrator pm2: Done
2026-05-18T05:57:23.166982398Z [inf]  [TAILING] Tailing last 15 lines for [all] processes (change the value with --lines option)
2026-05-18T05:57:23.166987488Z [inf]  /root/.pm2/pm2.log last 15 lines:
2026-05-18T05:57:23.166992242Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: RPC socket file      : /root/.pm2/rpc.sock
2026-05-18T05:57:23.166997220Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: BUS socket file      : /root/.pm2/pub.sock
2026-05-18T05:57:23.167002249Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: Application log path : /root/.pm2/logs
2026-05-18T05:57:23.168425472Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [orchestrator:1] starting in -fork mode-
2026-05-18T05:57:23.168432452Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [frontend:2] starting in -fork mode-
2026-05-18T05:57:23.168437429Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [orchestrator:1] online
2026-05-18T05:57:23.168442862Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [frontend:2] online
2026-05-18T05:57:23.168447728Z [inf]  
2026-05-18T05:57:23.168453110Z [inf]  /root/.pm2/logs/backend-out.log last 15 lines:
2026-05-18T05:57:23.168475153Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: Worker Interval      : 30000
2026-05-18T05:57:23.168486628Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: Process dump file    : /root/.pm2/dump.pm2
2026-05-18T05:57:23.168492870Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: Concurrent actions   : 2
2026-05-18T05:57:23.168499594Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: SIGTERM timeout      : 1600
2026-05-18T05:57:23.168508831Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: Runtime Binary       : /usr/local/bin/node
2026-05-18T05:57:23.168516161Z [inf]  PM2        | 2026-05-18T05:57:16: PM2 log: ===============================================================================
2026-05-18T05:57:23.168523881Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [backend:0] starting in -fork mode-
2026-05-18T05:57:23.168531309Z [inf]  PM2        | 2026-05-18T05:57:19: PM2 log: App [backend:0] online
2026-05-18T05:57:23.169762622Z [inf]  /root/.pm2/logs/backend-error.log last 15 lines:
2026-05-18T05:57:23.169774330Z [inf]  /root/.pm2/logs/orchestrator-out.log last 15 lines:
2026-05-18T05:57:23.169782294Z [inf]  /root/.pm2/logs/orchestrator-error.log last 15 lines:
2026-05-18T05:57:23.169789310Z [inf]  /root/.pm2/logs/frontend-out.log last 15 lines:
2026-05-18T05:57:23.169795405Z [inf]  /root/.pm2/logs/frontend-error.log last 15 lines:
2026-05-18T05:57:23.169801217Z [inf]  0|backend  | > postiz-backend@1.0.0 start /app/apps/backend
2026-05-18T05:57:23.169808534Z [inf]  0|backend  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/backend/src/main.js
2026-05-18T05:57:23.169815151Z [inf]  1|orchestrator  | > postiz-orchestrator@1.0.0 start /app/apps/orchestrator
2026-05-18T05:57:23.169822397Z [inf]  1|orchestrator  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/orchestrator/src/main.js
2026-05-18T05:57:23.169829696Z [inf]  2|frontend      | > postiz-frontend@1.0.0 start /app/apps/frontend
2026-05-18T05:57:23.169837362Z [inf]  2|frontend      | > dotenv -e ../../.env -- next start -p 4200
2026-05-18T05:57:23.169844552Z [inf]  2|frontend      | ▲ Next.js 16.2.1
2026-05-18T05:57:23.169849316Z [inf]  2|frontend      | - Local:         http://localhost:4200
2026-05-18T05:57:23.169854698Z [inf]  2|frontend      | - Network:       http://10.228.151.200:4200
2026-05-18T05:57:23.169859468Z [inf]  2|frontend      | ✓ Ready in 136ms
2026-05-18T05:57:23.517870533Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:23.517882966Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +4ms[39m
2026-05-18T05:57:23.517894701Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-18T05:57:23.517901317Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:23.517910054Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:23.517916055Z [inf]  1|orchestrator  | Email service provider: no provider
2026-05-18T05:57:23.518162994Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-18T05:57:23.518171646Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-18T05:57:23.518178283Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:23.518185125Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-18T05:57:23.518771614Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:57:23.518777786Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:23.518784101Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mHealthController {/health}:[39m[38;5;3m +8ms[39m
2026-05-18T05:57:23.518790009Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:23 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/health/status, GET} route[39m[38;5;3m +3ms[39m
2026-05-18T05:57:25.094273665Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:25.094284942Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:25.094292188Z [inf]  1|orchestrator  | 2026-05-18T05:57:25.087Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:25.094294939Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:25.094303699Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 1099 ms { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-18T05:57:25.094306575Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:25.094314867Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:25.094322421Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:25.094329858Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:25.094337149Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:25.094344357Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:25.094350879Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:25.094356230Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:25.094362094Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:25.102750253Z [inf]  1|orchestrator  | 2026-05-18T05:57:25.100Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'main', size: '3.01MB' }
2026-05-18T05:57:25.517644759Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.517654633Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mVideoModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.517668778Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-18T05:57:25.517674806Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-18T05:57:25.517680378Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:25.517686119Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mSentryModule dependencies initialized[39m[38;5;3m +28ms[39m
2026-05-18T05:57:25.517711449Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mUploadModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.517723081Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-18T05:57:25.517731432Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:25.517740317Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThrottlerModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:57:25.518740833Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mChatModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.518752341Z [inf]  0|backend       | Email service provider: no provider
2026-05-18T05:57:25.518754832Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:57:25.518758188Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalRegisterMissingSearchAttributesModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.518766354Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.518768595Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mInfiniteWorkflowRegisterModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.518773740Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:57:25.518778689Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAgentModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.518831179Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThirdPartyModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.518843478Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-18T05:57:25.519468767Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519658142Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519664309Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mPublicApiModule dependencies initialized[39m[38;5;3m +4ms[39m
2026-05-18T05:57:25.519670344Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mApiModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519676462Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mRootController {/}:[39m[38;5;3m +121ms[39m
2026-05-18T05:57:25.519681961Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/, GET} route[39m[38;5;3m +2ms[39m
2026-05-18T05:57:25.519688124Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mStripeController {/stripe}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519695229Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/stripe, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519701888Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAuthController {/auth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.519707244Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/can-register, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.520466012Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/resend-activation, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.520474881Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider/exists, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520481724Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicController {/public}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520488322Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520523238Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/login, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520530166Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520535632Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot-return, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520540707Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth-mobile-callback, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.520545456Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.520550503Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/activate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521846802Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/create-user, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521850314Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521860868Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id/comments, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521864199Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521872249Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/modify-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521880819Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/crypto/:path, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521887833Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/stream, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521899875Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMonitorController {/monitor}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521906375Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/monitor/queue/:name, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.521916119Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mEnterpriseController {/enterprise}:[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.522454396Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/extension-refresh, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522458707Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNoAuthIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522463916Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522467092Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522472812Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.522475185Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social-connect/:integration, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522480497Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/public/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522559390Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/url, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.522563734Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/delete-channel, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523690405Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523776421Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/token, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523780165Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mUsersController {/user}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523783965Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/agent-media-sso, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523787991Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/self, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523792902Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523796750Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523800609Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523804749Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.523808983Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525115755Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/api-key/rotate, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.525121987Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525127547Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription/tiers, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525131519Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/join-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525135372Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/organizations, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525139366Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/change-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525143360Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/logout, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525147302Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525151847Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnalyticsController {/analytics}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525978913Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525984537Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525988603Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.525992737Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/provider/:id/connect, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.525996615Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:identifier/internal-plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.526001822Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/customers, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.526005748Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/group, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.526009417Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/customer-name, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.526013678Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527207538Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/settings, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527215743Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/nickname, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527221835Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527235980Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527242418Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/time, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527249375Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/mentions, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.527254706Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527260720Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/disable, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.527266220Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/enable, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528411420Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528417937Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plug/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528422741Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528426870Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528431164Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plugs/:id/activate, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528435426Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/telegram/updates, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528439447Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528443797Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/status, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.528447932Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSettingsController {/settings}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529317660Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529322567Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529326855Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.529331054Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529335016Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529339389Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPostsController {/posts}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529343406Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/statistics, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529347227Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.529351107Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530309704Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/should-shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530316199Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/comments, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530322136Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530327644Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530333192Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530338825Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530344079Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530349527Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.530355087Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531512894Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/list, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.531517307Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/old, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531522050Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group/debug-export, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531526975Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531532348Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531536404Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531540357Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator/draft, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531544500Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.531548787Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532769182Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/date, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532777045Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/separate-posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532782720Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMediaController {/media}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532788365Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532794080Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532799771Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.532805524Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image-with-prompt, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532812091Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-server, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.532817517Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/save-media, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533900912Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/information, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533909975Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-simple, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533929755Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:endpoint, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.533939996Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533946788Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video-options, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533953205Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533959472Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video/:type/allowed, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533965632Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mBillingController {/billing}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.533971932Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535233259Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check-discount, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535239251Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/apply-discount, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535243665Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/finish-trial, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535248247Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/is-trial-finished, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535252854Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/embedded, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535257313Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/subscribe, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.535261631Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/portal, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535265562Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535269549Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.535273874Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/prorate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536023376Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/lifetime, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536029850Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/charges, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536034252Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/refund-charges, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536038596Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536042524Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/add-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536046610Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/crypto, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536050691Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNotificationsController {/notifications}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536054380Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.536058184Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications/list, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.537385616Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mCopilotController {/copilot}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537393740Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/chat, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537399917Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/agent, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537406291Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/credits, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537411790Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/:thread/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537417667Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537423066Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mWebhookController {/webhooks}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537429148Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.537434954Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538107537Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538115054Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.538124104Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538130477Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSignatureController {/signatures}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538130882Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538139583Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/default, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538144927Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538149936Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.538155614Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539276923Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAutopostController {/autopost}:[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.539285507Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539291524Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539297682Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539303661Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539309823Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id/active, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539315680Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539323504Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSetsController {/sets}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539329939Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.539335380Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540193985Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540204173Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540204444Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540211377Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mThirdPartyController {/third-party}:[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.540216570Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540223816Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540230392Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/submit, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540237417Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/function/:id/:functionName, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.540243090Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/import, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541096870Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:identifier, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541102106Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAppController {/user/oauth-app}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541106676Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541111042Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541115464Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541119644Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.541124628Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app/rotate-secret, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541130899Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mApprovedAppsController {/user/approved-apps}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541136396Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541908087Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541924426Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541936540Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541940679Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAuthorizedController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541946067Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAdminController {/admin}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541953955Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541954995Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541962826Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors/platforms, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541964877Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnnouncementsController {/announcements}:[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.541972095Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543280326Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicIntegrationsController {/public/v1}:[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.543288930Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543295017Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload-from-url, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543301269Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543307190Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543313787Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543319502Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543325355Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/group/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.543336001Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/is-connected, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544263807Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:57:25.544272093Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544278647Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544284314Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544289782Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544295327Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544300543Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-settings/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544306173Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.544311149Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/status, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.545119225Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.545125747Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.545131262Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.545136856Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-trigger/:id, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:57:25.945030401Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +462ms[39m
2026-05-18T05:57:25.946329753Z [inf]  0|backend       | Backend started successfully on port 3000
2026-05-18T05:57:25.947784177Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [32mConfiguration check completed without any issues[39m
2026-05-18T05:57:25.947789317Z [inf]  0|backend       | [32m[Nest] 274  - [39m05/18/2026, 5:57:25 AM [32m    LOG[39m [32m🚀 Backend is running on: http://localhost:3000[39m
2026-05-18T05:57:26.027486628Z [inf]  1|orchestrator  | 2026-05-18T05:57:26.025Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:26.027497204Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:26.027504630Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:26.027511959Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:26.027518007Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:26.027524311Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:26.027531321Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:26.027537899Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:26.027544226Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:26.027550333Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:26.027556484Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:26.027563003Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:26.027569696Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:26.027575844Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 578 ms { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-18T05:57:26.038842884Z [inf]  1|orchestrator  | 2026-05-18T05:57:26.036Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'x', size: '3.01MB' }
2026-05-18T05:57:26.821748495Z [inf]  1|orchestrator  | 2026-05-18T05:57:26.818Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:26.821754086Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:26.821759403Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:26.821763913Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:26.821768898Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:26.821773376Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:26.821777704Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:26.821783140Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:26.821788070Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:26.821793192Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:26.821797715Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:26.821802609Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:26.821807021Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:26.821811449Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 497 ms { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-18T05:57:26.831997138Z [inf]  1|orchestrator  | 2026-05-18T05:57:26.830Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'linkedin', size: '3.01MB' }
2026-05-18T05:57:27.616518454Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:27.616520995Z [inf]  1|orchestrator  | 2026-05-18T05:57:27.613Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:27.616530987Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 529 ms { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-18T05:57:27.616532689Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:27.616538951Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:27.616543963Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:27.616550034Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:27.616556059Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:27.616561813Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:27.616573581Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:27.616579764Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:27.616585685Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:27.616590625Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:27.616595460Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:27.629775651Z [inf]  1|orchestrator  | 2026-05-18T05:57:27.625Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'reddit', size: '3.01MB' }
2026-05-18T05:57:28.529738972Z [inf]  1|orchestrator  | 2026-05-18T05:57:28.391Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:28.529746044Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:28.529763650Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:28.529770624Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:28.529777136Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:28.529784357Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:28.529791344Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:28.529800163Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:28.529807085Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:28.529814027Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:28.529823170Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:28.529830864Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:28.529837197Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:28.529844123Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 493 ms { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-18T05:57:28.530518143Z [inf]  1|orchestrator  | 2026-05-18T05:57:28.404Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'instagram', size: '3.01MB' }
2026-05-18T05:57:29.182590921Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:29.182598667Z [inf]  1|orchestrator  | 2026-05-18T05:57:29.180Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:29.182603057Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:29.182607062Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:29.182613897Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:29.182614021Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:29.182622917Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:29.182623859Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:29.182630312Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:29.182632222Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 498 ms { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-18T05:57:29.182636652Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:29.182641343Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:29.182645940Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:29.182651971Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:29.193732524Z [inf]  1|orchestrator  | 2026-05-18T05:57:29.192Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'facebook', size: '3.01MB' }
2026-05-18T05:57:29.865321201Z [inf]  1|orchestrator  | 2026-05-18T05:57:29.860Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:29.865329346Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:29.865336151Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:29.865343747Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:29.865351816Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:29.865358131Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:29.865365153Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:29.865371440Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:29.865378284Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:29.865384332Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:29.865391518Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:29.865397324Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:29.865404873Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:29.865411502Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 429 ms { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-18T05:57:29.874485993Z [inf]  1|orchestrator  | 2026-05-18T05:57:29.872Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'threads', size: '3.01MB' }
2026-05-18T05:57:30.547506659Z [inf]  1|orchestrator  | 2026-05-18T05:57:30.538Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:30.547513244Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:30.547520029Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:30.547526963Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:30.547533281Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:30.547538693Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:30.547543899Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:30.547548959Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:30.547554867Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:30.547559828Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:30.547564846Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:30.547569295Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:30.547585663Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:30.547592041Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 414 ms { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-18T05:57:30.551780990Z [inf]  1|orchestrator  | 2026-05-18T05:57:30.549Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'youtube', size: '3.01MB' }
2026-05-18T05:57:31.229240515Z [inf]  1|orchestrator  | 2026-05-18T05:57:31.223Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:31.229249110Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:31.229254848Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:31.229259737Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:31.229265906Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:31.229284488Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:31.229292271Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:31.229299086Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:31.229304604Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:31.229311525Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:31.229318727Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:31.229324983Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:31.229331134Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:31.229337453Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 421 ms { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-18T05:57:31.527160588Z [inf]  1|orchestrator  | 2026-05-18T05:57:31.235Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'gmb', size: '3.01MB' }
2026-05-18T05:57:31.910052786Z [inf]  1|orchestrator  | 2026-05-18T05:57:31.908Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:31.910058593Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:31.910064049Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:31.910068258Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:31.910072503Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:31.910076666Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:31.910081649Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:31.910085518Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:31.910089991Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:31.910093797Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:31.910097605Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:31.910101976Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:31.910109004Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:31.910114751Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 420 ms { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-18T05:57:31.924394109Z [inf]  1|orchestrator  | 2026-05-18T05:57:31.922Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'tiktok', size: '3.01MB' }
2026-05-18T05:57:32.654631302Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:32.654640473Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 468 ms { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-18T05:57:32.654691613Z [inf]  1|orchestrator  | 2026-05-18T05:57:32.651Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:32.654696309Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:32.654704018Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:32.654717126Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:32.654727815Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:32.654733602Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:32.654738455Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:32.654743039Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:32.654749491Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:32.654755231Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:32.654759779Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:32.654780464Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:32.668046352Z [inf]  1|orchestrator  | 2026-05-18T05:57:32.663Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'pinterest', size: '3.01MB' }
2026-05-18T05:57:33.546463131Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:33.546473295Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:33.546479781Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:33.546487977Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:33.546493433Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:33.546500260Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:33.546505086Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:33.546520652Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:33.546530471Z [inf]  1|orchestrator  | 2026-05-18T05:57:33.339Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:33.546530617Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:33.546539783Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:33.546540279Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 418 ms { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-18T05:57:33.546548716Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:33.546551133Z [inf]  1|orchestrator  | 2026-05-18T05:57:33.351Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'dribbble', size: '3.01MB' }
2026-05-18T05:57:33.546556088Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:34.024440885Z [inf]  1|orchestrator  | 2026-05-18T05:57:34.012Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:34.024447121Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 403 ms { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-18T05:57:34.024449733Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:34.024455318Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:34.024458323Z [inf]  1|orchestrator  | 2026-05-18T05:57:34.022Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'discord', size: '3.01MB' }
2026-05-18T05:57:34.024461053Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:34.024465469Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:34.024469819Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:34.024474063Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:34.024477962Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:34.024482268Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:34.024486851Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:34.024491041Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:34.024495051Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:34.024498982Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:34.653377963Z [inf]  1|orchestrator  | 2026-05-18T05:57:34.648Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:34.653378804Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:34.653383864Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:34.653389277Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:34.653391287Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:34.653398214Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:34.653398391Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:34.653405738Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:34.653405910Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:34.653412880Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:34.653413441Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 385 ms { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-18T05:57:34.653418506Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:34.653423127Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:34.653428186Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:34.662250012Z [inf]  1|orchestrator  | 2026-05-18T05:57:34.659Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'slack', size: '3.01MB' }
2026-05-18T05:57:35.580908540Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:35.580909572Z [inf]  1|orchestrator  | 2026-05-18T05:57:35.321Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'kick', size: '3.01MB' }
2026-05-18T05:57:35.580919922Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:35.580927609Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 397 ms { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-18T05:57:35.580929667Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:35.580937556Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:35.580946734Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:35.580953509Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:35.580977454Z [inf]  1|orchestrator  | 2026-05-18T05:57:35.309Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:35.580982217Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:35.580987078Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:35.580992948Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:35.580997767Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:35.581002506Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:35.581008704Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:36.024055841Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:36.024067954Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:36.024076117Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:36.024082913Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:36.024089901Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 439 ms { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-18T05:57:36.024112133Z [inf]  1|orchestrator  | 2026-05-18T05:57:36.020Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:36.024118513Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:36.024126526Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:36.024132377Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:36.024139667Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:36.024145789Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:36.024151294Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:36.024155673Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:36.024160392Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:36.036525095Z [inf]  1|orchestrator  | 2026-05-18T05:57:36.029Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'twitch', size: '3.01MB' }
2026-05-18T05:57:36.702660852Z [inf]  1|orchestrator  | 2026-05-18T05:57:36.699Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:36.702672974Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:36.702680566Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:36.702688642Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:36.702697208Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:36.702704621Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:36.702710932Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:36.702718047Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:36.702726070Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:36.702733288Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:36.702739832Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:36.702746269Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:36.702752566Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:36.702758963Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 419 ms { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-18T05:57:36.718332139Z [inf]  1|orchestrator  | 2026-05-18T05:57:36.712Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mastodon', size: '3.01MB' }
2026-05-18T05:57:37.586499523Z [inf]  1|orchestrator  | 2026-05-18T05:57:37.394Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:37.586506489Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:37.586527027Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:37.586535844Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:37.586544424Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:37.586550886Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:37.586557256Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:37.586563744Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:37.586571434Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:37.586578725Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:37.586585823Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:37.586592212Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:37.586599222Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:37.586605595Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 412 ms { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-18T05:57:37.586612385Z [inf]  1|orchestrator  | 2026-05-18T05:57:37.405Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'bluesky', size: '3.01MB' }
2026-05-18T05:57:38.059120786Z [inf]  1|orchestrator  | 2026-05-18T05:57:38.051Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:38.059127900Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:38.059134315Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:38.059140809Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:38.059146667Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:38.059154151Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:38.059160133Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:38.059167478Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:38.059173695Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:38.059181486Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:38.059187876Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:38.059193600Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:38.059199293Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:38.059205348Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 402 ms { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-18T05:57:38.062527968Z [inf]  1|orchestrator  | 2026-05-18T05:57:38.060Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'lemmy', size: '3.01MB' }
2026-05-18T05:57:38.751586803Z [inf]  1|orchestrator  | 2026-05-18T05:57:38.744Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:38.751593418Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:38.751599394Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:38.751605110Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:38.751611301Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:38.751617467Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:38.751624013Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:38.751630020Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:38.751636324Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:38.751642801Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:38.751649088Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:38.751655226Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:38.751661609Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:38.751667840Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 420 ms { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-18T05:57:38.759236088Z [inf]  1|orchestrator  | 2026-05-18T05:57:38.753Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wrapcast', size: '3.01MB' }
2026-05-18T05:57:39.572797650Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:39.572797984Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:39.572805586Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:39.572808218Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:39.572812681Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:39.572814032Z [inf]  1|orchestrator  | 2026-05-18T05:57:39.451Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:39.572818478Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:39.572822483Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:39.572827002Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:39.572828584Z [inf]  1|orchestrator  | 2026-05-18T05:57:39.461Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'telegram', size: '3.01MB' }
2026-05-18T05:57:39.572830560Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:39.572830589Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:39.572839312Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:39.572841246Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:39.572848437Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 438 ms { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-18T05:57:40.114313385Z [inf]  1|orchestrator  | 2026-05-18T05:57:40.108Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:40.114322002Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:40.114327672Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:40.114333351Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:40.114338648Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:40.114343810Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:40.114348383Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:40.114353008Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:40.114357363Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:40.114363039Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:40.114367768Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:40.114374372Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:40.114380052Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:40.114384981Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 393 ms { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-18T05:57:40.122136064Z [inf]  1|orchestrator  | 2026-05-18T05:57:40.119Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'nostr', size: '3.01MB' }
2026-05-18T05:57:40.750874989Z [inf]  1|orchestrator  | 2026-05-18T05:57:40.748Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:40.750881407Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:40.750888008Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:40.750894425Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:40.750901144Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:40.750909135Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:40.750914371Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:40.750918931Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:40.750923270Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:40.750928392Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:40.750933400Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:40.750937661Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:40.750942215Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:40.750947329Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 386 ms { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-18T05:57:40.764925088Z [inf]  1|orchestrator  | 2026-05-18T05:57:40.759Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'vk', size: '3.01MB' }
2026-05-18T05:57:41.587234110Z [inf]  1|orchestrator  | 2026-05-18T05:57:41.386Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:41.587239863Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:41.587245191Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:41.587250713Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:41.587255457Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:41.587259831Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:41.587264517Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:41.587269790Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:41.587276266Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:41.587282236Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:41.587287672Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:41.587292451Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:41.587298683Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:41.587305119Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 388 ms { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-18T05:57:41.587310087Z [inf]  1|orchestrator  | 2026-05-18T05:57:41.397Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'medium', size: '3.01MB' }
2026-05-18T05:57:42.077308759Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:42.077320232Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:42.077327965Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:42.077337427Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 426 ms { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-18T05:57:42.077355762Z [inf]  1|orchestrator  | 2026-05-18T05:57:42.065Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:42.077361314Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:42.077367239Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:42.077373824Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:42.077379277Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:42.077384898Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:42.077390527Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:42.077395367Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:42.077400644Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:42.077407387Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:42.078321387Z [inf]  1|orchestrator  | 2026-05-18T05:57:42.076Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'devto', size: '3.01MB' }
2026-05-18T05:57:42.809400969Z [inf]  1|orchestrator  | 2026-05-18T05:57:42.804Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:42.809406742Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:42.809412587Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:42.809417330Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:42.809422665Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:42.809429139Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:42.809433889Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:42.809438713Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:42.809443352Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:42.809447659Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:42.809452887Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:42.809457207Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:42.809461702Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:42.809465743Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 469 ms { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-18T05:57:42.817567922Z [inf]  1|orchestrator  | 2026-05-18T05:57:42.815Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'hashnode', size: '3.01MB' }
2026-05-18T05:57:43.626416830Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:43.626431283Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:43.626433744Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:43.626440141Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:43.626447599Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:43.626448214Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 461 ms { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-18T05:57:43.626455943Z [inf]  1|orchestrator  | 2026-05-18T05:57:43.548Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wordpress', size: '3.01MB' }
2026-05-18T05:57:43.626458313Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:43.626467445Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:43.626467577Z [inf]  1|orchestrator  | 2026-05-18T05:57:43.537Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:43.626474821Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:43.626481134Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:43.626487835Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:43.626494641Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:43.626501769Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:44.613829538Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:44.613840935Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:44.613841512Z [inf]  1|orchestrator  | 2026-05-18T05:57:44.367Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:44.613850487Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:44.613855395Z [inf]  1|orchestrator  | 2026-05-18T05:57:44.376Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'listmonk', size: '3.01MB' }
2026-05-18T05:57:44.613858203Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:44.613860859Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:44.613863092Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:44.613868486Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:44.613871724Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:44.613877705Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:44.613877798Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:44.613887746Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:44.613889132Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:44.613895427Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 494 ms { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-18T05:57:45.141268481Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:45.141287414Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:45.141296154Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:45.141304249Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:45.141311665Z [inf]  1|orchestrator  | 2026-05-18T05:57:45.122Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:45.141311770Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:45.141322666Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:45.141323841Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:45.141330103Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 462 ms { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-18T05:57:45.141334761Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:45.141338382Z [inf]  1|orchestrator  | 2026-05-18T05:57:45.133Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'moltbook', size: '3.01MB' }
2026-05-18T05:57:45.141343597Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:45.141350744Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:45.141357899Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:45.141367140Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:45.918005911Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:45.918017408Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:45.918025270Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:45.918032265Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:45.918039231Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:45.918046425Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 470 ms { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-18T05:57:45.918067519Z [inf]  1|orchestrator  | 2026-05-18T05:57:45.914Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:45.918074203Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:45.918080345Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:45.918086405Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:45.918092883Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:45.918099143Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:45.918104627Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:45.918109310Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:45.930692394Z [inf]  1|orchestrator  | 2026-05-18T05:57:45.925Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'whop', size: '3.01MB' }
2026-05-18T05:57:46.725837642Z [inf]  1|orchestrator  | 2026-05-18T05:57:46.723Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:46.725847415Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:46.725853947Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:46.725863057Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:46.725869872Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:46.725876660Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:46.725883193Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:46.725889260Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:46.725895807Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:46.725902997Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:46.725909597Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:46.725916523Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:46.725922748Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:46.725929967Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 509 ms { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-18T05:57:46.739187897Z [inf]  1|orchestrator  | 2026-05-18T05:57:46.734Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'skool', size: '3.01MB' }
2026-05-18T05:57:47.620008688Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.399Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:57:47.620018148Z [inf]  1|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:57:47.620024286Z [inf]  1|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:57:47.620030135Z [inf]  1|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:57:47.620036352Z [inf]  1|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:57:47.620042314Z [inf]  1|orchestrator  |   + 4 modules
2026-05-18T05:57:47.620048437Z [inf]  1|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:57:47.620054368Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:57:47.620060305Z [inf]  1|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:57:47.620066546Z [inf]  1|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:57:47.620072420Z [inf]  1|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:57:47.620078004Z [inf]  1|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:47.620083825Z [inf]  1|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:57:47.620090259Z [inf]  1|orchestrator  | webpack 5.105.4 compiled successfully in 412 ms { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-18T05:57:47.620096326Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.411Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mewe', size: '3.01MB' }
2026-05-18T05:57:47.660142838Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.658Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'main', state: 'RUNNING' }
2026-05-18T05:57:47.666501909Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.660Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-18T05:57:47.666524476Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.662Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'x', state: 'RUNNING' }
2026-05-18T05:57:47.666532479Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.663Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-18T05:57:47.666539166Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.663Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'linkedin', state: 'RUNNING' }
2026-05-18T05:57:47.666545571Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.663Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-18T05:57:47.666551465Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.664Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'reddit', state: 'RUNNING' }
2026-05-18T05:57:47.666557553Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.664Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-18T05:57:47.666564087Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.664Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'instagram', state: 'RUNNING' }
2026-05-18T05:57:47.666570137Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.665Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-18T05:57:47.667620213Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.665Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'facebook', state: 'RUNNING' }
2026-05-18T05:57:47.667628095Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.665Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-18T05:57:47.667634530Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.666Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'threads', state: 'RUNNING' }
2026-05-18T05:57:47.667641249Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.666Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-18T05:57:47.667647363Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.666Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'youtube', state: 'RUNNING' }
2026-05-18T05:57:47.667654201Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.666Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-18T05:57:47.669348409Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.667Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'gmb', state: 'RUNNING' }
2026-05-18T05:57:47.669356762Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.667Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-18T05:57:47.669363416Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.667Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'tiktok', state: 'RUNNING' }
2026-05-18T05:57:47.669371130Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.667Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-18T05:57:47.669377132Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'pinterest', state: 'RUNNING' }
2026-05-18T05:57:47.669382907Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-18T05:57:47.670669639Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'dribbble', state: 'RUNNING' }
2026-05-18T05:57:47.670676239Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-18T05:57:47.670680922Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'discord', state: 'RUNNING' }
2026-05-18T05:57:47.670685686Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-18T05:57:47.670690782Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.668Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'slack', state: 'RUNNING' }
2026-05-18T05:57:47.670695585Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.669Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-18T05:57:47.670699978Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.669Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'kick', state: 'RUNNING' }
2026-05-18T05:57:47.670703807Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.669Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-18T05:57:47.670707548Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.669Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'twitch', state: 'RUNNING' }
2026-05-18T05:57:47.672162908Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.669Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-18T05:57:47.672171762Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mastodon', state: 'RUNNING' }
2026-05-18T05:57:47.672178234Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-18T05:57:47.672184400Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'bluesky', state: 'RUNNING' }
2026-05-18T05:57:47.672191049Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-18T05:57:47.672197762Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'lemmy', state: 'RUNNING' }
2026-05-18T05:57:47.672203771Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-18T05:57:47.672209722Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.670Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wrapcast', state: 'RUNNING' }
2026-05-18T05:57:47.672216317Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-18T05:57:47.672221911Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'telegram', state: 'RUNNING' }
2026-05-18T05:57:47.673627723Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-18T05:57:47.673633790Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'nostr', state: 'RUNNING' }
2026-05-18T05:57:47.673640275Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-18T05:57:47.673646135Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'vk', state: 'RUNNING' }
2026-05-18T05:57:47.673651865Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.671Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-18T05:57:47.673658099Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'medium', state: 'RUNNING' }
2026-05-18T05:57:47.673664112Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-18T05:57:47.673670577Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'devto', state: 'RUNNING' }
2026-05-18T05:57:47.673676234Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-18T05:57:47.673681883Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'hashnode', state: 'RUNNING' }
2026-05-18T05:57:47.673687804Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-18T05:57:47.674870130Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wordpress', state: 'RUNNING' }
2026-05-18T05:57:47.674879337Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.672Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-18T05:57:47.674886160Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'listmonk', state: 'RUNNING' }
2026-05-18T05:57:47.674892782Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-18T05:57:47.674898499Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'moltbook', state: 'RUNNING' }
2026-05-18T05:57:47.674907065Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-18T05:57:47.674912830Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'whop', state: 'RUNNING' }
2026-05-18T05:57:47.674920744Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-18T05:57:47.674926782Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'skool', state: 'RUNNING' }
2026-05-18T05:57:47.674933148Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-18T05:57:47.674938025Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mewe', state: 'RUNNING' }
2026-05-18T05:57:47.676033654Z [inf]  1|orchestrator  | 2026-05-18T05:57:47.673Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-18T05:57:47.676043207Z [inf]  1|orchestrator  | [32m[Nest] 297  - [39m05/18/2026, 5:57:47 AM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +24159ms[39m
2026-05-18T05:57:47.678690791Z [inf]  1|orchestrator  | Orchestrator health check listening on port 3002
2026-05-18T06:02:18.490931724Z [inf]  2|frontend      | 🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙
2026-05-18T06:02:25.513933361Z [inf]  0|backend       | [generateImage] baseUrl: https://openrouter.ai/api/v1 | isOpenRouter: true | model: black-forest-labs/flux.2-klein-4b | isUrl: false
2026-05-18T06:02:34.543290302Z [inf]  0|backend       | [generateImage] message keys: [ 'role', 'content', 'refusal', 'reasoning', 'images' ]
2026-05-18T06:02:34.543300276Z [inf]  0|backend       | [generateImage] Got image URL, length: 1566122 | starts with: data:image/png;base64,iVBORw0K
2026-05-18T06:02:34.543338787Z [inf]  0|backend       | [generateImage] OpenRouter response received, choices: 1