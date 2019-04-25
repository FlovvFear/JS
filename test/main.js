function num(arr){
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    let count = 0;
      for(let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          count++;
        }
      }
    newArr.push(count);
  }
  console.log(newArr);

}
num([15,1,2,3,0,12,4,9]);



