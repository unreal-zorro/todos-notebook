import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
// import WebpackPwaManifest from "webpack-pwa-manifest";
import path from "path";
import { BuildOptions } from "./types/types";

export function buildPlugins({ 
  mode, paths, analyzer, platform
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ 
      template: paths.html,
      // favicon: path.resolve(paths.public, 'favicon.ico')
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode)
    }),
    // @ts-ignore
    // new WebpackPwaManifest({
    //   name: 'TODOs notebook - this is web app for make todos',
    //   short_name: 'TODOsNote',
    //   description: 'TODOs notebook - this is web app for make todos',
    //   background_color: "#ffffff",
    //   fingerprints: false,
    //   icons: [
    //     { src: path.resolve(paths.public, './icon-192.png'), size: '128x192' },
    //     { src: path.resolve(paths.public, './icon-512.png'), size: '341x512' }
    //   ]
    // })
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
    plugins.push(new CopyPlugin({
      patterns: [
        // {
        //   from: path.resolve(paths.public, 'locales'),
        //   to: path.resolve(paths.output, 'locales')
        // },
        {
          from: path.resolve(paths.public, 'manifest.webmanifest'),
          to: path.resolve(paths.output, 'manifest.webmanifest')
        },
        {
          from: path.resolve(paths.public, 'favicon.ico'),
          to: path.resolve(paths.output, 'favicon.ico')
        },
        {
          from: path.resolve(paths.public, 'icon.svg'),
          to: path.resolve(paths.output, 'icon.svg')
        },
        {
          from: path.resolve(paths.public, 'apple-touch-icon.png'),
          to: path.resolve(paths.output, 'apple-touch-icon.png')
        },
        {
          from: path.resolve(paths.public, 'icon-192.png'),
          to: path.resolve(paths.output, 'icon-192.png')
        },
        {
          from: path.resolve(paths.public, 'icon-512.png'),
          to: path.resolve(paths.output, 'icon-512.png')
        }
      ]
    }));
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  
  return plugins;
}
