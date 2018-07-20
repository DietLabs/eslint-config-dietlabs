const rules = [];

if (process.env.NODE_ENV === 'dev') {
    rules.push({
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        options: {
            emitError: true,
            emitWarning: true,
            failOnWarning: false,
            failOnError: false,
        },
    });
}

module.exports = rules;
