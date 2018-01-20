const ContactList = require("./ContactList.js");


let getContactsFromFile =  new ContactList("contacts12.json").load("contacts1.json")
.then((contactList) => {console.log("Contacts loaded");
			//console.log(contactList);
			for (let i = 0; i < contactList["list"].length; i++){
				console.log(contactList["list"][i].call());
				console.log(contactList["list"][i].birthday());
			}
			
		})
.catch(console.log);


