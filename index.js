const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");
// remember to write a constructor function
//Here we take the blueprint(class) of a "person" and make an actual person(object) named Jimmy and 28 years old.
//We save the new person object Jimmy in the variable "jimmy".
let jimmy = new Contact("Jimmy", 28);

//Since we made the function "addPhone" in the "Person" class we can use it with the "jimmy" variable where the object is saved.
//This is because the actual person object Jimmy has all the stuff from the "person" blueprint(class) so it can use all those functions! 
//Here we use the function "addPhone" to add a phone number.
jimmy.addPhone("55551234");

//Here we use the function "call" because of the same reason as with "addPhone" function.
jimmy.call();
// should say "Calling Jimmy at 55551234..."

//Here we use the function "birthday" because of the same reason as with "addPhone" function.
jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

//Here we take the blueprint(class) of a "person" and make an actual person(object) named Jill.
//We save the new person object Jill in the variable "jill".
let jill = new Contact("Jill");

//Here we use the function "call" because of the same reason as with "addPhone" function.
jill.call();
// should say "Jill has no phone number saved."

console.log(JSON.stringify(jimmy));
console.log(jimmy instanceof Contact);

let contacts = new ContactList("contacts1.json");

contacts.addContact(jimmy);
contacts.addContact({name: "Jane"});
contacts.addContact(new Contact("Jane"));

console.log(contacts);

contacts.save()
.then(() => { console.log("Contacts written") })
.catch(console.log);

