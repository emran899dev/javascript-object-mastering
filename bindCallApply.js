const normalPerson = {
    firstName: 'Emran',
    lastName: 'Nazir',
    salary: 25000,
    fullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (chargeAmount, tax, tip) {
        this.salary = this.salary - chargeAmount - tax - tip
        return this.salary
    }

}
const normalPersonChargeBill = normalPerson.chargeBill(100,40,10)
console.log(normalPersonChargeBill);

const heroPerson = {
    firstName: 'Santho',
    lastName: 'Shek',
    salary: 30000
}

const friendPerson = {
    firstName: 'Shohidul',
    lastName: 'islam',
    salary: 27000
}

// // bind heroPerson to normalPerson

// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson)
// heroPersonChargeBill(1000)
// console.log(heroPerson);

// // bind heroPerson to friendPerson

// const friendPersonChargeBill = normalPerson.chargeBill.bind(friendPerson)
// friendPersonChargeBill(1000)
// console.log(friendPerson);


// // call heroPerson to normalPerson

// normalPerson.chargeBill.call(heroPerson, 1000, 100, 10)
// console.log(heroPerson);

// // call friendPerson to normalPerson

// normalPerson.chargeBill.call(friendPerson, 1000, 200, 30)
// console.log(friendPerson);

// apply heroPerson to normalPerson

normalPerson.chargeBill.apply(heroPerson, [900, 85, 15])
console.log(heroPerson);
normalPerson.chargeBill.apply(friendPerson, [500, 300, 60])
console.log(friendPerson);