var person = {
    fistName: 'Nhang',
    lastName: 'Dang Van',
    age: 20,
    gender: 'male',
    add: 'danang',
    goschool: function() {
        return "PNV";
    },
    fullName: function() {
        return this.fistName + " " + this.lastName;
    }


}

// gan mot key cua object va sau do goi object[bien]
var gen = 'gender';
person.girlFriends = 'A lot of';

// truy xuat thuoc tinh cua object
document.getElementById('object').innerHTML = person.fullName() + " " + person[gen];


// add method for object

person.walk = function() {
    return "Walk step by step.";
}

document.getElementById('addMethod').innerHTML = person.walk();