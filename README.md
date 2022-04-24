Learning jest and practice testing.
Setting up for typescript.

### npx tsc --init

makes tsconfig.json file

### npm install --save-dev jest

in package.json, change 'test' to 'jest'

"scripts": {
"test": "jest"
}

### npm i -D jest @types/jest ts-jest

jest = jest library
@types/jest = type definitions for jest
ts-jest = helper to run jest files written in typescript

### npx ts-jest config:init

adds jest.config.js file with

/\*_ @type {import('ts-jest/dist/types').InitialOptionsTsJest} _/
module.exports = {
preset: 'ts-jest',
testEnvironment: 'node',
};

- toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
