function returnResult(text, time) {
  setTimeout(() => {
    console.log(`${text} is shown in ${time} ms`);
  }, time);
}
returnResult('Hello', 3000);
