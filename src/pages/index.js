import React from "react"
import { Link } from "gatsby"
// Importo mi componente Jumbo 
import { Jumbo } from '../components'
import { SEO } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* Uso aquí mi componente Jumbo, este no recibe ninguna propiedad */}
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks">Go to thanks</Link>
    <br />
    <Link to="/cancelation">Go to cancelation</Link>
  </>
)

export default IndexPage
