2026-05-18T05:18:29.304963164Z [inf]  Mounting volume on: /var/lib/containers/railwayapp/bind-mounts/594af8e9-e450-444c-b6e0-14725da7a076/vol_v4cq474hjilh1i3t
2026-05-18T05:18:29.305524666Z [inf]  Starting Container
2026-05-18T05:18:33.480961004Z [inf]  Temporal Metrics: http://0.0.0.0:9233/metrics
2026-05-18T05:18:33.481137573Z [inf]  Temporal CLI 1.7.0 (Server 1.31.0, UI 2.49.1)
2026-05-18T05:18:33.481144445Z [inf]  
2026-05-18T05:18:33.481150245Z [inf]  Temporal Server:  0.0.0.0:7233
2026-05-18T05:18:33.481156725Z [inf]  Temporal UI:      http://0.0.0.0:8233
2026-05-18T05:18:53.200737043Z [inf]                            Runtime Edition
2026-05-18T05:18:53.200748062Z [inf]  
2026-05-18T05:18:53.200753862Z [inf]          PM2 is a Production Process Manager for Node.js applications
2026-05-18T05:18:53.200760070Z [inf]                       with a built-in Load Balancer.
2026-05-18T05:18:53.200776306Z [inf]  
2026-05-18T05:18:53.200786717Z [inf]  > gitroom@1.0.0 pm2 /app
2026-05-18T05:18:53.200792399Z [inf]  > pnpm run pm2-run
2026-05-18T05:18:53.200797426Z [inf]  
2026-05-18T05:18:53.200802065Z [inf]  
2026-05-18T05:18:53.200813998Z [inf]  > gitroom@1.0.0 pm2-run /app
2026-05-18T05:18:53.200819249Z [inf]  > pm2 delete all || true && pnpm run prisma-db-push && pnpm run --parallel pm2 && pm2 logs
2026-05-18T05:18:53.200823920Z [inf]  
2026-05-18T05:18:53.200829088Z [inf]  
2026-05-18T05:18:53.200834447Z [inf]                          -------------
2026-05-18T05:18:53.200838857Z [inf]  
2026-05-18T05:18:53.200845041Z [inf]  __/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
2026-05-18T05:18:53.200993771Z [inf]   _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
2026-05-18T05:18:53.201001315Z [inf]    _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
2026-05-18T05:18:53.201009670Z [inf]     _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
2026-05-18T05:18:53.201015243Z [inf]      _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
2026-05-18T05:18:53.201021697Z [inf]       _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
2026-05-18T05:18:53.201028278Z [inf]        _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
2026-05-18T05:18:53.201035552Z [inf]         _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
2026-05-18T05:18:53.201042612Z [inf]          _\///______________\///______________\///__\///////////////__
2026-05-18T05:18:53.201048172Z [inf]  
2026-05-18T05:18:53.201053606Z [inf]  
2026-05-18T05:18:53.202570510Z [inf]  > gitroom@1.0.0 prisma-db-push /app
2026-05-18T05:18:53.202578999Z [inf]  > pnpm dlx prisma@6.5.0 db push --accept-data-loss --schema ./libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-18T05:18:53.202585211Z [inf]  
2026-05-18T05:18:53.202590053Z [inf]  Prisma schema loaded from libraries/nestjs-libraries/src/database/prisma/schema.prisma
2026-05-18T05:18:53.202594697Z [inf]  Datasource "db": PostgreSQL database "railway", schema "public" at "postgres.railway.internal:5432"
2026-05-18T05:18:53.202628860Z [inf]  
2026-05-18T05:18:53.202635143Z [inf]                  Start and Daemonize any application:
2026-05-18T05:18:53.202642847Z [inf]                  $ pm2 start app.js
2026-05-18T05:18:53.202650625Z [inf]  
2026-05-18T05:18:53.202657176Z [inf]                  Load Balance 4 instances of api.js:
2026-05-18T05:18:53.202665317Z [inf]                  $ pm2 start api.js -i 4
2026-05-18T05:18:53.202673205Z [inf]  
2026-05-18T05:18:53.202679497Z [inf]                  Monitor in production:
2026-05-18T05:18:53.202686292Z [inf]                  $ pm2 monitor
2026-05-18T05:18:53.202692557Z [inf]  
2026-05-18T05:18:53.202698698Z [inf]                  Make pm2 auto-boot at server restart:
2026-05-18T05:18:53.202705472Z [inf]                  $ pm2 startup
2026-05-18T05:18:53.202711572Z [inf]  
2026-05-18T05:18:53.202718262Z [inf]                  To go further checkout:
2026-05-18T05:18:53.202725070Z [inf]                  http://pm2.io/
2026-05-18T05:18:53.202731087Z [inf]  
2026-05-18T05:18:53.202737362Z [inf]  
2026-05-18T05:18:53.202743541Z [inf]                          -------------
2026-05-18T05:18:53.202749348Z [inf]  
2026-05-18T05:18:53.202755062Z [inf]  [PM2] Spawning PM2 daemon with pm2_home=/root/.pm2
2026-05-18T05:18:53.202761049Z [inf]  [PM2] PM2 Successfully daemonized
2026-05-18T05:18:53.202766919Z [err]  [PM2][WARN] No process found
2026-05-18T05:18:53.202772915Z [inf]  
2026-05-18T05:18:53.204147711Z [inf]  
2026-05-18T05:18:53.204159475Z [inf]  🚀  Your database is now in sync with your Prisma schema. Done in 402ms
2026-05-18T05:18:53.204167002Z [inf]  
2026-05-18T05:18:53.204172872Z [inf]  Running generate... (Use --skip-generate to skip the generators)
2026-05-18T05:18:53.204179091Z [inf]  [2K[1A[2K[GRunning generate... - Prisma Client
2026-05-18T05:18:53.204185110Z [inf]  [2K[1A[2K[G✔ Generated Prisma Client (v6.5.0) to ./node_modules/@prisma/client in 447ms
2026-05-18T05:18:53.204190982Z [inf]  
2026-05-18T05:18:53.204197178Z [err]  ┌─────────────────────────────────────────────────────────┐
2026-05-18T05:18:53.204202830Z [err]  │  Update available 6.5.0 -> 7.8.0                        │
2026-05-18T05:18:53.204209272Z [err]  │                                                         │
2026-05-18T05:18:53.204215958Z [err]  │  This is a major update - please follow the guide at    │
2026-05-18T05:18:53.204221504Z [err]  │  https://pris.ly/d/major-version-upgrade                │
2026-05-18T05:18:53.204226925Z [err]  │                                                         │
2026-05-18T05:18:53.204231192Z [err]  │  Run the following to update                            │
2026-05-18T05:18:53.204235600Z [err]  │    npm i --save-dev prisma@latest                       │
2026-05-18T05:18:53.204239798Z [err]  │    npm i @prisma/client@latest                          │
2026-05-18T05:18:53.204244017Z [err]  └─────────────────────────────────────────────────────────┘
2026-05-18T05:18:53.204248826Z [inf]  Scope: 6 of 7 workspace projects
2026-05-18T05:18:53.204253328Z [inf]  apps/backend pm2$ pm2 start pnpm --name backend -- start
2026-05-18T05:18:53.205657606Z [inf]  apps/frontend pm2$ pm2 start pnpm --name frontend -- start
2026-05-18T05:18:53.205668577Z [inf]  apps/orchestrator pm2$ pm2 start pnpm --name orchestrator -- start
2026-05-18T05:18:53.205675666Z [inf]  apps/backend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:18:53.205682231Z [inf]  apps/frontend pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:18:53.205687620Z [inf]  apps/orchestrator pm2: [PM2] Starting /usr/local/bin/pnpm in fork_mode (1 instance)
2026-05-18T05:18:53.205693204Z [inf]  apps/backend pm2: [PM2] Done.
2026-05-18T05:18:53.205697928Z [inf]  apps/frontend pm2: [PM2] Done.
2026-05-18T05:18:53.205703108Z [inf]  apps/orchestrator pm2: [PM2] Done.
2026-05-18T05:18:53.205709275Z [inf]  apps/backend pm2: ┌────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:18:53.205715937Z [inf]  apps/backend pm2: │ id │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:18:53.205722017Z [inf]  apps/backend pm2: ├────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:18:53.205728326Z [inf]  apps/backend pm2: │ 0  │ backend     │ default     │ N/A     │ fork    │ 211      │ 0s     │ 0    │ online    │ 0%       │ 44.0mb   │ root     │ disabled │
2026-05-18T05:18:53.207470306Z [inf]  apps/backend pm2: │ 1  │ frontend    │ default     │ N/A     │ fork    │ 212      │ 0s     │ 0    │ online    │ 0%       │ 43.6mb   │ root     │ disabled │
2026-05-18T05:18:53.207478710Z [inf]  apps/backend pm2: └────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:18:53.207484422Z [inf]  apps/frontend pm2: ┌────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:18:53.207490461Z [inf]  apps/frontend pm2: │ id │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:18:53.207496490Z [inf]  apps/frontend pm2: ├────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:18:53.207502157Z [inf]  apps/frontend pm2: │ 0  │ backend     │ default     │ N/A     │ fork    │ 211      │ 0s     │ 0    │ online    │ 0%       │ 44.0mb   │ root     │ disabled │
2026-05-18T05:18:53.209723109Z [inf]  apps/frontend pm2: │ 1  │ frontend    │ default     │ N/A     │ fork    │ 212      │ 0s     │ 0    │ online    │ 0%       │ 43.6mb   │ root     │ disabled │
2026-05-18T05:18:53.209729516Z [inf]  apps/frontend pm2: └────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:18:53.209735948Z [inf]  apps/orchestrator pm2: ┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
2026-05-18T05:18:53.209742207Z [inf]  apps/orchestrator pm2: │ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
2026-05-18T05:18:53.209748421Z [inf]  apps/orchestrator pm2: ├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
2026-05-18T05:18:53.209754766Z [inf]  apps/orchestrator pm2: │ 0  │ backend         │ default     │ N/A     │ fork    │ 211      │ 0s     │ 0    │ online    │ 0%       │ 44.0mb   │ root     │ disabled │
2026-05-18T05:18:53.211532220Z [inf]  apps/orchestrator pm2: │ 1  │ frontend        │ default     │ N/A     │ fork    │ 212      │ 0s     │ 0    │ online    │ 0%       │ 44.1mb   │ root     │ disabled │
2026-05-18T05:18:53.211538560Z [inf]  apps/orchestrator pm2: │ 2  │ orchestrator    │ default     │ N/A     │ fork    │ 232      │ 0s     │ 0    │ online    │ 0%       │ 31.5mb   │ root     │ disabled │
2026-05-18T05:18:53.211544915Z [inf]  apps/orchestrator pm2: └────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
2026-05-18T05:18:53.211551212Z [inf]  apps/backend pm2: Done
2026-05-18T05:18:53.211559864Z [inf]  apps/frontend pm2: Done
2026-05-18T05:18:53.211565912Z [inf]  apps/orchestrator pm2: Done
2026-05-18T05:18:53.211572063Z [inf]  [TAILING] Tailing last 15 lines for [all] processes (change the value with --lines option)
2026-05-18T05:18:53.211578607Z [inf]  /root/.pm2/pm2.log last 15 lines:
2026-05-18T05:18:53.211584573Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: RPC socket file      : /root/.pm2/rpc.sock
2026-05-18T05:18:53.211592371Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: BUS socket file      : /root/.pm2/pub.sock
2026-05-18T05:18:53.211598536Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: Application log path : /root/.pm2/logs
2026-05-18T05:18:53.211604950Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: Worker Interval      : 30000
2026-05-18T05:18:53.213342866Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: Process dump file    : /root/.pm2/dump.pm2
2026-05-18T05:18:53.213347492Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: Concurrent actions   : 2
2026-05-18T05:18:53.213352703Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: SIGTERM timeout      : 1600
2026-05-18T05:18:53.213357124Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: Runtime Binary       : /usr/local/bin/node
2026-05-18T05:18:53.213361650Z [inf]  PM2        | 2026-05-18T05:18:45: PM2 log: ===============================================================================
2026-05-18T05:18:53.213365932Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [backend:0] starting in -fork mode-
2026-05-18T05:18:53.213370107Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [frontend:1] starting in -fork mode-
2026-05-18T05:18:53.213374193Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [backend:0] online
2026-05-18T05:18:53.213378181Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [frontend:1] online
2026-05-18T05:18:53.213384040Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [orchestrator:2] starting in -fork mode-
2026-05-18T05:18:53.213388247Z [inf]  PM2        | 2026-05-18T05:18:48: PM2 log: App [orchestrator:2] online
2026-05-18T05:18:53.213392353Z [inf]  
2026-05-18T05:18:53.213396278Z [inf]  /root/.pm2/logs/backend-out.log last 15 lines:
2026-05-18T05:18:53.213400419Z [inf]  /root/.pm2/logs/backend-error.log last 15 lines:
2026-05-18T05:18:53.214741883Z [inf]  /root/.pm2/logs/frontend-out.log last 15 lines:
2026-05-18T05:18:53.214748384Z [inf]  /root/.pm2/logs/frontend-error.log last 15 lines:
2026-05-18T05:18:53.214753587Z [inf]  /root/.pm2/logs/orchestrator-out.log last 15 lines:
2026-05-18T05:18:53.214757738Z [inf]  /root/.pm2/logs/orchestrator-error.log last 15 lines:
2026-05-18T05:18:53.214761745Z [inf]  0|backend  | > postiz-backend@1.0.0 start /app/apps/backend
2026-05-18T05:18:53.214765860Z [inf]  0|backend  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/backend/src/main.js
2026-05-18T05:18:53.214770345Z [inf]  2|orchestrator  | > postiz-orchestrator@1.0.0 start /app/apps/orchestrator
2026-05-18T05:18:53.214777564Z [inf]  2|orchestrator  | > dotenv -e ../../.env -- node --experimental-require-module ./dist/apps/orchestrator/src/main.js
2026-05-18T05:18:53.214781725Z [inf]  1|frontend      | > postiz-frontend@1.0.0 start /app/apps/frontend
2026-05-18T05:18:53.214785917Z [inf]  1|frontend      | > dotenv -e ../../.env -- next start -p 4200
2026-05-18T05:18:53.214789951Z [inf]  1|frontend      | ▲ Next.js 16.2.1
2026-05-18T05:18:53.214793987Z [inf]  1|frontend      | - Local:         http://localhost:4200
2026-05-18T05:18:53.214798297Z [inf]  1|frontend      | - Network:       http://10.163.48.247:4200
2026-05-18T05:18:53.214802205Z [inf]  1|frontend      | ✓ Ready in 141ms
2026-05-18T05:18:53.513320816Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-18T05:18:53.513329029Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-18T05:18:53.513336489Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:53.513343032Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-18T05:18:53.513350137Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:53.513356639Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +4ms[39m
2026-05-18T05:18:53.513363599Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-18T05:18:53.513371109Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:53.513378388Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:53.513385952Z [inf]  2|orchestrator  | Email service provider: no provider
2026-05-18T05:18:53.514967284Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:18:53.514974326Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:53.514980649Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mHealthController {/health}:[39m[38;5;3m +8ms[39m
2026-05-18T05:18:53.514988361Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:18:53 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/health/status, GET} route[39m[38;5;3m +3ms[39m
2026-05-18T05:18:54.907899465Z [inf]  2|orchestrator  | 2026-05-18T05:18:54.905Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:54.907905323Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:54.907909780Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:54.907914420Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:54.907919808Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:54.907925321Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:54.907930010Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:54.907934353Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:54.907938729Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:54.907943595Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:54.907948429Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:54.907953168Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:54.907957921Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:54.907962590Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 1030 ms { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-18T05:18:54.923999067Z [inf]  2|orchestrator  | 2026-05-18T05:18:54.918Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'main', size: '3.01MB' }
2026-05-18T05:18:54.964002890Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:54 AM [32m    LOG[39m [38;5;3m[NestFactory] [39m[32mStarting Nest application...[39m
2026-05-18T05:18:55.013300578Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mCreating new client connection to localhost:7233 (attempt 1)[39m
2026-05-18T05:18:55.013308521Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:55.038653440Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mSentryModule dependencies initialized[39m[38;5;3m +22ms[39m
2026-05-18T05:18:55.038659548Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mUploadModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.038666218Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mSuccessfully connected to localhost:7233[39m
2026-05-18T05:18:55.038672207Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:55.038678529Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThrottlerModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:18:55.038684675Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDiscoveryModule dependencies initialized[39m[38;5;3m +2ms[39m
2026-05-18T05:18:55.040496490Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mVideoModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.040505113Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mThirdPartyModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.047996819Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mWorker connection established to localhost:7233[39m
2026-05-18T05:18:55.048004140Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[TemporalConnectionFactory] [39m[32mTemporalConnectionFactory[39m
2026-05-18T05:18:55.048011338Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.048017212Z [inf]  0|backend       | Email service provider: no provider
2026-05-18T05:18:55.048041442Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mTemporalRegisterMissingSearchAttributesModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.048047875Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mInfiniteWorkflowRegisterModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.048053885Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mDatabaseModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.048059727Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAgentModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.048065896Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mChatModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.048071690Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mAppModule dependencies initialized[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.055244086Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mPublicApiModule dependencies initialized[39m[38;5;3m +3ms[39m
2026-05-18T05:18:55.055250078Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[InstanceLoader] [39m[32mApiModule dependencies initialized[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.180842993Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mRootController {/}:[39m[38;5;3m +128ms[39m
2026-05-18T05:18:55.182988068Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/, GET} route[39m[38;5;3m +3ms[39m
2026-05-18T05:18:55.182994874Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mStripeController {/stripe}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.182999381Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/stripe, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.183003608Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAuthController {/auth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.183009598Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/can-register, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.183013921Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.183019982Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/login, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.183024174Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.184501967Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/forgot-return, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.184507598Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth-mobile-callback, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.184512168Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.184516458Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/activate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186643820Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/resend-activation, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186652644Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/auth/oauth/:provider/exists, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186658795Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicController {/public}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186664463Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/agent, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.186670846Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186681011Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/posts/:id/comments, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186687158Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186693098Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/modify-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.186698907Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/crypto/:path, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188838319Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/stream, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188843128Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMonitorController {/monitor}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188857791Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/monitor/queue/:name, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188863451Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mEnterpriseController {/enterprise}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188871776Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/create-user, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.188878481Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/url, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188884633Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/enterprise/delete-channel, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188890501Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNoAuthIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.188895986Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190682488Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social-connect/:integration, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190701923Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/public/provider/:id/connect, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190709066Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/extension-refresh, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190715206Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190721360Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190727835Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/token, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190736238Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mUsersController {/user}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.190742906Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/agent-media-sso, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.190748768Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/self, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192404843Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192413066Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192419135Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/impersonate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192425134Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/personal, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192431516Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192437493Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/email-notifications, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192443713Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/api-key/rotate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192449823Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.192455542Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/subscription/tiers, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194118096Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mIntegrationsController {/integrations}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194136081Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/join-org, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.194149808Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/organizations, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194156770Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/change-org, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194163067Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/logout, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194169254Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/t, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194175616Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnalyticsController {/analytics}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194181738Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.194189764Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/analytics/post/:postId, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195836531Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/provider/:id/connect, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.195841956Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:identifier/internal-plugs, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195847722Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/customers, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195856130Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/group, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195861773Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/customer-name, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195868958Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195875045Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/settings, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.195880767Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/nickname, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.195939619Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197541386Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197553793Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/time, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197560719Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/mentions, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197568278Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197574737Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/disable, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197588892Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/enable, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197594775Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197603789Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plug/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.197609879Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.199398109Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/:id/plugs, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199409489Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/plugs/:id/activate, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199416353Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/telegram/updates, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199421653Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/register, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199427828Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/integrations/moltbook/status, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199432486Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSettingsController {/settings}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199437321Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.199442539Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201097528Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/team/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.201104160Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201111513Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/settings/shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201117613Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPostsController {/posts}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201123080Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/statistics, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201130763Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201136855Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201142142Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/should-shortlink, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.201147248Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/comments, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202463193Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202472079Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202478480Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, PUT} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.202484314Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/tags/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202490510Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202496869Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202503641Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.202510261Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/list, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.202516390Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/old, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204233353Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group/debug-export, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204240007Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/group/:group, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204246254Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204252815Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204259347Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator/draft, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204265760Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/generator, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204281830Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204288367Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/:id/date, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.204293906Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/posts/separate-posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206065325Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mMediaController {/media}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206071825Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:id, DELETE} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.206076124Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206080546Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206084822Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-image-with-prompt, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206090027Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-server, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206094307Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/save-media, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206098426Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/information, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.206102061Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/upload-simple, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.208198735Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mBillingController {/billing}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208211173Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208221553Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/check-discount, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208229585Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/apply-discount, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.208234969Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/:endpoint, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208241942Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208247971Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video-options, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208254750Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.208264289Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/media/generate-video/:type/allowed, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210028715Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/finish-trial, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210035865Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/is-trial-finished, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210042501Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/embedded, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210048235Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/subscribe, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210055084Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/portal, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210060732Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210066463Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210072459Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/prorate, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210079015Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/lifetime, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.210084540Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/charges, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211754889Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/refund-charges, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.211761057Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/cancel-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211768341Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/add-subscription, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211772927Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/billing/crypto, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211777247Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mNotificationsController {/notifications}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211781654Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211786450Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/notifications/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211791487Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mCopilotController {/copilot}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.211795648Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/chat, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213588857Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/agent, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.213593217Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/credits, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213597417Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/:thread/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213602693Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/copilot/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213608270Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mWebhookController {/webhooks}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213612083Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213616933Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213621113Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks, PUT} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.213625315Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.213630109Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/webhooks/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215787057Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSignatureController {/signatures}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215802637Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215808947Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/default, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215863370Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.215873641Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215878760Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/signatures/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215971453Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAutopostController {/autopost}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215977724Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.215982247Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.217984933Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.217994809Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218008266Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/:id/active, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218013918Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/autopost/send, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218018566Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mSetsController {/sets}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218023272Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.218027545Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218032061Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218038055Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/sets/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.218043046Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mThirdPartyController {/third-party}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220393607Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/list, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220399132Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220403345Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220409266Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/submit, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220413743Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/function/:id/:functionName, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220418741Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:id/import, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220423147Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/third-party/:identifier, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220427895Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAppController {/user/oauth-app}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.220432303Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.525165761Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525175897Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525186697Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525194904Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/oauth-app/rotate-secret, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525202277Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mApprovedAppsController {/user/approved-apps}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525208824Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525216239Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/user/approved-apps/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525223924Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mOAuthAuthorizedController {/oauth}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.525231124Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/oauth/authorize, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.526094617Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAnnouncementsController {/announcements}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526101041Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526107334Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526113649Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/announcements/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526121164Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mAdminController {/admin}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526127987Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526134199Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/admin/errors/platforms, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526140610Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RoutesResolver] [39m[32mPublicIntegrationsController {/public/v1}:[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.526148062Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527473255Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/upload-from-url, POST} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.527480987Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/find-slot/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527486639Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527492957Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527499193Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527505302Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/group/:group, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527511611Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/is-connected, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.527518217Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.527524435Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/social/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529605770Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/notifications, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529611704Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/generate-video, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529618059Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/video/function, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529624424Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integrations/:id, DELETE} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529630449Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-settings/:id, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529636716Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/missing, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529642624Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/status, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529648661Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/posts/:id/release-id, PUT} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.529656984Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/:integration, GET} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.531289413Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/analytics/post/:postId, GET} route[39m[38;5;3m +1ms[39m
2026-05-18T05:18:55.531293174Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[RouterExplorer] [39m[32mMapped {/public/v1/integration-trigger/:id, POST} route[39m[38;5;3m +0ms[39m
2026-05-18T05:18:55.685829856Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +477ms[39m
2026-05-18T05:18:55.687461666Z [inf]  0|backend       | Backend started successfully on port 3000
2026-05-18T05:18:55.689041606Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [32mConfiguration check completed without any issues[39m
2026-05-18T05:18:55.689048367Z [inf]  0|backend       | [32m[Nest] 291  - [39m05/18/2026, 5:18:55 AM [32m    LOG[39m [32m🚀 Backend is running on: http://localhost:3000[39m
2026-05-18T05:18:55.845582279Z [inf]  2|orchestrator  | 2026-05-18T05:18:55.843Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:55.845588316Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:55.845594320Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:55.845601271Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:55.845607338Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:55.845612706Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:55.845618380Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:55.845623514Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:55.845629707Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:55.845636807Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:55.845642498Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:55.845650117Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:55.845656103Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:55.845661756Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 585 ms { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-18T05:18:55.858005231Z [inf]  2|orchestrator  | 2026-05-18T05:18:55.854Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'x', size: '3.01MB' }
2026-05-18T05:18:56.622829779Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:56.622841047Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:56.622848540Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:56.622855320Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 504 ms { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-18T05:18:56.622873636Z [inf]  2|orchestrator  | 2026-05-18T05:18:56.619Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:56.622883934Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:56.622891293Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:56.622897531Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:56.622903813Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:56.622910355Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:56.622916207Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:56.622921740Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:56.622929371Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:56.622935889Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:56.635820978Z [inf]  2|orchestrator  | 2026-05-18T05:18:56.631Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'linkedin', size: '3.01MB' }
2026-05-18T05:18:57.533528607Z [inf]  2|orchestrator  | 2026-05-18T05:18:57.367Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:57.533535260Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:57.533542101Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:57.533549735Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:57.533556954Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:57.533565028Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:57.533572483Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:57.533579997Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:57.533586647Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:57.533592737Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:57.533601666Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:57.533609213Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:57.533615608Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:57.533623270Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 473 ms { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-18T05:18:57.534632217Z [inf]  2|orchestrator  | 2026-05-18T05:18:57.377Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'reddit', size: '3.01MB' }
2026-05-18T05:18:58.166881846Z [inf]  2|orchestrator  | 2026-05-18T05:18:58.160Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:58.166884969Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:58.166890838Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:58.166897613Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:58.166898354Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:58.166904906Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:58.166908801Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:58.166911959Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:58.166918305Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 514 ms { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-18T05:18:58.166918768Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:58.166924318Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:58.166928633Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:58.166933540Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:58.166938122Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:58.180572020Z [inf]  2|orchestrator  | 2026-05-18T05:18:58.174Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'instagram', size: '3.01MB' }
2026-05-18T05:18:59.082970520Z [inf]  2|orchestrator  | 2026-05-18T05:18:59.072Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:59.082975822Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:59.082980984Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:59.082985785Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:59.082990198Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:59.082995672Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:59.083000966Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:59.083005377Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:59.083011101Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:59.083017292Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:59.083110269Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:59.083122604Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:59.083128025Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:59.083134003Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 588 ms { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-18T05:18:59.086924341Z [inf]  2|orchestrator  | 2026-05-18T05:18:59.084Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'facebook', size: '3.01MB' }
2026-05-18T05:18:59.816931522Z [inf]  2|orchestrator  | 2026-05-18T05:18:59.812Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:18:59.816940460Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:18:59.816947457Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:18:59.816954440Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:18:59.816960657Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:18:59.816967652Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:18:59.816973560Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:18:59.816979103Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:18:59.816985895Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:18:59.816992495Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:18:59.816998236Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:18:59.817003482Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:59.817008478Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:18:59.817013044Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 453 ms { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-18T05:18:59.827800304Z [inf]  2|orchestrator  | 2026-05-18T05:18:59.824Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'threads', size: '3.01MB' }
2026-05-18T05:19:00.565509526Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:00.565509757Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:00.565520876Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:00.565521351Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:00.565527701Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:00.565530848Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:00.565535351Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:00.565540517Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:00.565544302Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 460 ms { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-18T05:19:00.565552198Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:00.565554565Z [inf]  2|orchestrator  | 2026-05-18T05:19:00.555Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'youtube', size: '3.01MB' }
2026-05-18T05:19:00.565559594Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:00.565567431Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:00.565573664Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:00.565602763Z [inf]  2|orchestrator  | 2026-05-18T05:19:00.545Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:01.535044129Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:01.535057205Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:01.535065532Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:01.535073016Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:01.535082703Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:01.535090373Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 462 ms { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-18T05:19:01.535137910Z [inf]  2|orchestrator  | 2026-05-18T05:19:01.284Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:01.535142483Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:01.535147847Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:01.535153905Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:01.535158716Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:01.535163675Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:01.535168528Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:01.535172946Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:01.536227270Z [inf]  2|orchestrator  | 2026-05-18T05:19:01.297Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'gmb', size: '3.01MB' }
2026-05-18T05:19:02.096259025Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:02.096271863Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:02.096275706Z [inf]  2|orchestrator  | 2026-05-18T05:19:02.093Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:02.096281834Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:02.096285724Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:02.096291602Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 524 ms { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-18T05:19:02.096294872Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:02.096301186Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:02.096307555Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:02.096312811Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:02.096318630Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:02.096324299Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:02.096332958Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:02.096339083Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:02.110312630Z [inf]  2|orchestrator  | 2026-05-18T05:19:02.107Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'tiktok', size: '3.01MB' }
2026-05-18T05:19:02.884746924Z [inf]  2|orchestrator  | 2026-05-18T05:19:02.882Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:02.884757967Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:02.884766245Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:02.884773126Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:02.884779450Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:02.884786070Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:02.884792221Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:02.884798650Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:02.884804186Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:02.884810432Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:02.884818301Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:02.884824476Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:02.884829588Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:02.884835496Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 492 ms { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-18T05:19:02.903217086Z [inf]  2|orchestrator  | 2026-05-18T05:19:02.895Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'pinterest', size: '3.01MB' }
2026-05-18T05:19:03.637187994Z [inf]  2|orchestrator  | 2026-05-18T05:19:03.634Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:03.637200908Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:03.637208437Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:03.637219580Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:03.637224102Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:03.637228962Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:03.637233329Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:03.637237770Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:03.637243999Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:03.637249033Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:03.637254355Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:03.637259221Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:03.637263762Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:03.637269034Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 472 ms { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-18T05:19:03.649636025Z [inf]  2|orchestrator  | 2026-05-18T05:19:03.645Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'dribbble', size: '3.01MB' }
2026-05-18T05:19:04.563797147Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:04.563808944Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 409 ms { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-18T05:19:04.563817875Z [inf]  2|orchestrator  | 2026-05-18T05:19:04.319Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'discord', size: '3.01MB' }
2026-05-18T05:19:04.563834807Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:04.563842384Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:04.563846436Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:04.563850385Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:04.563862362Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:04.563865487Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:04.563872260Z [inf]  2|orchestrator  | 2026-05-18T05:19:04.310Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:04.563873917Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:04.563874394Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:04.563880992Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:04.563884137Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:04.563898097Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:04.971041909Z [inf]  2|orchestrator  | 2026-05-18T05:19:04.966Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:04.971048255Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:04.971054053Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:04.971059067Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:04.971063921Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:04.971068395Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:04.971072812Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:04.971077733Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:04.971082645Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:04.971088728Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:04.971093020Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:04.971097212Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:04.971101995Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:04.971107023Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 406 ms { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-18T05:19:04.980758860Z [inf]  2|orchestrator  | 2026-05-18T05:19:04.977Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'slack', size: '3.01MB' }
2026-05-18T05:19:05.641286256Z [inf]  2|orchestrator  | 2026-05-18T05:19:05.634Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:05.641292492Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:05.641299598Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:05.641306802Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:05.641312353Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:05.641316912Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:05.641321018Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:05.641325371Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:05.641329861Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:05.641334105Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:05.641338502Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:05.641342398Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:05.641346257Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:05.641350495Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 408 ms { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-18T05:19:05.647571200Z [inf]  2|orchestrator  | 2026-05-18T05:19:05.644Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'kick', size: '3.01MB' }
2026-05-18T05:19:06.553447717Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:06.553459708Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:06.553471779Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:06.553481530Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:06.553487747Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:06.553495310Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:06.553501539Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:06.553508299Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:06.553514328Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:06.553523590Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 464 ms { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-18T05:19:06.553529451Z [inf]  2|orchestrator  | 2026-05-18T05:19:06.382Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'twitch', size: '3.01MB' }
2026-05-18T05:19:06.553626719Z [inf]  2|orchestrator  | 2026-05-18T05:19:06.372Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:06.553631165Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:06.553635685Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:06.553640099Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:07.084225245Z [inf]  2|orchestrator  | 2026-05-18T05:19:07.078Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:07.084232012Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:07.084236660Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:07.084240830Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:07.084245119Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:07.084249534Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:07.084253827Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:07.084259299Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:07.084264237Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:07.084268605Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:07.084272590Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:07.084277161Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:07.084281197Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:07.084285107Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 449 ms { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-18T05:19:07.094136960Z [inf]  2|orchestrator  | 2026-05-18T05:19:07.091Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mastodon', size: '3.01MB' }
2026-05-18T05:19:07.747445370Z [inf]  2|orchestrator  | 2026-05-18T05:19:07.744Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:07.747449533Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:07.747453964Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:07.747458364Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:07.747462349Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:07.747467448Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:07.747471337Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:07.747476600Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:07.747480844Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:07.747484836Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:07.747488794Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:07.747492710Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:07.747497435Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:07.747501582Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 398 ms { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-18T05:19:07.757046984Z [inf]  2|orchestrator  | 2026-05-18T05:19:07.754Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'bluesky', size: '3.01MB' }
2026-05-18T05:19:08.565629338Z [inf]  2|orchestrator  | 2026-05-18T05:19:08.512Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:08.565635680Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:08.565641008Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:08.565645526Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:08.565650227Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:08.565655786Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:08.565660951Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:08.565684445Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:08.565715090Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:08.565735948Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:08.565756268Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:08.565772606Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:08.565795087Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:08.565808473Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 455 ms { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-18T05:19:08.565815264Z [inf]  2|orchestrator  | 2026-05-18T05:19:08.522Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'lemmy', size: '3.01MB' }
2026-05-18T05:19:09.579848143Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:09.579858984Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:09.579868044Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:09.579871999Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:09.579877953Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 463 ms { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-18T05:19:09.579878640Z [inf]  2|orchestrator  | 2026-05-18T05:19:09.261Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:09.579879008Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:09.579882340Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:09.579897227Z [inf]  2|orchestrator  | 2026-05-18T05:19:09.272Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wrapcast', size: '3.01MB' }
2026-05-18T05:19:09.579899115Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:09.579904473Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:09.579912166Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:09.579915702Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:09.579923784Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:09.990367045Z [inf]  2|orchestrator  | 2026-05-18T05:19:09.988Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:09.990376160Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:09.990382007Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:09.990387151Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:09.990392440Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:09.990397790Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:09.990402501Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:09.990407528Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:09.990411872Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:09.990421846Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:09.990426310Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:09.990432966Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:09.990458272Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:09.990463744Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 446 ms { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-18T05:19:10.004190334Z [inf]  2|orchestrator  | 2026-05-18T05:19:09.997Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'telegram', size: '3.01MB' }
2026-05-18T05:19:10.660009064Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:10.660018577Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:10.660025044Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:10.660030580Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:10.660035828Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:10.660043383Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:10.660049552Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:10.660055871Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 412 ms { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-18T05:19:10.660061743Z [inf]  2|orchestrator  | 2026-05-18T05:19:10.658Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:10.660067577Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:10.660073774Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:10.660079704Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:10.660085677Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:10.660091445Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:10.673472764Z [inf]  2|orchestrator  | 2026-05-18T05:19:10.668Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'nostr', size: '3.01MB' }
2026-05-18T05:19:11.569564347Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:11.569572056Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:11.569575110Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:11.569583427Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:11.569583683Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 431 ms { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-18T05:19:11.569592501Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:11.569600382Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:11.569608606Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:11.569616011Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:11.569623070Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:11.569629968Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:11.569637275Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:11.569642662Z [inf]  2|orchestrator  | 2026-05-18T05:19:11.352Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:11.569648317Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:11.570900588Z [inf]  2|orchestrator  | 2026-05-18T05:19:11.362Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'vk', size: '3.01MB' }
2026-05-18T05:19:12.022790567Z [inf]  2|orchestrator  | 2026-05-18T05:19:12.019Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:12.022797544Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:12.022803993Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:12.022808465Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:12.022813402Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:12.022819033Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:12.022831271Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:12.022836545Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:12.022841390Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:12.022845678Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:12.022849906Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:12.022854642Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:12.022860035Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:12.022864720Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 409 ms { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-18T05:19:12.030280006Z [inf]  2|orchestrator  | 2026-05-18T05:19:12.027Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'medium', size: '3.01MB' }
2026-05-18T05:19:12.757454903Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:12.757466818Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:12.757475883Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:12.757482707Z [inf]  2|orchestrator  | 2026-05-18T05:19:12.752Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:12.757485353Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:12.757490414Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:12.757494740Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:12.757499184Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:12.757504217Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:12.757507975Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:12.757513274Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:12.757519677Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:12.757526917Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:12.757537904Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 466 ms { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-18T05:19:12.763438186Z [inf]  2|orchestrator  | 2026-05-18T05:19:12.761Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'devto', size: '3.01MB' }
2026-05-18T05:19:13.570238297Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:13.570245395Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:13.570250881Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:13.570255571Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:13.570260490Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:13.570265286Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:13.570269738Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:13.570274304Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:13.570278598Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:13.570283129Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:13.570288440Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 518 ms { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-18T05:19:13.570326536Z [inf]  2|orchestrator  | 2026-05-18T05:19:13.567Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:13.570330767Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:13.570335051Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:13.580421772Z [inf]  2|orchestrator  | 2026-05-18T05:19:13.578Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'hashnode', size: '3.01MB' }
2026-05-18T05:19:14.241856761Z [inf]  2|orchestrator  | 2026-05-18T05:19:14.238Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:14.241863155Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:14.241868273Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:14.241873492Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:14.241879337Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:14.241884225Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:14.241889363Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:14.241894864Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:14.241900562Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:14.241905698Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:14.241910685Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:14.241915761Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:14.241920725Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:14.241925535Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 420 ms { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-18T05:19:14.253545832Z [inf]  2|orchestrator  | 2026-05-18T05:19:14.251Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'wordpress', size: '3.01MB' }
2026-05-18T05:19:14.912766253Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:14.912775821Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:14.912779504Z [inf]  2|orchestrator  | 2026-05-18T05:19:14.906Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:14.912782180Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:14.912787624Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:14.912791025Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:14.912795306Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:14.912798990Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:14.912804240Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:14.912805541Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:14.912812144Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:14.912812318Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 405 ms { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-18T05:19:14.912819465Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:14.912825363Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:14.921059795Z [inf]  2|orchestrator  | 2026-05-18T05:19:14.918Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'listmonk', size: '3.01MB' }
2026-05-18T05:19:15.597017983Z [inf]  2|orchestrator  | 2026-05-18T05:19:15.594Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:15.597024983Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:15.597031301Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:15.597036945Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:15.597042686Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:15.597049058Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:15.597054579Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:15.597061978Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:15.597067793Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:15.597073384Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:15.597080848Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:15.597087086Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:15.597092947Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:15.597098530Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 438 ms { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-18T05:19:15.608357490Z [inf]  2|orchestrator  | 2026-05-18T05:19:15.604Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'moltbook', size: '3.01MB' }
2026-05-18T05:19:16.584906047Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:16.584915152Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:16.584918658Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:16.584927144Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:16.584928418Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:16.584931511Z [inf]  2|orchestrator  | 2026-05-18T05:19:16.315Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:16.584938230Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:16.584938960Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:16.584942474Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:16.584945650Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:16.584958679Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:16.584984198Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:16.584996094Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:16.585004307Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 454 ms { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-18T05:19:16.585012984Z [inf]  2|orchestrator  | 2026-05-18T05:19:16.326Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'whop', size: '3.01MB' }
2026-05-18T05:19:17.047299404Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:17.047308207Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:17.047314407Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:17.047319489Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:17.047324927Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:17.047331214Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:17.047332514Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.041Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:17.047337579Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:17.047339607Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:17.047345448Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:17.047350056Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:17.047354812Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:17.047360741Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 455 ms { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-18T05:19:17.047366507Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:17.055933928Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.051Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'skool', size: '3.01MB' }
2026-05-18T05:19:17.727226651Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.723Z [INFO] asset workflow-bundle-72358905fc84cad5aa54.js 3.01 MiB [emitted] [immutable] (name: main)
2026-05-18T05:19:17.727233062Z [inf]  2|orchestrator  | runtime modules 1010 bytes 5 modules
2026-05-18T05:19:17.727239818Z [inf]  2|orchestrator  | modules by path ../../node_modules/ 964 KiB
2026-05-18T05:19:17.727244183Z [inf]  2|orchestrator  |   modules by path ../../node_modules/@temporalio/ 332 KiB 55 modules
2026-05-18T05:19:17.727250192Z [inf]  2|orchestrator  |   modules by path ../../node_modules/nexus-rpc/lib/ 25.6 KiB 17 modules
2026-05-18T05:19:17.727254854Z [inf]  2|orchestrator  |   + 4 modules
2026-05-18T05:19:17.727259591Z [inf]  2|orchestrator  | modules by path ./dist/ 61.3 KiB
2026-05-18T05:19:17.727264407Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/workflows/ 60.1 KiB 13 modules
2026-05-18T05:19:17.727269336Z [inf]  2|orchestrator  |   modules by path ./dist/libraries/nestjs-libraries/src/ 803 bytes 2 modules
2026-05-18T05:19:17.727273842Z [inf]  2|orchestrator  |   modules by path ./dist/apps/orchestrator/src/signals/*.js 452 bytes 2 modules
2026-05-18T05:19:17.727278177Z [inf]  2|orchestrator  | optional modules 30 bytes [optional]
2026-05-18T05:19:17.727282639Z [inf]  2|orchestrator  |   __temporal_custom_payload_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:17.727287236Z [inf]  2|orchestrator  |   __temporal_custom_failure_converter (ignored) 15 bytes [optional] [built] [code generated]
2026-05-18T05:19:17.727291775Z [inf]  2|orchestrator  | webpack 5.105.4 compiled successfully in 422 ms { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-18T05:19:17.741013403Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.734Z [INFO] Workflow bundle created { sdkComponent: 'worker', taskQueue: 'mewe', size: '3.01MB' }
2026-05-18T05:19:17.992268782Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.979Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'main', state: 'RUNNING' }
2026-05-18T05:19:17.992277695Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.982Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'main' }
2026-05-18T05:19:17.992283721Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.985Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'x', state: 'RUNNING' }
2026-05-18T05:19:17.992290562Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.985Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'x' }
2026-05-18T05:19:17.992295544Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.986Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'linkedin', state: 'RUNNING' }
2026-05-18T05:19:17.992301271Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.986Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'linkedin' }
2026-05-18T05:19:17.992306147Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.987Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'reddit', state: 'RUNNING' }
2026-05-18T05:19:17.992311206Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.987Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'reddit' }
2026-05-18T05:19:17.992316549Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.987Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'instagram', state: 'RUNNING' }
2026-05-18T05:19:17.992329494Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.988Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'instagram' }
2026-05-18T05:19:17.992335090Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.988Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'facebook', state: 'RUNNING' }
2026-05-18T05:19:17.993709178Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'facebook' }
2026-05-18T05:19:17.993720252Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'threads', state: 'RUNNING' }
2026-05-18T05:19:17.993727204Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'threads' }
2026-05-18T05:19:17.993733201Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'youtube', state: 'RUNNING' }
2026-05-18T05:19:17.993739164Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'youtube' }
2026-05-18T05:19:17.993745599Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.989Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'gmb', state: 'RUNNING' }
2026-05-18T05:19:17.993752138Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'gmb' }
2026-05-18T05:19:17.993758204Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.990Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'tiktok', state: 'RUNNING' }
2026-05-18T05:19:17.993764324Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'tiktok' }
2026-05-18T05:19:17.993772513Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.990Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'pinterest', state: 'RUNNING' }
2026-05-18T05:19:17.993778883Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.990Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'pinterest' }
2026-05-18T05:19:17.995068447Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'dribbble', state: 'RUNNING' }
2026-05-18T05:19:17.995078272Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'dribbble' }
2026-05-18T05:19:17.995086259Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'discord', state: 'RUNNING' }
2026-05-18T05:19:17.995093387Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'discord' }
2026-05-18T05:19:17.995099574Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'slack', state: 'RUNNING' }
2026-05-18T05:19:17.995105936Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.991Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'slack' }
2026-05-18T05:19:17.995112185Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'kick', state: 'RUNNING' }
2026-05-18T05:19:17.995118585Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'kick' }
2026-05-18T05:19:17.995124620Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'twitch', state: 'RUNNING' }
2026-05-18T05:19:17.995130961Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'twitch' }
2026-05-18T05:19:17.995139539Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mastodon', state: 'RUNNING' }
2026-05-18T05:19:17.996698570Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mastodon' }
2026-05-18T05:19:17.996705194Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'bluesky', state: 'RUNNING' }
2026-05-18T05:19:17.996710003Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.992Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'bluesky' }
2026-05-18T05:19:17.996714612Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'lemmy', state: 'RUNNING' }
2026-05-18T05:19:17.996719323Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'lemmy' }
2026-05-18T05:19:17.996723852Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wrapcast', state: 'RUNNING' }
2026-05-18T05:19:17.996728502Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wrapcast' }
2026-05-18T05:19:17.996733443Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'telegram', state: 'RUNNING' }
2026-05-18T05:19:17.996737808Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'telegram' }
2026-05-18T05:19:17.996742229Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'nostr', state: 'RUNNING' }
2026-05-18T05:19:17.996746714Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.993Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'nostr' }
2026-05-18T05:19:17.998256211Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'hashnode' }
2026-05-18T05:19:17.998266809Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'wordpress', state: 'RUNNING' }
2026-05-18T05:19:17.998274794Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'vk', state: 'RUNNING' }
2026-05-18T05:19:17.998275745Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'wordpress' }
2026-05-18T05:19:17.998285411Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'vk' }
2026-05-18T05:19:17.998286668Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'listmonk', state: 'RUNNING' }
2026-05-18T05:19:17.998293946Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'medium', state: 'RUNNING' }
2026-05-18T05:19:17.998300482Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'medium' }
2026-05-18T05:19:17.998307260Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'devto', state: 'RUNNING' }
2026-05-18T05:19:17.998314178Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'devto' }
2026-05-18T05:19:17.998320017Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.994Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'hashnode', state: 'RUNNING' }
2026-05-18T05:19:17.999661280Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'listmonk' }
2026-05-18T05:19:17.999666662Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'moltbook', state: 'RUNNING' }
2026-05-18T05:19:17.999673313Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'moltbook' }
2026-05-18T05:19:17.999678250Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'whop', state: 'RUNNING' }
2026-05-18T05:19:17.999683486Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'whop' }
2026-05-18T05:19:17.999687999Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.995Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'skool', state: 'RUNNING' }
2026-05-18T05:19:17.999692742Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'skool' }
2026-05-18T05:19:17.999697527Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.996Z [INFO] Worker state changed { sdkComponent: 'worker', taskQueue: 'mewe', state: 'RUNNING' }
2026-05-18T05:19:17.999702176Z [inf]  2|orchestrator  | 2026-05-18T05:19:17.996Z [INFO] No Nexus services registered, not polling for Nexus tasks { sdkComponent: 'worker', taskQueue: 'mewe' }
2026-05-18T05:19:17.999706614Z [inf]  2|orchestrator  | [32m[Nest] 298  - [39m05/18/2026, 5:19:17 AM [32m    LOG[39m [38;5;3m[NestApplication] [39m[32mNest application successfully started[39m[38;5;3m +24621ms[39m
2026-05-18T05:19:18.001050842Z [inf]  2|orchestrator  | Orchestrator health check listening on port 3002
2026-05-18T05:41:52.220443528Z [inf]  1|frontend      | 🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙