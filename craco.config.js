const { getPublishedComponents } = require("./src/published-components");

module.exports = {
  webpack: {
    configure: (webpack, { env, paths }) => {
      /**
             *     entry: {
      main: `${__dirname}/src/index.js`,
      ...getPublishedComponents(__dirname)
    },
             output: {
      path: `${__dirname}/dist/`,
      filename: "[name].js",
      library: "monday-style",
      libraryTarget: "umd",
      globalObject: "this"
    },
             */
      webpack.entry = {
        main: `${__dirname}/src/index.js`,
        ...getPublishedComponents(__dirname)
      };

      webpack.output = {
        path: `${__dirname}/build/`,
        filename: "[name].js",
        library: "monday-style",
        libraryTarget: "umd",
        globalObject: "this"
      };

      console.log(webpack);
      webpack.optimization.runtimeChunk = false;
      webpack.optimization.splitChunks = false;
      return webpack;
    }
  }
};
