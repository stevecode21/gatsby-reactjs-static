// Declaro un componente funcional
import React from 'react'
// Importo el Link de Gatsby
import { Link } from 'gatsby'
// Importo también el price format de utils para poder formatear el precio
import formatprice from '../utils/priceFormat'
// Importamos unos componentes estilados
import { StyledProducts } from '../styles/components'


// Haciendo destructuring recibo por props los productos
export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {/* Aqui lo que hago es hacer un map para mostrar cada uno de los productos que recibo por las props, este map va a tomar en node de mi query y voy a devolver un bloque de código */}
        {products.map(({ node }) => {
          // Aquí convierto el precio con mi función price format a la cual le digo que me formateo el precio de cada uno de los productos que devuelve mi query de GraphQL
          const price = formatprice(node.unit_amount)
          // Ahora retorno un article con buenas practicas por el key
          return (
            <article key={node.id}>
              {/* Colocamos la imagen que viene desde el query y el alt con el respectivo nombre */}
              <img src={node.product.metadata.img} alt={node.product.name} loading="eager" />
              {/* Colocamos el nombre de mi producto */}
              <p>{node.product.name}</p>
              {/* Colcamos el price de mi producto */}
              <small>USD {price}</small>
              {/* Agrego un botón para comprar, el cual tendrá redirect a la pagina de cada uno de los productos  */}
              <Link to={`/${node.id}`}>
                Comprar ahora <span>👉</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
