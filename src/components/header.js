import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// Traigo estos styled components
import { MenuItem, StyledHeader } from '../styles/components'

const Header = () => (
  // Asignamos el StyledHeader que será nuestro header
  <StyledHeader>
    {/* Usamos un Link para que cuando sea seleccionado nuestro logo, se direccione al home */}
    <Link to="/">
      {/* El logo que mostraremos está alojado en el link indicado */}
      <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo de Platzi Swag" />
    </Link>
    {/* Creamos mi nav */}
    <nav>
      {/* Creamos una lista desordenada con los item del menu */}
      <ul>
        {/* A los MenuItems les agregamos un prop que afecta los estilos de estos, este se llama margin y lo colocaremos en los primeros 2 elementos */}
        <MenuItem margin>
          {/* Este contendrá un Link que nos lleve hacia la ruta raíz  */}
          <Link to="/">
            Productos
          </Link>
        </MenuItem>
        {/* A los MenuItems les agregamos un prop que afecta los estilos de estos, este se llama margin y lo colocaremos en los primeros 2 elementos */}
        <MenuItem margin>
          {/* Este contendrá un Anchor tag que nos lleve hacia la Platzi  */}
          <a href="https://platzi.com">Platzi</a>
        </MenuItem>
        <MenuItem>
          {/* Este contendrá un Link que nos lleve hacia el carrito de compras  */}
          <Link to="/cart">
            {/* Usamos un span par agregar el carrito de compras */}
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="Carrito de compras" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
