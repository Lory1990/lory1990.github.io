var SentryWebpackPlugin = require('@sentry/webpack-plugin')

const config = {
    poweredByHeader: false,
    webpack(config, options) {

        // Sentry Webpack configurations for when all the env variables are configured
        // Can be used to build source maps on CI services
        if (process.env.SENTRY_DNS && process.env.SENTRY_ORG && process.env.SENTRY_PROJECT) {
            config.plugins.push(
                new SentryWebpackPlugin({
                    include: ".next",
                    ignore: ["node_modules", "cypress", "test"],
                    urlPrefix: "~/_next",
                }),
            )
        }

        return config
    }
}

module.exports = config