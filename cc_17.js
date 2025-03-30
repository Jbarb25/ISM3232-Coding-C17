//Task 1: Customer Class
class Customer{
    constructor(name, email){
        this.name = name;  //assign customer name
        this.email = email; //assign customer email
        this.purchaseHistory = []; //list of customer purchases
    }


//Method to add purchase amount to purchaseHistory
    addPurchase(amount){
        this.purchaseHistory.push(amount)
    }

//Method to return total amount spent
    //reduce will iterate through the array to pull the amount and add it to the total where the method will return the total amount 
    getTotalAmount(){
    const totalAmount = this.purchaseHistory.reduce((total, amount) => total + amount, 0)
    return totalAmount
    }
}

//Testing the class and methods
const customer = new Customer("John", "johnK@example.com");
customer.addPurchase(50);
customer.addPurchase(30);
customer.addPurchase(20);
const customer2 = new Customer("Abby", "abby3@example.com");
customer2.addPurchase(40);

//Log the total amount for the customer's purchase history 
console.log(customer.getTotalAmount())
console.log(customer2.getTotalAmount())


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
            return `Client Name: ${client.name}, Client Total: ${client.getTotalAmount()}`} //return the customer name and their total amount from customer class
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