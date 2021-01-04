// ------------------------ Cac phuong thuc lap tren mang-------------------------------------------

var friends = [{
        name: 'Van Nhang',
        age: 20
    },
    {
        name: 'Tri Tran',
        age: 22
    },
    {
        name: 'Huu Duc',
        age: 20
    }
];


var names = "";
friends.forEach(getName);

function getName(value, index, arr) {
    names += value.name + "<br>";
}
document.getElementById('friends').innerHTML = names;