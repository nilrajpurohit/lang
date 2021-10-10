//Inheritance is an OOPS concept which use for add the more functionality in class by including other class..

class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    getInfo(){
        return {name : this.name,
                email: this.email};
    }

    login(){
        return `You are logged in as a User`;
    }
}
//Creating a new class and in that adding the same properties and method of extends class for more functionality..
//Inheriteing a class by extends keyword..
class SubAdmin extends User{
    getSubAdminLogin(){
        return `You are logged in as Subadmin`;
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminLogin(){
        return `You are logged in as Admin`;
    }
}


//Creating object..

var xyz = new SubAdmin();
console.log(xyz.getSubAdminLogin());
console.log(xyz.login());
//xyz.getInfo() method returning a name and email but as a undefined..
//because the super constructor is not invoke under the subadmin class which can intialize the name and email..
//for super constructor look at the Admin class..(Super constructor is known as parent class constructor)
console.log(xyz.getInfo());

var nil = new Admin("Nil Rajpurohit","Nil@Rajpuorhit.com");
console.log(nil.login());
console.log(nil.getAdminLogin());
//In this getInfo() return name and email because the super constructor is define under the Admin class. (child class have an parent class constructor)...
console.log(nil.getInfo());

