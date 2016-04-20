//simpler code that doesn't include quantities of the items

var cashRegister = {
    total: 0,
    add: function(itemCost){
        this.total += itemCost;
    },
};
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        case "magazine":
            this.add(4.99);
            break;
        
        case "chocolate":
            this.add(0.45);
            
        
        
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan(eggs);
cashRegister.scan(eggs);
cashRegister.scan(magazine);
cashRegister.scan(magazine);
cashRegister.scan(magazine);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

//now let's include quantities

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,quantity) {
        this.quantity = quantity;
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
