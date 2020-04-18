const TYPES ={
    TS: 'ts',
    JS: 'js'
}

statementConfig = {
    //own app name
    name: 'typeScript',
    configurationFolder : "./configuration",
    rewrite: true,
    type: TYPES.TS
};


statementConfig.dir = `./${statementConfig.name}`;
statementConfig.publicPath = statementConfig.dir.replace(".","");
module.exports = statementConfig;