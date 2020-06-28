// Traemos desde react el hook llamado useContext para usar el contexto
import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuItem, StyledHeader } from '../styles/components'
// Importamos desde context, 
import { CartContext } from '../context'
const Header = () => {
  // Aquí usaremos nuestro useContext, destructuramos cart del contexto, useContext recibe el contexto que queremos usar (CartContext)
  const { cart } = useContext(CartContext)
  // Retornaremos toda nuestra nav
  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo de Platzi Swag" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">
              Productos
          </Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://platzi.com">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="Carrito de compras" />
                {/* Usamos el contexto, mostramos la cantidad de datos en el state cart  */}
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
