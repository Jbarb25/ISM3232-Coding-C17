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

//Log the total amount for the customer's purchase history 
console.log(customer.getTotalAmount())