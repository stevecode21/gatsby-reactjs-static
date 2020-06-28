const React = require("react")
const Layout = require("./src/components/layout").default
const { GlobalStyles } = require('./src/styles')
// Importamos nuestro cart provider (nuestro componente proveedor) desde nuestro context
const { CartProvider } = require('./src/context')

// eslint-disable-next-line react/display-name
exports.wrapRootElement = ({ element }) => (
  // Envolvemos nuestra aplicación nen nuestro cartProvider
  <CartProvider>
    < GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)