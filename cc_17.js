//Task 1: Customer Class
class Customer{
    constructor(name, email, vipLevel){
        this.name = name;  //assign customer name
        this.email = email; //assign customer email
        this.purchaseHistory = []; //list of customer purchases

        //Task 3:
        this.vipLevel = vipLevel //assign customer vip level
    }


//Method to add purchase amount to purchaseHistory
    addPurchase(amount){
        this.purchaseHistory.push(amount)
    }

//Method to return total amount spent
    //reduce will iterate through the array to pull the amount and add it to the total where the method will return the total amount 
    getTotalSpent(){
    const totalAmount = this.purchaseHistory.reduce((total, amount) => total + amount, 0)
    return totalAmount
    }

}

//Task 3: Extend Customer Class for VIPCustomer
class VIPCustomer extends Customer{
    constructor(name, email, vipLevel){
        super(name, email, vipLevel);  //assign the vipLevel of the customer
    }

    getTotalSpent(){ //override the method from Customer class
        let totalAmount = super.getTotalSpent(); //pull the totalAmount from the customer class
        if (this.vipLevel === 'Gold'){  //if the customer is a gold vip level 
            totalAmount += totalAmount*0.10;
        return totalAmount} //add a 10% bonus and return the total
        else if (this.vipLevel === 'Platinum'){ //if the customer is a platinum vip level
            totalAmount += totalAmount*0.10
        return totalAmount} //add a 10% bonus and return the total 
    }
}


//Testing the class and methods
const customer = new Customer("John", "johnK@example.com");
customer.addPurchase(50);
customer.addPurchase(30);
customer.addPurchase(20);
const customer2 = new VIPCustomer("Abby", "abby3@example.com", "Gold");
customer2.addPurchase(40);

//Log the total amount for the customer's purchase history 
console.log(customer.getTotalSpent())
console.log(customer2.getTotalSpent())


//Task 2: Sales Rep Class
class SalesRep{
    constructor(name){
        this.name = name; //assign sales rep name
        this.clients = []; //list of sales rep clients
    }

    //Method to add client/customer to the list
    addClient(customer){
        this.clients.push(customer)
    }

    //Method to find client by name and return total spent
    getClientTotal(name){   
        const client = this.clients.find(client => client.name === name);  //find the client name associated with this.namen in customer class
        if (client){  //if the client is found as a customer
            return `Client Name: ${client.name}, Client Total: ${client.getTotalSpent()}`} //return the customer name and their total amount from customer class
        else {
            return `Client ${name} not found.`} //if not then alert not found
    }
}

//Test and log the new sales rep addition and their client with their total
const salesRep = new SalesRep("Emma")
salesRep.addClient(customer)
salesRep.addClient(customer2)
console.log(salesRep.getClientTotal("John"))
console.log(salesRep.getClientTotal("Abby"))


//Task 3: Create a VIPCustomer Class (extends Customer)
    //refer back to task 1 for extention 