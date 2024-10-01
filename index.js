// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//      APPEND
function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("Ralph")


//    PREPEND
function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob")


//     REMOVE LAST ELEMENT
function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat()


//     REMOVE FIRST ELEMENT
function destructivelyRemoveFirstCat(){
   cats.shift();
}
destructivelyRemoveFirstCat()

//    SPREAD OPERATOR
function appendCat(name){
    return [...cats, name];
}
appendCat("Broom")

function prependCat(name) {
    return [name, ...cats];
}
prependCat("Arnold")

//    .SLICE()
function removeLastCat(){
    return[...cats.slice(0,2)];
    // return [...cats.slice(0, -1)];
}
removeLastCat();
console.log(removeLastCat())

function removeFirstCat(){
    return[...cats.slice(1)];
}
removeFirstCat();
console.log(removeFirstCat())