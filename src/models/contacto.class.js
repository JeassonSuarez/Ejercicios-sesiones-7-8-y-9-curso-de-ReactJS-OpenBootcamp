export default class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;
    constructor(Nombre, Apellido, Email, Conectado) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.email = Email;
        this.conectado = Conectado;
    }
}