export class UserModel {
    public nombre: string;
    public apellido: string;
    public email: string;
    public password: string;

    constructor(
      nombre: string,
      apellido: string,
      email: string,
      password: string,
    ) {
      this.nombre = nombre;
      this.email = email;
      this.apellido = apellido;
      this.password = password;
  
    }
  }