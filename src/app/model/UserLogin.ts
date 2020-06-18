export class UserLogin {
    public email: string;
    public token: string;
    public password: string;

    constructor(
      token: string,
      email: string,
      password: string,
    ) {
 
      this.email = email;
      this.token = token;
      this.password = password;
  
    }
  }