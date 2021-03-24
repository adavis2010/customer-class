class Customer{

constructor (id, name, stateCode,sales ){
    this.id = id;
    this.name = name;
    this.stateCode = stateCode;
    this.sales = sales; ///setting properties of Customer class
}

subSales(sales){
   // this.sales -= sales;
    this.addSales(sales * -1);
}

addSales(sales){
    this.sales += sales; //will add sales to current sales (passing in new parameter)

}



print(){ // will print out instance of class
    return `${this.id} | ${this.name} | ${this.stateCode} | ${this.sales}`;
}



}

let cust1 = new Customer (1,"MAX","OH", 0.0); //create new instance of customer
cust1.addSales(100.00);
cust1.addSales(300.00);
cust1.addSales(50.00);
console.log(cust1.print());

let cust2 = new Customer (2, "P&G", "OH",100);
cust2.addSales(1000);
cust2.addSales(3200);
cust2.addSales(500);
cust2.subSales(500);
console.log(cust2.print());

