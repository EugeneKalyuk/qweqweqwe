'use strict';

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js"
    },
    watch: true,
    watchOption: {
        aggregateTimeout: 100
    },
    devtool: "source-map"
};