// Importamos el hook useContext para hacer uso del contexto
import React, { useState, useContext } from 'react'
// Impirtamos cart Cotnext de nuestro contexto creado
import { CartContext } from '../context'
import priceFormat from '../utils/priceFormat'
import { Tag, SizeButton, QtyButton, SizeSelect, Button, StyledProductDetail, QtySelect } from '../styles/components'
import { SEO, Stars } from './'

export default function ProductDetail({ unit_amount, id, product: { name, metadata } }) {
  const formatePrice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  // Hacemos destructuring obteniendo el método addToCart
  const { addToCart } = useContext(CartContext)

  // Definimos un método que nos ayude a agregar elementos al carrito
  const handleSubmit = () => {
    // Aquí llamamos nuestro método addToCart y le enviamos lo que debe añadir
    addToCart({ unit_amount, sku: id, name, metadata, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      {/* eslint-disable-next-line react/prop-types */}
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatePrice}</b>
        <Stars />
        {metadata.wear && <h3>{metadata.color}</h3>}
        <small>{metadata.description}</small>
        {/* eslint-disable-next-line react/prop-types */}
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        {/* Añadimos un evento onClick para agregar al carrito el producto */}
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
