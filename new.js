class Person {
    constructor(firstName,lastName,salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}

function chargeBill(amount) {
    this.salary = this.salary - amount
    return this.salary
}

const heroPerson = new Person('santho', 'shek', 25000)
console.log(heroPerson);

const friendPerson = new Person('Abdullha', 'Naser', 30000)
console.log(friendPerson);

const heroPersonChargeBill = chargeBill.bind(heroPerson)
heroPersonChargeBill(1000)
console.log(heroPerson.salary);

const friendPersonChargeBill = chargeBill.call(friendPerson, 2000)
console.log(friendPerson.salary);