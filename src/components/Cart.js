import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'


export default function cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  // Creamos un nuevo estado para llevar a cabo el pago con Stripe
  const [stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0))
  }

  useEffect(() => {
    // En nuestro useEffect usaremos la ejecución de nuestro setStripe, para poder acceder una vez que el componente está cargado, a la ventana de pago de stripe
    setStripe(
      // Aquí le enviamos a nuestro state la ventana de pago de Stripe usando nuestra PublicKey previamente configurada
      window.Stripe(process.env.STRIPE_PK)
    )
    getTotal()
  }, [])

  // Queremos que nuestro botón "Ir al pago", tenga la capacidad de poder enviarnos a la ventana de pago de Stripe, por lo cual creamos este método, el cual será asíncrono y toma un evento (el de onClick)
  const handleSubmit = async e => {
    // Prevenimos las cargar al pasar el evento
    e.preventDefault()

    // Destructuramos un error si es que existe de la llamada de Stripe, esperamos que Stripe en su método redirectToCheckout nos devuelva o no lo que necesitamos
    const { error } = await stripe.redirectToCheckout({
      // redirectToCheckout necesita una configuración con los items que vamos a comprar
      // En este caso mapeamos cart y obtenemos el sku y la cantidad y devolvemos estos elementos al mapeo
      lineItems: cart.map(({ sku, quantity }) => ({ price: sku, quantity })),
      // Agregamos el modo tipo payment
      mode: "payment",
      // También requerimos el redireccionamiento en caso de que sea exitosa la compra
      successUrl: process.env.SUCCESS_REDIRECT,
      // También requerimos el redireccionamiento en caso de que sea cancelada la compra
      cancelUrl: process.env.CANCEL_REDIRECT
    })

    // Si existe algún tipo de error
    if (error) {
      // Ejecutamos el error
      throw error
    }
  }
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
          {cart.map(swag => (
            <tr key={swag.id}>
              <td><img src={swag.metadata.img} alt={swag.name} /> {swag.name}</td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <Button type="outline">Volver</Button>
          </Link>
          {/* Agregamos el evento onClick para la ejecución del método que lleva a la ventana de Stripe */}
          {/* Adicionalmente y muy importante, es que debemos hacer la validación para que la gente no compre si el carrito está vacio */}
          <Button onClick={handleSubmit} disabled={cart.length === 0}>Ir al pago</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
