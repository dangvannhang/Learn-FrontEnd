/******************** Array BASIC ******************** /

/*
1. Dinh nghia mang
2. Cu phap tong quat
3. Truy cap mang
4. Nhan dien mot bien co phai la mot mang hay khong?
*/

// ***Mang cung la mot doi tuong dac biet
/*
Khi nao dung mang va khi nao dung object?
* dung object khi ta muon mieu ta chi tiet mot vat nao do
* dung array khi ta muon mieu ta mot chuoi cac object co cung the loai hay chu de
*/

var object = {
    name: "object",
    age: "1000"
}
var array = [2, 4, 5, 3, 4, 54, 90];

array[1] = 0;


// document.getElementById('content__detail').innerHTML = Array.isArray(array); // kiem tra array co phai la mot Array

// document.getElementById('content__detail').innerHTML = object instanceof Array; // kiem tra object co phai la mot Array


/* **************** Array methods ************** */
/*
1. push(): them mot phan tu vao cuoi mang
2. pop(): xoa phan tu o cuoi mang
3. shift(): xoa mot phan tu o dau mang
4. unshift(): them mot phan tu o cuoi mang
5. splice(index, num, ...): xoa phan tu tu vi tri index voi num phan tu
6. slice(start, to): lay tu start +1 toi to
7. concat(): noi hai mang
8. join(delim): noi cac phan tu cua mang duoc phan tach boi delimited
9. toString(): tra ve danh sach mang cac phan tu mang o kieu string
*/

var friends = ['Duc', 'Viet', 'Huy', 'Khang', 'My', 'Duy', 'Tri', 'Chi'];
var fruits = ['oi', 'xoai', 'cam', 'nho'];
// friends.unshift('Nga'); //Them mot phan tu o dau mang
// friends.shift(); //xoa phan tu o dau mang

// friends.push('Cu li'); // them mot phan tu vao cuoi mang
// friends.pop(); // xoa phan tu o cuoi cung cua mang

/*
 Nếu như splice(num): Thì có nghĩa là sẽ xóa hết các phần tử từ phần tử thứ num đó về sau.
 Nếu như splice(i,num): Nghĩa là từ phần tử thứ i, xóa num phần tử
 Nếu như splice(i,num,...): nghĩa là từ phần tử thứ i, xóa num phần tử, và thêm ... phần tử vào.
*/
// friends.splice(3, 2, "Vy"); // Doc la tu vi tri 0, khong xoa phan tu nao va them phan tu i vao
// friends.splice(0, 3); // xoa tu phan tu thu 0 va xoa 3 phan tu
// friends.splice(1); // no se xoa phan tu tu vi tri thu i, cac phan tu ve truoc van con duoc giu lai

// var connect = friends.concat(fruits); // Noi hai mang lai thanh mot mang

// var cut = friends.slice(2, 4);

// var string = "Nhangdepchai"; // chúng ta có một mảng gồm n phần tử
// var cut = string.slice(0, 5); // slice(from, to): nó sẽ lấy từ phần tử thứ hai đến hết phần tử thứ 5

// var newArray = friends.join('+'); // tai day co nghia la se noi cac phan tu cua mang lai va o giua co mot dau +

var newArray = friends.toString();


// document.getElementById('content__size').innerHTML = friends.length;
// document.getElementById('content__detail').innerHTML = "Mang hien tai: " + newArray;

// console.log(typeof newArray);