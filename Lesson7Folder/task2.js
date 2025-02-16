function coolFunction(num){
    if(num<=0){
        console.log(`The end of recurrence because we can see number ${num}`);
        return 0;
    } else{
        console.log(`Logging of each step with ${num-1} value`)
        return coolFunction(num-1);
    }
}

console.log(coolFunction(5))