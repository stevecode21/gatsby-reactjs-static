// Será un componente funcional, usamos el hook useState
import React, { useState } from 'react'
// Importamos un componente estilado
import { SelectStars } from '../styles/components'
export default function Stars() {
  // Inicializamos mi state con un valor en 5
  const [stars, setStars] = useState(5)
  return (
    // Usamos mi componente estilado que envolverá todo, colocamos un prop selected con el valor de nuestro estado stars
    <SelectStars selected={stars}>
      {/* Creo una serie span que tendrán un onClick que ejecutará un metodo para cambiar el estado de la cantidad de estrellas */}
      <span onClick={() => setStars(1)}>★</span>
      <span onClick={() => setStars(2)}>★</span>
      <span onClick={() => setStars(3)}>★</span>
      <span onClick={() => setStars(4)}>★</span>
      <span onClick={() => setStars(5)}>★</span>
    </SelectStars>
  )
}
