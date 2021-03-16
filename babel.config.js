module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: [
        './src',
      ],
      'alias': {
        'assets': './src/assets',
        'components': './src/components',
        'routers': './srcrouters/',
        'screens': './src/screens',
        'shared': './src/shared',
        'services': './src/services',
        'utils': './src/utils'
      }
    }],
  ],
};
