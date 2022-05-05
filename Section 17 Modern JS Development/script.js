// ------------------- EXPORTING AND IMPORTING ES6 ------------------- THE-SECTION

// ----------------

// // Importing modules
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, tq);

// console.log('Importing modules');
// // console.log(cart); //not defined.

// // ----------------

// // import * as ShoppingCart from './shoppingCart.js';

// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// // ----------------

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('apple', 5);
console.log(cart);


// ------------------- TOP-LEVEL AWAIT ------------------- THE-SECTION

// // console.log('start');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('something');

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     // console.log(data);

//     return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // getLastPost().then(last => console.log(last));

// // same as above
// const lastPost = await getLastPost();
// console.log(lastPost);

// ------------------- THE MODULE PATTERN ------------------- THE-SECTION

// const shoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//     };

//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };
// }
// )();

// shoppingCart2.addToCart('apple', 4);
// console.log(shoppingCart2);

// ------------------- COMMONJS MODULE ------------------- THE-SECTION

// // // Export
// exports.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// };

// // Import
// const { addToCart } = require('./shoppingCart');

// ------------------- INTRO TO COMMAND LINE ------------------- THE-SECTION

// ------------------- INTRO TO NPM ------------------- THE-SECTION

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {
            product: 'bread',
            quantity: 5,
        },
        {
            product: 'pizza',
            quantity: 6,
        }
    ],
    user: { loggedIn: true }
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone); // shallow copy (loggedIn: true)
console.log(stateDeepClone); //deep copy (loggedIn: false)


// ------------------- PARCEL AND NPM SCRIPT ------------------- THE-SECTION

if (module.hot) {
    module.hot.accept();
}

// ------------------- BABEL TRANSFILLING AND POLYFILLING ------------------- THE-SECTION

import 'core-js/stable';

// Polyfilling async function
import 'regenerator-runtime/runtime';