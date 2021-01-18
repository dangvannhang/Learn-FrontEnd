## install vuejs
- npm install -g @vue/cli
- vue create my-app
- npm run serve

## cau truc thu muc
- src: source code
  + main.js => file goc
  + App.vue => component goc
  + assets: thu muc chua cac hinh anh, font chu
  + components: chua cac component con
 ## Cac phan trong vuejs
1. Component:
  - Gom co 3 thanh phan
    + template: html => hien thi
    + script: js => xu li
    + style: css => lam dep
      * ho tro scss
      * scoped style: style danh rieng cho component
  - Tao mot component
    + tao file .vue
    + Import 
    + Khai bao
  - Root element:
    + bat buoc

2. 2 ways binding:
  - Bind du lieu 2 chieu
  - Phu thuoc vao kieu du lieu cua element

3. Cac gia tri cua vue co the co trong element
  - v-show: giong nhu la display: block
  - v-model: gan gia tri cho element

4. Life cycle of components
  - 

5. Hook: 
  - la nhung cai ham duoc gan vao nhung thoi diem nhat dinh cua life cycle

6. Binding: 
  - Value binding: {{}}
  - property binding: 
    + v-bind:property = "value" // cho ma property thi chung ta co the de ten bat ki gi cung duoc, no van hien ra ket qua.
    + co the viet tat la :property="value"
  - style and class binding:
7. Model
  - Liên kết giữa một element và một biến
  - v-model="variable"

8. Event handle
  - bat su kien tu cac element tren html
  - v-on:[ten su kien]="";
    + v-on:click="";
    + v-on:mouseover
      * chung ta co the viet tat thanh @click="";
  - Prevent default event
    + huy bo event mac dinh cua element di
  - debounce: no se dung mot thoi gian roi moi lam

9. ref:
  - Ánh xạ đến chính element
  - <hh11 ref="h1">Hello</h11>
  - this.$refs.h1

10. Conditional rendering
  - v-show: hien 1 element theo dieu kien
  - v-hide: thi no nguoc lai v-show thoi
  - v-if: an/hien element theo dieu kien
    + Sự khác nhau ở đây là v-show là sẽ cho cái element đó display:none
    + Còn cái v-if là sẽ cho cái element đó biến mất luôn
    + v-else-if
    + v-else

11. List rendering
  - v-for
  
12. Methods
  - Ham cua vue object

13. watch
  - theo doi su thay doi cua data

14. Hooks:
  - mounted


15. components
  - 

16. Props
  - day du lieu tu component cha => sang component con
  - Lam sao khai bao cai object cua cha sang con
    + dung mang ten cac props
    + 