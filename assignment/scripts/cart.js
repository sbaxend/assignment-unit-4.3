console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItem = 5

// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log(basket.length, 'current length')
/**
 *
 * @param {string} string
 * @returns console.log(true)
 */
function addItem(string,array){
    if(isFull(array) == false ){
    array.push(string)}
    else {
        console.log('your basket is full make better life choices')
    }
   // return console.log(true)
}
//addItem('test’,b)
//addItem(‘two’,basket)
//addItem(‘three’,basket)
//addItem(‘two’,basket)
//addItem(‘three’,basket)
//addItem(‘two’,basket)
//addItem(‘three’,basket)
function listItems(array){
    for(let item of array){
        console.log(item)
    }
}
listItems(basket)
function empty(){
    basket = []
}
console.log(basket)
empty()
console.log(basket, "Empty basket")
/**
 *
 * @param {array} array
 * @returns
 */
function isFull(array){
    if(array.length < maxItem){
        console.log(false)
        return false
    }
    else {
        return true
    }
}
console.log(basket.length, 'current length')
// isFull(basket)
// addItem(‘1’)
// addItem(‘1’)
// addItem(‘1’)
// addItem(‘1’)
// addItem(‘1’)
console.log(basket.length, 'current length')
isFull(basket);
/*
use isFull() to prevent more than 5(maxItem) item to the basket
*/
function isFullNew(array){
    if(array.length < maxItem){
        console.log(false)
    }
    else {
        return console.log(true)
    }
}
function removeItem(string,array){
    return console.log(array.indexOf(string))
}
let test = ['a','b','c','d']
removeItem('b',test)