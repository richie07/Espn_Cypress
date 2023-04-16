class User_BD {
    constructor() {
      const randomNumber = Math.floor(Math.random() * 100000 + 1);
      this.firstname = "Francisco";
      this.lastName = "Pinedo";
      this.email = `${randomNumber}test1@dfhmail.cm`;
      this.password = "Lima2023";
    }
  
    getFirstName() {
      return this.firstname;
    }
  
    getLastName() {
      return this.lastName;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPassword() {
      return this.password;
    }
  }
  export default User_BD