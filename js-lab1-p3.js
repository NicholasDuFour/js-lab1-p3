"use strict";
{ /*Start of code block*/

/*AddressBook class*/

class AddressBook {
  constructor(){
    this.contacts = [];
  }

  /*methods*/

  add(info){
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
    console.log(this.contacts);

    // makes new contact object, places in addressBook, pushes it to contacts
  }

  deleteAt(index){
    this.contacts.splice(index, 1);

  }

  print(){
    console.log(this.contacts);
  }
} /*end of addressBook class*/

/*Contact class*/

class Contact {
  constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
/*assigning new instance of AddressBook as variable addressBook*/
let addressBook = new AddressBook();

/*while loop containing prompts*/

while (true) {
 let p = prompt("Would you like to add (a), delete (d), print (p), or quit (q)?");
 if (p === "add" || p === "a") {
   const info = {
     name: prompt("What is their name?"),
     email: prompt("What is their email?"),
     phone: prompt("What is their phone number?"),
     relation: prompt("What is their relation to you?")
   };

  addressBook.add(info);

} else if (p === "delete" || p === "d") {
  let delp = prompt("Which would you like to delete?");
  addressBook.deleteAt(delp);

} else if (p === "print" || p === "p") {
  addressBook.print();
} else if (p === "quit" || p === "q") {
  console.log("You selected quit.");
  break;
} else {
  console.log("Please choose an option");
}

} /*end of while loop*/


} /*End of code block*/
