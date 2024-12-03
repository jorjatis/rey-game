const fs = require('fs');
const path = require('path');

/**
 * Genera cacheGroups para dividir estilos SCSS en chunks individuales.
 * Lee los archivos en la carpeta `src/assets/styles/chunks` y crea un grupo para cada uno.
 * 
 * @param {Object} options Opciones adicionales para configurar el comportamiento.
 * @param {string} options.directory Directorio base donde buscar los chunks SCSS.
 * @param {string[]} [options.extensions=['scss']] Extensiones de los archivos a incluir.
 * @returns {Object} cacheGroups configurado para Webpack
 */
function mapFilenamesToCacheGroups(options = {}) {
  const {
    directory = path.join(__dirname, 'src', 'assets', 'styles', 'chunks'),
    extensions = ['scss'],
  } = options;

  try {
    // Leer archivos en el directorio especificado
    const files = fs.readdirSync(directory)
      .filter(file => extensions.some(ext => file.endsWith(`.${ext}`)));

    // Generar cacheGroups basados en los archivos encontrados
    return files.reduce((cacheGroups, file) => {
      const name = path.basename(file, path.extname(file)); // Obtener nombre sin extensión
      const test = new RegExp(`${name}\\.${extensions.join('|')}$`); // Crear un regex para el test

      return {
        ...cacheGroups,
        [name]: {
          name, // Nombre del chunk
          test, // Patrón para identificar el archivo
          type: 'css/mini-extract', // Tipo: mini-css-extract-plugin
          chunks: 'all', // Incluye todos los chunks
          enforce: true, // Asegura que siempre se genere el chunk
        },
      };
    }, {});
  } catch (error) {
    console.error('Error al generar cacheGroups:', error.message);
    return {}; // Retornar un objeto vacío en caso de error
  }
}

module.exports = mapFilenamesToCacheGroups;
