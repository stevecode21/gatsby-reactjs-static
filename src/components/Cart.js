// Vamos a usar el hook de useEffect y de useState
import React, { useContext, useEffect, useState } from 'react'
// Importamos Link desde gatsby
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
// Importo el contexto
import { CartContext } from '../context'


export default function cart() {
  const { cart } = useContext(CartContext)
  // Definimos un estado para nuestro total de productos
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    setTotal(cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0))
  }

  // Creamos el useEffect para que cuando nuestro componente se renderice, se haga el cálculo de nuestro total
  useEffect(() => {
    // Ejecutamos nuestro método para calcular el total
    getTotal()
  }, [])

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
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
              <td>USD {priceFormat(swag.unit_amount)}</td>
              {/* Ponemos la cantidad */}
              <td>{swag.quantity}</td>
              {/* Aquí colocaremos el precio total del elemento en función de la cantidad */}
              <td>{priceFormat(swag.quantity * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          {/* Agregamos el total del precio formateado respectivamente */}
          <small>USD {priceFormat(total)}</small>
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
