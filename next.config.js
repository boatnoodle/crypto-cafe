const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const pluginAntdLess = withAntdLess({
  lessVarsFilePath: "./assets/antd-custom.less",
});

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  basePath: "",
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins(
  [[withTypescript], [withCSS], [withSass], [pluginAntdLess]],
  nextConfig
);
