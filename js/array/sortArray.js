/**********    *************** 
1. sort(): sap xep tu nho den lon
2. reverse(): dao nguoc thu tu cua phan tu mang
3. Math.max.apply(null,array): tim gia tri lon nhat trong mang
4. Math.min.apply(null,array): tim gia tri nho nhat trong mang

*/

var mathArray = [4, 5, 34, 1, 33, 90];

// document.getElementById('content__detail').innerHTML = mathArray.sort();
/*
 Mặc định hàm sort() sẽ so sánh theo kiểu string nên đó nó sẽ hiển thị kết quả là 1,33,34,4,5,90
*/


/*
function compareFunction(a, b) {
    return a - b;
}
document.getElementById('content__detail').innerHTML = mathArray.sort(compareFunction);
*/
// Ở đây tại sao lại có hàm compareFunction(a,b) la no se so sanh