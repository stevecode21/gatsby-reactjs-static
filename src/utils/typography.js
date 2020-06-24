// Importo mi librería
import Typography from 'typography'

// Defino una constante que va a almacenar mi configuración y es una nueva instancia de mi librería
const typography = new Typography({
  // Voy a configurar el tamaño de fuente base
  baseFontSize: '18px',
  // Configura el line height
  baseLineHeight: 1.666,
  // Esta propiedad me va a ayudar a llevar ese tipo de fuente a mis títulos; esta propiedad necesita un arreglo con las fuentes que yo necesito
  headerFontFamily: [
    'Lato',
    'Helvetica Neue',
    'Arial'
  ],
  // Configuramos las fuentes del cuerpo de nuestra página
  bodyFontFamily: [
    'Open Sans',
    'Roboto',
    'Gergia'
  ]
})

// Exportamos nuestra configuración
export default typography