// tao object thong qua constructor

var a = new Number('234555');

var person = {
    firstName: 'Nhang',
    lastName: 'Dang Van',
    age: 20,
    fullName: function() {
        return this.firstName + this.lastName;
    }
}

// Mot constructor // co the tao ra n object theo y cua chung ta
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + this.lastName;
    }
}

var p1 = new Person('Nhang', 'Dang', 20);
var p2 = new Person('Viet', 'Tran', 20);
// them moi tinh chat cho mot object
p1.address = "Ha noi";

// them mot method cho mot object

p1.eat = function() {
    return "Sot sot";
}

document.getElementById('content').innerHTML = p2.eat;