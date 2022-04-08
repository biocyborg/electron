module.exports = (
  MiniCssExtractPlugin,
  cssnano,
  postcssImport,
  postcssPresetEnv
) => {
  const devMode = process.env.NODE_ENV !== "production";
  const loaders = [
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: [
        "cache-loader",
        {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: () => [postcssImport, postcssPresetEnv, cssnano],
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      exclude: /\.module.scss$/,
      use: [
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: ["node_modules"],
            },
          },
        },
      ],
    },
    {
      test: /\.module.scss$/,
      exclude: /node_modules/,
      use: [
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: devMode
                ? "[path][name]__[local]"
                : "[hash:base64:5]",
            },
            importLoaders: 2,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: ["node_modules"],
            },
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[hash:8].[name].[ext]",
            esModule: false,
            outputPath: "static/",
          },
        },
        {
          loader: "image-webpack-loader",
          options: {
            disable: true,
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
        },
      ],
    },
    {
      test: /\.(woff2?|eot|ttf|otf|TTF)(\?.*)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[hash:8].[name].[ext]",
            outputPath: "static/",
          },
        },
      ],
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[hash:8].[name].[ext]",
            outputPath: "static/",
          },
        },
      ],
    },
  ];
  return {
    rules: loaders,
  };
};
