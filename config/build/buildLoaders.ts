import { ModuleOptions } from "webpack";
// import ReactRefreshTypeScript  from "react-refresh-typescript";
import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./babel/buildBabelLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const svgLoader = buildSvgLoader();
  
  const scssLoader = buildCssLoader(isDev);

  // Если не исп. typescript, то нужен babel
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
  //         transpileOnly: isDev,
  //         getCustomTransformers: () => ({
  //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //         })
  //       }
  //     }
  //   ]
  // }

  const babelLoader = buildBabelLoader(options);

  const fileLoader = buildFileLoader();

  return [
    fileLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
    svgLoader
  ];
}
