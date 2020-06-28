import React, { useState } from 'react'
import priceFormat from '../utils/priceFormat'
import { Tag, SizeButton, QtyButton, SizeSelect, Button, StyledProductDetail, QtySelect } from '../styles/components'
// Importo mi componente Stars
import { SEO, Stars } from './'

export default function ProductDetail({ unit_amount, sku: id, product: { name, metadata } }) {
  const formatePrice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      {/* eslint-disable-next-line react/prop-types */}
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatePrice}</b>
        {/* Colocamos el componente para las estrellas y el color de la prenda */}
        <Stars />
        {/* Uso el prop wear, ya que si es una prenda, es necesario mostrar el color de la prenda */}
        {metadata.wear && <h3>{metadata.color}</h3>}
        {/* Añadimos una etiqueta small donde mostramos la descripción del producto*/}
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
        {/* Agregamos nuetro botón estilado */}
        <Button>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
