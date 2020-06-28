// Será un componente funcional
// Usaremos un Hook para lograr hacer la seleccion de la prenda usando mi state
import React, { useState } from 'react'
// Importo nuestro utilidad para convertir los precios
import priceFormat from '../utils/priceFormat'
// Traigo varios componentes estilados de mi carpeta styles
import { Tag, SizeButton, QtyButton, SizeSelect, Button, StyledProductDetail, QtySelect } from '../styles/components'
//Voy a importar el SEO ya que quiero que mi sitio tenga todas las mejoras de SSR
import { SEO } from './'

// Este componente recibirá una serie de props (precio, id (renombrado como sku), nombre, metadata (Que vienen de product))
export default function ProductDetail({ unit_amount, sku: id, product: { name, metadata } }) {
  // Definimos una nueva constante para formatear el precio
  const formatePrice = priceFormat(unit_amount)
  // Defino un estado para administrar la selección de tamaños, lo inicializo en 2
  const [size, setSize] = useState(2)
  // Crearé otro estado para administrar la cantidad de productos que se comprarán y siempre inicializado en 1, que es el mínimo de elementos que se pueden comprar
  const [qty, setQty] = useState(1)
  return (
    // En lugar del div usaré mi componente estilado
    <StyledProductDetail>
      {/* Colo un componente SEO con un title que será el nombre que viene en la prop */}
      <SEO title={name} />
      {/* También tendremos una imagen que vendrá desde nuestra query */}
      {/* eslint-disable-next-line react/prop-types */}
      <img src={metadata.img} alt={name} />
      <div>
        {/* Colocamos nuestro Tag que viene desde nuestros styled-components */}
        <Tag>Popular</Tag>
        {/* Ponemos un h2 que va a servidor para titulo denuestro producto */}
        <h2>{name}</h2>
        {/* Colocamos el precio formateado */}
        <b>USD {formatePrice}</b>
        {/* Usaré un render condicional, si yo sé que voy a obtener de la metadata una prenda (wear), voy a colocar el componente SizeSelect, que nos va a permitir seleccionar el tamaño de nuestra prenda con un prop selected que es igual, a mi state size*/}
        {metadata.wear && (
          <SizeSelect selected={size}>
            {/* Este componente va a necesitar, 4 sizebutton para escoger el tamaño de prenda*/}
            {/* Creo un evento onClick para modiciar el estado del tamaño, cada uno con su respectivo número  */}
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        {/* Colocamos nuestra cantidad en un parrafo */}
        <p>Cantidad:</p>
        {/* Colocamos nuestro styled-component QtySelected */}
        <QtySelect>
          {/* Creo un evento onClick dentro de mi botón, para ejecutar un método*/}
          {/* Si la cantitdad (qty) es mayor a 1, entonces puedo ejecutar setQty, con qty-1, o de lo contrario devuelvo null*/}
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          {/* Coloco un input de titpo text, desactivado y teniendo como valor la cantidad del producto seleccionada */}
          <input type="text" disabled value={qty} />
          {/* Añado otro botón para agregar más cantidad de elementos, agregando un evento un click que actualice la cantidad de mi state */}
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}
