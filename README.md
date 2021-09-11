# Reference: https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

Next, initialize a Node.js project within the project directory by creating a package.json file with default settings:
```bash
npm init -y
```

```bash
npm i express dotenv cors helmet socket.io
```
Here's what each of the above packages does in your project:

express: Fast, unopinionated, minimalist web framework for Node.js.

dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.

cors: Express middleware to enable CORS with various options.

helmet: Express middleware to secure your apps by setting various HTTP headers, which mitigate common attack vectors.


To use TypeScript, you also need to install a stable version of typescript as a developer dependency:
```bash
npm i -D typescript
```


To use TypeScript effectively, you need to install type definitions for the packages you installed previously:
```bash
npm i -D @types/node @types/express @types/cors 
```

## Initialize TypeScript in Node.js

To help the TypeScript compiler understand your project's structure, you need to create a tsconfig.json file within the directory you want to use as the root directory of the TypeScript project. In this case, your project directory and the TypeScript project directory are the same.

To easily generate the tsconfig.json file, ensure that you are under the project directory and issue the following command:
```bash
npx tsc --init
```

Use Environmental Variables:
```bash
touch .env
```

## Improve TypeScript Development Workflow

The TypeScript compilation process can increase the bootstrapping time of an application. However, you don't need to recompile the entire project whenever there's a change in its source code. You can set up ts-node-dev to significantly decrease the time it takes to restart your application when you make a change.

Start by installing this package to power up your development workflow:

```bash
npm i -D ts-node-dev
```

## Creating CRUD operation for item:
```bash
mkdir src/items
touch src/items/item.interface.ts
touch src/items/items.interface.ts
touch src/items/items.service.ts
touch src/items/items.router.ts
```

For downloading insta reel,
open link get videUrl from javacript data in headers, open it and it will redirect to cdn link and download that video from redirected link.