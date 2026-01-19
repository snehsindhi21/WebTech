//! Function Currying
//* 

function fun1(num1){
    console.log(num1);
    return function fun2(num2){
        console.log(num2+num1);
        return function fun3(num3){
            console.log(num3+num2+num1);
            return "completed";
        }
    }
}
console.log(fun1(10)(20)(30));