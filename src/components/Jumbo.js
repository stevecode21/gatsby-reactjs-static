import React from 'react'
import { StyledJumbo } from '../styles/components'
// Importo el componente Image
import { Image } from './'

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y especial de Platzi!</h2>
      </div>
      <small>{description}</small>
      {/* Aquí uso mi componente y le envío como prop un nombre, en este caso icon */}
      <Image name='icon' />
    </StyledJumbo>
  )
}
