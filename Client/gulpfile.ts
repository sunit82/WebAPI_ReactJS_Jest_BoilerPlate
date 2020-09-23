import * as gulp from 'gulp';
import * as webpack from 'webpack';
import * as webpackConfig from './webpack.config';
const chalk = require('chalk')



const printStatsVerbose: webpack.Stats.ToStringOptions = {
    chunks: true,
    colors: true
};

const printStatsQuite: webpack.Stats.ToStringOptions = {
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    modules: false,
    assets: false,
    hash: false,
    builtAt: true,
    cached: false,
    cachedAssets: false,
    children: true,
    chunksSort: "field",
    depth: false,
    entrypoints: false,
    env: false,
    errors: true,
    errorDetails: true,
    maxModules: 15,
    modulesSort: "field",
    moduleTrace: true,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: true,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: true
}

const onWebpackBuild = (done?: any, logFunc?: any, wpStats?: webpack.Stats.ToStringOptions) => {
    return function (err: Error, stats: webpack.Stats) {
        if (err)
            console.log(err);
        else {
            if (wpStats)
                console.log(stats.toString(wpStats));
            else
                console.log(stats.toString({
                    chunks: false,
                    chunkModules: false,
                    chunkOrigins: false,
                    colors: true,
                    modules: false,
                    assets: false,
                    hash: false,
                    builtAt: true,
                    cached: false,
                    cachedAssets: false,
                    children: true,
                    chunksSort: "field",
                    depth: false,
                    entrypoints: false,
                    env: false,
                    errors: true,
                    errorDetails: true,
                    maxModules: 15,
                    modulesSort: "field",
                    moduleTrace: true,
                    performance: true,
                    providedExports: false,
                    publicPath: true,
                    reasons: true,
                    source: false,
                    timings: true,
                    usedExports: false,
                    version: true,
                    warnings: true
                }));
        }
    }
}

gulp.task('watch', (done) => {
    const printLog = console.log(chalk.green('> > > WEBPACK WATCHING'));

    webpack(webpackConfig.default)
        .watch({
            aggregateTimeout: 300
        }, onWebpackBuild(null, printLog, printStatsQuite));
});

gulp.task('bundle', (done) => {
    const printLog = console.log(chalk.green('> > > WEBPACK BUNDLED'));

    webpack(webpackConfig.default)
        .watch({
            aggregateTimeout: 300
        }, onWebpackBuild(null, printLog, printStatsQuite));
});

gulp.task('default', gulp.series('bundle', (done) => {
    console.log(chalk.green('> > > DEFAULT GULP TASK'));
    done();
}));