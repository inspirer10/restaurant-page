(this["webpackJsonprestaurant-page"]=this["webpackJsonprestaurant-page"]||[]).push([[0],{25:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},44:function(e,c,t){},50:function(e,c,t){},51:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),i=t(21),n=t.n(i),r=(t(36),t(3)),d=t(5),o=(t(37),t(7)),j=(t(38),t(11)),l=t(1);var m=function(e){var c=e.onClick;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{id:"nav",children:[Object(l.jsx)(j.a,{to:"/#pizzas",className:"nav-link",children:"Restaurant"}),Object(l.jsxs)("div",{onClick:c,className:"nav-icon",children:[Object(l.jsx)("p",{children:"Menu"}),Object(l.jsx)(o.d,{className:"icon"})]})]})})},b=(t(44),t(8));var p=function(e){var c=e.onClick;return Object(l.jsxs)("section",{className:"sidebar",children:[Object(l.jsx)("div",{className:"sidebar-menu-icon",children:Object(l.jsx)(o.f,{onClick:c,className:"close-icon"})}),Object(l.jsxs)("div",{className:"sidebar-links-menu",children:[Object(l.jsx)(j.a,{onClick:c,className:"sidebar-link",to:"/#top",children:"Full Menu"}),Object(l.jsx)(j.a,{onClick:c,className:"sidebar-link",to:"/#pizzas",children:"Pizzas"}),Object(l.jsx)(j.a,{onClick:c,className:"sidebar-link",to:"/#drinks",children:"Drinks"}),Object(l.jsx)(j.a,{onClick:c,className:"sidebar-link",to:"/#desserts",children:"Desserts"}),Object(l.jsx)(b.c,{to:"/cart",children:Object(l.jsx)("button",{children:"Cart"})})]})]})};var O=function(){var e=Object(a.useState)(!1),c=Object(d.a)(e,2),t=c[0],s=c[1],i=function(){s(!t)};return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)(m,{onClick:i}),t&&Object(l.jsx)(p,{onClick:i}),Object(l.jsx)("div",{className:"hero-content",children:Object(l.jsxs)("div",{className:"hero-items",children:[Object(l.jsx)("h1",{children:"The Tastiest Pizza Ever"}),Object(l.jsx)("p",{children:"Ready in 5 minutes!"}),Object(l.jsx)(b.c,{to:"/cart",children:Object(l.jsx)("button",{children:"Order here"})})]})})]})},u=t(10),h=(t(25),t.p+"static/media/product3.108942b1.jpg"),x=t.p+"static/media/product2.cd10bc10.jpg",f=t.p+"static/media/product1.a3050729.jpg",v=t.p+"static/media/drink1.c488fd4a.jpg",N=t.p+"static/media/drink2.934e66b9.jpg",g=t.p+"static/media/drink3.fbca7f26.jpg",k=t.p+"static/media/hotDrink1.64e3a56e.jpg",C=t.p+"static/media/hotDrink2.b0d2ca63.jpg",_=t.p+"static/media/hotDrink3.7ad6741f.jpg",z=t.p+"static/media/dessert1.2c3ebfec.jpg",D=t.p+"static/media/dessert2.6c9be053.jpg",E=t.p+"static/media/dessert3.f2ae8017.jpg",R=[{img:h,alt:"Pizza",name:"Supreme Pizza",description:"Smoky honey ham, pepperoni, Italian sausage, beef, mushrooms, olives, pepper, onion, mozzarella.",price:24.99,index:1},{img:x,alt:"Pizza",name:"Hawaiian Paradise",description:"Tomato sauce, mozzarella cheese, sliced ham, pineapple, bacon, chicken.",price:14.99,index:2},{img:f,alt:"Pizza",name:"Veggie Feast",description:"Shiitake Mushrooms, caramelized onions, smoked paprika, garlic, cmuin, avocado, cashew sauce.",price:19.99,index:3}],T=[{img:v,alt:"Cola",name:"Cola",price:2.49,index:4},{img:N,alt:"Lemonade",name:"Lemonade",price:1.79,index:5},{img:g,alt:"Water",name:"Water",price:.99,index:6}],y=[{img:k,alt:"Tea",name:"Tea",price:1.99,index:7},{img:C,alt:"Caffe",name:"Caffe",price:2.79,index:8},{img:_,alt:"Hot Chocolate",name:"Hot Chocolate",price:2.49,index:9}],P=[{img:z,alt:"hot lava cake",name:"Hot Lava Cake",price:3.99,index:10},{img:D,alt:"Ice Cream",name:"Ice Cream",price:2.49,index:11},{img:E,alt:"Cupcake",name:"Cupcake",price:2.49,index:12}],w=function(e){return{type:"ADD_PRODUCT",payload:e}},S=t(54);var M=function(){var e=Object(u.b)();return Object(l.jsxs)("div",{className:"products-container",id:"pizzas",children:[Object(l.jsx)("h1",{children:"Choose your favorite:"}),Object(l.jsx)("div",{className:"products-space",children:R.map((function(c,t){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{src:c.img,alt:c.alt}),Object(l.jsxs)("div",{className:"product-info",children:[Object(l.jsx)("h2",{className:"product-name",children:c.name}),Object(l.jsx)("p",{className:"product-description",children:c.description}),Object(l.jsxs)("h3",{className:"product-price",children:["$",c.price]}),Object(l.jsx)("button",{onClick:function(){return e(w({name:c.name,price:c.price,index:Object(S.a)()}))},children:"Add to Cart"})]})]},t)}))})]})};var A=function(){var e=Object(u.b)();return Object(l.jsxs)("div",{className:"products-container",id:"drinks",children:[Object(l.jsx)("h1",{children:"Cold drinks:"}),Object(l.jsx)("div",{className:"products-space",children:T.map((function(c,t){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{src:c.img,alt:c.alt}),Object(l.jsxs)("div",{className:"product-info",children:[Object(l.jsx)("h2",{className:"product-name-drinks",children:c.name}),Object(l.jsxs)("h3",{className:"product-price",children:["$",c.price]}),Object(l.jsx)("button",{onClick:function(){return e(w({name:c.name,price:c.price,index:Object(S.a)()}))},children:"Add to Cart"})]})]},t)}))}),Object(l.jsx)("h1",{children:"Hot drinks:"}),Object(l.jsx)("div",{className:"products-space",children:y.map((function(c,t){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{src:c.img,alt:c.alt}),Object(l.jsxs)("div",{className:"product-info",children:[Object(l.jsx)("h2",{className:"product-name-drinks",children:c.name}),Object(l.jsxs)("h3",{className:"product-price",children:["$",c.price]}),Object(l.jsx)("button",{onClick:function(){return e(w({name:c.name,price:c.price,index:Object(S.a)()}))},children:"Add to Cart"})]})]},t)}))})]})};var I=function(){var e=Object(u.b)();return Object(l.jsxs)("div",{className:"products-container",id:"desserts",children:[Object(l.jsx)("h1",{children:"Sweet treats:"}),Object(l.jsx)("div",{className:"products-space",children:P.map((function(c,t){return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{src:c.img,alt:c.alt}),Object(l.jsxs)("div",{className:"product-info",children:[Object(l.jsx)("h2",{className:"product-name-drinks",children:c.name}),Object(l.jsxs)("h3",{className:"product-price",children:["$",c.price]}),Object(l.jsx)("button",{onClick:function(){return e(w({name:c.name,price:c.price,index:Object(S.a)()}))},children:"Add to Cart"})]})]},t)}))})]})};t(50);var L=function(){return Object(l.jsx)("footer",{id:"footer",children:Object(l.jsxs)("div",{className:"footer-content",children:[Object(l.jsx)(j.a,{to:"/#top",className:"footer-link-fix",children:Object(l.jsx)("p",{className:"footer-restaurant",children:"Restaurant"})}),Object(l.jsxs)("div",{className:"socials",children:[Object(l.jsx)(j.a,{to:"/",className:"footer-link",children:Object(l.jsx)(o.b,{className:"footer-icon"})}),Object(l.jsx)(j.a,{to:"/",className:"footer-link",children:Object(l.jsx)(o.c,{className:"footer-icon"})}),Object(l.jsx)(j.a,{to:"/",className:"footer-link",children:Object(l.jsx)(o.g,{className:"footer-icon"})}),Object(l.jsx)(j.a,{to:"/",className:"footer-link",children:Object(l.jsx)(o.h,{className:"footer-icon"})})]})]})})};t(51);var U=function(){var e=Object(u.b)();return Object(l.jsxs)("div",{className:"day-container",children:[Object(l.jsx)("h1",{children:"Pasta of the day"}),Object(l.jsx)("p",{children:"Italian tagliatelle with porcini mushrooms"}),Object(l.jsx)("button",{onClick:function(){return e(w({name:"Tagliatelle with porcini mushrooms",price:14.99,index:Object(S.a)()}))},children:"Order now"})]})};var V=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{}),Object(l.jsx)("div",{className:"icon__section",children:Object(l.jsx)(b.c,{to:"/cart",children:Object(l.jsx)(o.e,{className:"icon__cart"})})}),Object(l.jsx)(M,{}),Object(l.jsx)("div",{class:"pizza-logo"}),Object(l.jsx)(A,{}),Object(l.jsx)(U,{}),Object(l.jsx)(I,{}),Object(l.jsx)("div",{class:"pizza-logo-two"}),Object(l.jsx)(L,{})]})};t(52);var $=function(){var e=Object(u.c)((function(e){return e.products}));console.log(e);for(var c=Object(u.b)(),t=0,a=0;a<e.length;a++)t+=e[a].price;var s="cart filter";return 0===e.length&&(s="cart"),Object(l.jsxs)("div",{className:s,children:[Object(l.jsx)("h1",{className:"cart__heading",children:"CART"}),Object(l.jsx)(b.c,{to:"/",children:Object(l.jsx)(o.a,{className:"cart__icon"})}),e&&e.map((function(e){return Object(l.jsxs)("div",{className:"cart__item",id:e.name+Math.random(),children:[Object(l.jsx)("span",{className:"cart__itemName",children:e.name}),Object(l.jsxs)("span",{className:"cart__itemPrice",children:["$",e.price]}),Object(l.jsx)("button",{className:"cart__itemRemove",onClick:function(){return c({type:"REMOVE_PRODUCT",payload:e.index})},children:"X"})]},e.name+Math.random())})),0!==e.length&&Object(l.jsxs)("h1",{className:"cart__value",children:["Cart value: ",Object(l.jsx)("span",{children:"$"}),t.toFixed(2)]}),0!==e.length&&Object(l.jsx)("button",{className:"cart__clear",onClick:function(){return c({type:"REMOVE_ALL_PRODUCTS"})},children:"Clear Cart"}),0===e.length?Object(l.jsx)("div",{className:"cart__backgroundImage"}):Object(l.jsx)("div",{className:"cart__backgroundImage filter"})]})};var F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",element:Object(l.jsx)(V,{})}),Object(l.jsx)(r.a,{path:"/cart",element:Object(l.jsx)($,{})})]})})},H=t(28),X=t(9),J={products:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"ADD_PRODUCT":return{products:[].concat(Object(X.a)(e.products),[c.payload])};case"REMOVE_PRODUCT":var t=e.products.filter((function(e){return e.index!==c.payload}));return Object(H.a)(Object(H.a)({},e),{},{products:t});case"REMOVE_ALL_PRODUCTS":return J;default:return e}},B=t(31),q=Object(B.a)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());q.subscribe((function(){return console.log(q.getState())})),n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b.a,{basename:"/restaurant-page",children:Object(l.jsx)(u.a,{store:q,children:Object(l.jsx)(F,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5443e43a.chunk.js.map