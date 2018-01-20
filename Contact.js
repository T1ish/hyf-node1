//Checking if we are getting connected with index.html
//console.log("index.js is loaded");

//We are making a class, think it as a blueprint of how a "person" should be
class Contact {
	// your code here
	//The constructor tells us what is in every new person we make
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function takes phoneNumber as argument which is then set to the phone number for the person by using "this"
	addPhone(phoneNumber){
		this.phoneNumber = phoneNumber;
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function doesn't take any arguments but it checks if the phone number for the "person" is empty or not and then console the proper message
	call(){
		if(!this.phoneNumber || this.phoneNumber === 0 || typeof this.phoneNumber === "undefined"){
			console.log(`${this.name} has no phone number saved.` );
		} else {
			console.log(`Calling ${this.name} at ${this.phoneNumber}...` );
		}
		
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function doesn't take any arguments but console logs the birthday message
	//Notice how we use ` - ticks and template literals instead of " - doublequotes and variables to make a clean message. :)
	birthday(){
		this.age += 1;
		console.log(`Whishing ${this.name} a happy ${this.age}th birthday!`);
	}
};


module.exports = Contact;