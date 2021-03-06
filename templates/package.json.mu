{
  "name": "{{projectName.kebab}}",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "dev": "ts-node-dev --no-notify src/index.ts -- --projectName=foobar",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/mustache": "4.0.1",
    "case": "1.6.3",
    "mustache": "4.0.1",
    "reflect-metadata": "0.1.13",
    "tsyringe": "4.1.0",
    "typescript": "3.8.3",
    "winston": "3.2.1",
    "yargs": "15.3.1"
  },
  "devDependencies": {
    "@types/node": "13.13.2",
    "@types/yargs": "15.0.4",
    "ts-node-dev": "1.0.0-pre.44"
  }
}