module.exports = {
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    },
    devServer: {
        /*before(app) {
            app.get('/api/homeJson', function(req, res){
                res.json({
                    errno: 0,
                    data: homeJson
                })
            })
        },*/
        host: '0.0.0.0',
        port: 8080
    }
}
