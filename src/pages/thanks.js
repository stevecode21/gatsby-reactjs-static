// Creamos un componente funcional
import React from 'react'
// Importamos con destructuring el componente que contiene toda mi configuración para SEO
import { SEO } from "../components"
// Importamos un par de styled components pre definidos
import { Button, Purchase } from '../styles/components'
// Importo mi componente Link propio de Gatsby para que se pueda redirigir hacia el home
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>¡Tu compra ha sido exitosa!</h2>
        <p>Disfruta tu swag, lucelo con orgullo</p>
        <p>Te esperamos de vuelta y recuerda: ¡nunca pares de aprender!</p>
        {/* Agrego un span tipo emoji para mostrar un emoji a mi usuario */}
        <span rol="img" aria-label="emoji">💚</span>
        {/* Aquí envuelvo un Button con mi componente Link */}
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
