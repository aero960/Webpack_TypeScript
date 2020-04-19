const path = require("path");
const statementConfig = require("./configuration/stmconfig.js");
const plugins = require(`${statementConfig.configurationFolder}/plugin.js`);
const loaders = require(`${statementConfig.configurationFolder}/loaders.js`);
const fs = require('fs');

const config = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: ["@babel/polyfill",`${statementConfig.dir}/src/app.ts`],
    resolve: {
        extensions: ['.vue', '.mjs', '.js', '.json', '.ts']
    },
    output: {
        path: path.resolve(__dirname.replace("configuration", ""), `${statementConfig.dir}/dist`),
        publicPath: `${statementConfig.publicPath}/dist/`,
        filename: "[name].bundle.js"
    },
    //dev server configuration
    devServer: {
        before: (app, server) => {
            let {port} = server.options;
            let _info = server.log.info;
            server.log.info = (args) => {
                return _info(args.match(/http:\/\/localhost/) ? `Server is Working at [ http://localhost:${port}/${statementConfig.dir.replace("./", "")} ]` : args)
            }
        },
        host: "localhost",
        disableHostCheck: true,
        filename: "bundle.js",
        port: 4000,
        compress: true,
        historyApiFallback: (statementConfig.rewrite) ? {
            rewrites: [
                {
                    from: new RegExp(`^\/${path.basename(statementConfig.dir)}\/+`).source,
                    to: `/${statementConfig.dir}/index.html`
                },
                {from: /.*/, to: '/assets/404template/index.html'}
            ]
        } : {},
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: false,
            errorDetails: false,
            warnings: false,
            publicPath: false
        }
    }
};

Object.assign(config,
    plugins,
    loaders
);

module.exports = () => {
/*

        let fileData = {};
    fs.readFileSync('./tsconfig.json' , 'utf8', function (err, contents) {
        let parsed = JSON.parse(contents);
        parsed.compilerOptions.rootDir = parsed.compilerOptions.rootDir.replace(/{.*}/, `${statementConfig.name}`);
        parsed.compilerOptions.outDir = parsed.compilerOptions.outDir.replace(/{.*}/, `${statementConfig.name}`);
        fileData = {name: "test"};
        console.log(fileData,"test")
    });

    fs.writeFileSync('./tsconfig.json', JSON.stringify(fileData), function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
*/



    const projectPath = `${statementConfig.dir}/src`;
    /**
     * Create project main path  for all files
     * */
    if (!fs.existsSync(`${statementConfig.dir}`))

        fs.mkdirSync(`${statementConfig.dir}`, 0o777);

    /**
     * create folder for main application
     */
    if (!fs.existsSync(projectPath) && !fs.existsSync(projectPath + '/app.ts')) {

        fs.mkdirSync(projectPath, 0o777);

        fs.writeFileSync(projectPath + '/app.ts', 'console.log("success")', () => {

            console.log("created main file application")
        });
    }
    return config;

};

