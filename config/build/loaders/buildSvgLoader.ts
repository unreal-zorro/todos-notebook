import type webpack from 'webpack';

export function buildSvgLoader (): webpack.RuleSetRule {
  return {
    test: /\.svg$/,
    exclude: /node_modules/,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            // {
            //   name: 'convertColors',
            //   params:
            //   {
            //     currentColor: true
            //   }
            // }
          ]
        }
      }
    }]
  };
}
