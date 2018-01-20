const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class ContactList {
	constructor(filename){
		this.list = [];
		this.filename = filename;
	}

	addContact(contact){
		if(contact instanceof Contact){
			this.list.push(contact);
		}
	}

	save() {
		return writeFile(this.filename, JSON.stringify(this.list), "utf8");
	}
	 
	load(filename) {
		/*
		return new Promise((resolve, reject) => {
			fs.readFile(filename, "utf8", (err, data)=> {
				if (err){
					reject(err);
				}
				resolve(JSON.parse(data));
			});
		} ); 
		*/

		/*
		return new Promise((resolve, reject) => {
			fs.readFile(filename, "utf8", (err, data)=> {
				if (err){
					reject(err);
				} else {
					let test = JSON.parse(data);
					resolve(test);
				}
			});
			
		}); 
		*/


		
		return new Promise((resolve, reject) => {
			readFile(filename, "utf8", (err, data) => {
				if (err) throw err; 
				let clist = JSON.parse(data);
				console.log(clist);
				//console.log(clist[0]);
				//console.log(clist[1]);
				let tempContactList = new ContactList();
				for (let i = 0; i < clist.length; i++){
					console.log(clist[i]["name"]);
					//console.log(clist[i] instanceof Contact);
					//console.log(new Contact(clist[i]) instanceof Contact);
					let tempContact = new Contact(clist[i]["name"], clist[i]["age"]);
					if(clist[i]["phoneNumber"]){
						tempContact.addPhone(clist[i]["phoneNumber"]);
					}				

					tempContactList.addContact(tempContact);
				}
				console.log(tempContactList);
				resolve(tempContactList);
			});
		});
		



		//return readFile(filename, "utf8");
		
	}
};



module.exports = ContactList;

//Add a method called load in the ContactList class which reads the the json file and parses each record present 
//in it as a Contact instance. make sure you use the existing add method to add the contacts.