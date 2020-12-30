var person = {
    name: 'Nhang',
    age: 20,
    gender: 'male',
    add: 'danang',
    goschool: function() {
        return "PNV";
    }
}

var gen = 'gender';
person.fullname = 'Dang Van Nhang';

// truy xuat thuoc tinh cua object
document.getElementById('object').innerHTML = person.name + ' ' + person[gen] + "," + person.fullname;