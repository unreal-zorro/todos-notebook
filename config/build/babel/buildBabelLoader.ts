import { BuildOptions } from "../types/types";
import { removeDataTestidBabelPlugin } from "./removeDataTestidBabelPlugin";

export function buildBabelLoader({ mode }: BuildOptions) {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push(
      [
        removeDataTestidBabelPlugin,
        {
          props: ['data-testid']
        }
      ]
    );
  }
  
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              // runtime: isDev ? "automatic": "classic"
              runtime: "automatic"
            }
          ]
        ],
        plugins: plugins.length ? plugins : undefined
      }
    }
  }
}
