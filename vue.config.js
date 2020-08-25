module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {  //以 /api开头的请求
        target: "http://182.92.128.115/", //目标服务器地址
      },
    },
  },
};
