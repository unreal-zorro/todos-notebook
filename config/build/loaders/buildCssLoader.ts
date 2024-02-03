import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';

export function buildCssLoader (isDev: boolean): webpack.RuleSetRule {
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        localIdentName: isDev
          ? '[path][name]__[local]'
          : '[hash:base64:8]'
      }
    },
  };
  
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader"
    ]
  };
}
