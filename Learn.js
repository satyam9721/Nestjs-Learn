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

