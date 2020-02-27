class User {
    constructor() {
        this.email = "Ichigo";
        this.password = "123";
        this.admin = false;
    }

    isAdmin() {
        return this.admin ? true : false; 
    }
}

class Admin extends User {
    constructor() {
        super();

        this.admin = true;
    }
}

const user =  new User('email@user.com', '123');
const admin =  new Admin('email@admin.com', '123');

console.log(user.isAdmin());
console.log(admin.isAdmin());