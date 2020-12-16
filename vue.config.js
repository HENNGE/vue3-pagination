module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./styles/app.scss";`,
      },
    },
  },
};
