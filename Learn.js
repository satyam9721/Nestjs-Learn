#start
> sudo npm install -g @nestjs/cli
> mkdir nestjs-app
> ls
> cd nestjs-app
> nest new project-name

to run this project:-

satyam_007@Satyams-MacBook-Air project-name % npm run build

> project-name@0.0.1 build
> nest build

satyam_007@Satyams-MacBook-Air project-name % npm run start

> project-name@0.0.1 start
> nest start

nestjs vs express.js

#install husky

 % npm install husky --save-dev

 % npx husky init



#for_commintlint  
  
> npm install --save-dev @commitlint/{config-conventional,cli}


commit types:-

  feat     → new feature
fix      → bug fix
docs     → documentation
style    → formatting
refactor → code restructuring
test     → adding tests
chore    → maintenance

#then_create new file with this contains.
commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
};



example :- git commit -m "feat: add user authentication"


nestjs start in pnpm:-

  pnpm run start:dev
 pnpm approve-builds
  pnpm install
 pnpm run start:dev

//--------------------

//basically we have write business logic inside the service and this service invoke from controller.

Basic flow look like this:- 

 Client Request
      │
      ▼
main.ts  (Application Entry Point)
      │
      ▼
AppModule (Root Module)
      │
      ▼
AppController (Handles Route)
      │
      ▼
AppService (Business Logic)
      │
      ▼
Response Sent Back


Starter Files Explained:-

src/
│
├── main.ts                ← Entry point
├── app.module.ts          ← Root module
├── app.controller.ts      ← Handles API routes
├── app.service.ts         ← Business logic
└── app.controller.spec.ts ← Testing file



In app.module.ts we call the both things controller & services.

AppModule
   │
   ├── AppController
   │
   └── AppService


In app.controller.ts is used take business logic from app.service.ts and combine with created routes.

 @Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()

Marks class as route handler.

 @Get()

Maps HTTP GET request.

-----------------------------------------------------
constructor(private readonly appService: AppService)

NestJS automatically injects AppService.

This is called:
Dependency Injection
-----------------------------------------------------
 
In app.service.ts Business logic lives here.

 @Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

When browser/postman hits :- http://localhost:3000

Complete internal flow:-
 
1. main.ts starts app

2. AppModule loads

3. AppController registered

4. Route discovered:
      GET /

5. Request comes

6. AppController.getHello() executes

7. Controller calls:
      appService.getHello()

8. Service returns:
      "Hello World!"

9. Controller returns response

10. NestJS sends HTTP response
 
🚀 VISUAL FLOW GRAPH:-
 
Browser/Postman
      │
      ▼
GET /
      │
      ▼
main.ts
      │
      ▼
AppModule.ts
      │
      ▼
AppController.ts
      │
      ▼
AppService.ts
      │
      ▼
"Hello World!"
      │
      ▼
HTTP Response
 

----------------------------------------------------------------------------------------------------------
Decorators

NestJS heavily uses decorators:-
 
@Controller()
@Get()
@Post()
@Injectable()
@Module()

 Modules

Everything belongs inside modules:-
 
AuthModule
UserModule
ProductModule
DatabaseModule

🚀 Real Project Architecture:-

src/
│
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│
├── database/
├── common/
├── config/
│
└── main.ts

 

 






