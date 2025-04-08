// primitive and non-primitive data type 

// primitive
// const name= 'polash'
// const num = 3;

//non-primitive
// const arr =[ 34,56,67,88,77]
// const obj ={
//     name: 'person',
//     age:34
// }

// pass by value & pass by reference 
 
// pass by value 
const name  = 'polash';

function greet(val){
    console.log(val)
    val= 20
    console.log('hello',val)
}
greet(name)

// pass by reference 
