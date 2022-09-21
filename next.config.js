/** @type {import('next').NextConfig} */

const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path:'/Users/vintage/Desktop/Internship/token-alchemy-two/.env'
})

module.exports = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
}
}

