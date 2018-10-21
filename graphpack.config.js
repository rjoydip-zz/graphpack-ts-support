module.exports = {
    webpack: ({
        config,
        webpack
    }) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
        });
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
        };
        return config;
    },
};