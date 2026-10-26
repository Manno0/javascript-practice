/**
 * Title: JavaScript Algorithm Lab: Profile Lookup
 * Description: Implements a function to search through a contacts list array, matching a contact's name and returning a specific property value, with error handling for missing contacts or properties.
 * 
 * User Stories & Requirements:
 * 1. lookUpProfile(name, prop): A function that takes a name and property as arguments.
 * 2. Retrieves contact information from the provided contacts array.
 * 3. Returns the property's value if both the contact name and property exist.
 * 4. Returns "No such contact" if the name does not match any contacts in the array.
 * 5. Returns "No such property" if the contact is found but the property does not exist.
 */

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property){

  for (let contact of contacts){
    if (contact.firstName === name){
      return contact.hasOwnProperty(property)? contact[property] : "No such property"
    }
  }
  return "No such contact";
}
