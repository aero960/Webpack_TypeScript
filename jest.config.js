const statementConfig = require("./configuration/stmconfig.js");

module.exports = {
    roots: [`<rootDir>${statementConfig.publicPath}/src`],
    transform: {
        //  '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}