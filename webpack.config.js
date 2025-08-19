const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    cotizador: 'mibanco_cotizador@http://localhost:4201/remoteEntry.js',
    catalogo: 'mibanco_catalogo@http://localhost:4202/remoteEntry.js',
  },
});