function handleName(num,handleEven,handleOdd){
if(num=num%2===0){
    handleEven();
} else{
    handleOdd();
}
}

function handleEven(){
    console.log("Your number is even");
}

function handleOdd(){
    console.log("Your number is odd");
}

handleName(8,handleEven,handleOdd);