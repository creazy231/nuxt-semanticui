const pkg = require('./package');

import webpack from "webpack";

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'blue'},

    /*
    ** Global CSS
    */
    css: [
        '~/node_modules/semantic-ui/dist/semantic.min.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/semanticui.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [],

    /*
    ** Build configuration
    */
    build: {
        plugins: [
            // set shortcuts as global for bootstrap
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            }),
            // new BundleAnalyzerPlugin(),
        ],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
};
