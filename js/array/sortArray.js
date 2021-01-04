/**********    *************** 
1. sort(): sap xep tu nho den lon
2. reverse(): dao nguoc thu tu cua phan tu mang
3. Math.max.apply(null,array): tim gia tri lon nhat trong mang
4. Math.min.apply(null,array): tim gia tri nho nhat trong mang

*/

var mathArray = [4, 5, 34, -1, 33, 99];
var fruit = ['xoai', 'oi', 'cam', 'quyt'];


// document.getElementById('content__detail').innerHTML = mathArray.sort();
/*
 Mặc định hàm sort() sẽ so sánh theo kiểu string nên đó nó sẽ hiển thị kết quả là 1,33,34,4,5,90
*/
// mathArray.reverse(mathArray); // dao nguoc vi tri cac phan tu cua mang

// function compareFunction(a, b) {
//     return a - b; // đây là sẽ return a lớn hơn b,  // day se in ra mang tang dan
// }
// document.getElementById('content__detail').innerHTML = mathArray.sort(compareFunction);

// Ở đây tại sao lại có hàm compareFunction(a,b) la no se so sanh hai so a va b nếu a lớn hơn b thì ok, ngược lại thì nó sẽ đổi vị trí của a vs b

// let max = Math.max.apply(null, mathArray); // Ham nay se giup chung ta tim phan tu lon nhat trong mang.
// document.write(max);

// let min = Math.min.apply(null, mathArray); // Ham nay se giup chung ta tim phan tu nho nhat cua mang
// document.write(min);


// array object
var person = [{
        name: 'van nhang',
        age: 20
    },
    {
        name: 'quoc viet',
        age: 20
    },
    {
        name: 'tri tran',
        age: 22
    },
    {
        name: 'men nguyen',
        age: 21
    },
    {
        name: 'a',
        age: 22
    }
];

// person.sort(
//     function(a, b) {
//         return a.age - b.age; // day cung giong nhu sap xep mot mang, nhung day la mang cac doi tuong
//     }
// );

person.sort(
    function(a, b) {
        var n1 = a.name.toLowerCase();
        var n2 = b.name.toLowerCase();

        if (n1 < n2) {
            return -1; // o day chung ta muon la ket qua tu a-> z thi khi
        }
        if (n1 > n2) {
            return 1;
        }

        return 0;
    }
);

//document.write(person[0].name);