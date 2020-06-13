module.exports = {
    resolver: {
      extraNodeModules: require('node-libs-react-native'),
     // net: require('node-libs-react-native/mock/net'),
      net: require('react-native-tcp'),

    },
  };