const path = require('path')
const withCss = require('@zeit/next-css')
module.exports = withCss({
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})