const React = require("react")
const Layout = require("./src/components/layout").default
// Importo mis estilos globales
const { GlobalStyles } = require('./src/styles')


// eslint-disable-next-line react/display-name
exports.wrapRootElement = ({ element }) => (
  // Usaré un fragment
  <>
    {/* Aquí llamo al componente que tiene los etilos globales */}
    < GlobalStyles />
    <Layout>{element}</Layout>
  </>
)