// Importo react e importo el context api y el hook de state
import React, { createContext, useState } from 'react'

// Creamos una constante para crear el contexto, esta variable guardará el contexto, la exportamos
export const CartContext = createContext()
// Creamos y exportamos un componente que va a recibir a children por props
// En este caso este compoennte va a servir como mi proveedor del contexto y lo que vamos a encerrar dentro cartProvider es todo el contenido de mi app
export const CartProvider = ({ children }) => {
  // La información que voy a mandar va a estar alojada en un estado, así que lo definimos
  const [cart, setCart] = useState([])
  /* Esta es la función que nos va a ayudar a agregar el elemento a nuestro carrito de compras */
  // Defino una función que va a tomar un elemento
  const addToCart = element => {
    // Lo que va a hacer es retornar la ejecución del cambio de estado con el valor de lo que sea que contiene el carrito actualmente y el elemento nuevo
    setCart([...cart, element])
  }

  // retornamos un provider del contexto, dentro de este proveedor colocaremos un prop vlaue, que es "de qué información voy a proveer a mi aplicación, qué es lo que le voy a mandar "
  return (
    <CartContext.Provider value={{
      // Añadimos la propiedad y el método que quiero proveer a toda mi app
      cart,
      addToCart
    }}>
      {/* Encerramos en este componente provider el prop children */}
      {children}
    </CartContext.Provider>
  )
}