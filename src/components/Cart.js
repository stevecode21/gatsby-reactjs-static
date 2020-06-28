// Traemos nuestro hook useContext para usar mi contexto
import React, { useContext } from 'react'
// Importamos Link desde gatsby
import { Link } from 'gatsby'
// Importamos algunos componentes estilados
import { Button, StyledCart } from '../styles/components'
// Importamos también nuestra herramienta de formateo de precios
import priceFormat from '../utils/priceFormat'
// Importo el contexto
import { CartContext } from '../context'
export default function cart() {
  // Lo que necesitamos de nuestro contexto es traer a cart 
  const { cart } = useContext(CartContext)
  return (
    // Retornamos nuestro código envuelto en el styled-component
    <StyledCart>
      <h2>Carrito de compras</h2>
      {/* Creamos una tabla para mostrar la información de las compras */}
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {/* Mapeamos nuestro state cart y tomará swag como cada una de las piezas a comprar */}
          {cart.map(swag => (
            // Creamos un table row por cada elemento, le agregamos un key que será igual al swag
            <tr key={swag.id}>
              {/* Colocamos la imagen y el nombre de swag */}
              <td><img src={swag.metadata.img} alt={swag.name} /> {swag.name}</td>
              {/* mostramos nuestro precio formateado */}
              <td>USD {priceFormat(swag.price)}</td>
              {/* Ponemos la cantidad */}
              <td>{swag.quantity}</td>
              {/* Aquí colocaremos el precio total del elemento en función de la cantidad */}
              <td>{priceFormat(swag.quantity * swag.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>Total</small>
        </div>
        <div>
          {/* Redirigimos con un Link hacia el home */}
          <Link to='/'>
            {/* Agregamos nuestro botón estilado */}
            <Button type="outline">Volver</Button>
          </Link>
          <Button>Ir al pago</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
