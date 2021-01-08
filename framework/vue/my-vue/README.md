## install vuejs
- npm install -g @vue/cli
- vue create my-app
- npm run serve

### cau truc thu muc
- src: source code
  + main.js => file goc
  + App.vue => component goc
  + assets: thu muc chua cac hinh anh, font chu
  + components: chua cac component con

- Component:
  + Gom co 3 thanh phan
    * template: html => hien thi
    * script: js => xu li
    * style: css => lam dep
      ** ho tro scss
      ** scoped style: style danh rieng cho component
  + Tao mot component
    * tao file .vue
    * Import 
    * Khai bao
  + Root element:
    * bat buoc

- 2 ways binding:
  + Bind du lieu 2 chieu
  + Phu thuoc vao kieu du lieu cua element

- Cac gia tri cua vue co the co trong element
  + v-show: giong nhu la display: block
  + v-model: gan gia tri cho element

- Life cycle of components
  + 

- Hook: 
  + la nhung cai ham duoc gan vao nhung thoi diem nhat dinh cua life cycle

- Binding: 
  + Value binding: {{}}
  + property binding: 
    * v-bind:property = "value" // cho ma property thi chung ta co the de ten bat ki gi cung duoc, no van hien ra ket qua. <h1 v-bind:id="id"></h1>
      ** chung ta cung co the viet tat la <h1 :id="id"></h1>


