module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['@babel/plugin-transform-class-properties', { loose: true }], // Modo 'loose' habilitado
    ['@babel/plugin-transform-private-methods', { loose: true }],  // Modo 'loose' habilitado
    ['@babel/plugin-transform-private-property-in-object', { loose: true }], // Modo 'loose' habilitado
  ],
};
