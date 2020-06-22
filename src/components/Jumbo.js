// Creamos un componente funcional
import React from 'react'
// Importamos una pieza de estilos predefinidos al inicio del curso para aplicar a este componente, importamos el styled component que se llama StyledJumbo
import { StyledJumbo } from '../styles/components'

export default function Jumbo() {
  return (
    // Usamos aquí nuestro componente importado
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y especial de Platzi!</h2>
      </div>
      <small>Piezas elegantes para los mejores estudiantes</small>
    </StyledJumbo>
  )
}
