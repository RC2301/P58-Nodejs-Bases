let opciones = {
    base: {
        demand: true, // indica si será obligatorio
        alias: 'b', //valor que se utilizará en consola
        desc: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l', //valor que se utilizará en consola
        default: 10, // valor por defecto
        desc: 'Limite de la tabla de multiplicar'
    }

}

// Establece la descripcion del comando que se tendrá que ejecutar a nivel de linea de consola
const argv = require('yargs')
    // Establece la descripcion del comando que se tendrá que ejecutar a nivel de linea de consola
    .command('crear', 'crea un archivo con la tabla de multiplicar', opciones)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}