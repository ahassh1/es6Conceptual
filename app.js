// primitive and non-primitive data type 

// primitive
const name= 'polash'
const num = 3;

// non-primitive
const array =[ 34,56,67,88,77]
const obj ={
    name: 'person',
    age:34
}

// pass by value & pass by reference .
 
// pass by value 
const nam  = 'polash';

function greet(val){
    console.log(val)
    val= 20
    console.log('hello',val)
}
console.log(nam)
greet(nam)
console.log(nam)

// pass by reference .
const arr =[10,20,30,40];
function add(arr){
    console.log(arr)
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        arr[index]= element*element
        
    }
    console.log(arr)
}
console.log(arr)
add(arr)
console.log(arr)