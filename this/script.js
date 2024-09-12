const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.name + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName());