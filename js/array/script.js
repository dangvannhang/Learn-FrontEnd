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