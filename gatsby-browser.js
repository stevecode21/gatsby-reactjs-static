// Como estamos usando Node, usamos common js para traer la librería de React
const React = require("react")
// También traigo mi Layout, tiene una particularidad, y es que no puedo utilizar el archivo index que he usado durante todo el proyecto por lo cual me voy al componente como tal y que sea por defecto (default)
const Layout = require("./src/components/layout").default

// Su función será todo lo que yo coloque en este elemento va a encerrar a los elementos o páginas que se generen en mi proyecto, este elemento de la API va a englobar a dicho elemento con lo que sea que yo ponga a su al rededor, en este caso yo quiero que el elemento comun de todas mis páginas sea el Layout  
// wrapRootElement es una función que toma como argumento una serie de elementos, el que nos interesa es element de manera destructurado y usamos un arrow function devolviendo mi Layout englobando a lo que sea que devuelva Gatsby, en este caso a cada una de mis páginas (Element)

// eslint-disable-next-line react/display-name
exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>