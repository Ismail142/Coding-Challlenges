function flattenArray(array) {
  const flatArray = [];
  //contains the destructured array
  const checker = [...array];
  
  while(checker.length>0){
    const value = checker.pop();
    if (Array.isArray(value)){
      checker.push(...value);
    }
    else {
      flatArray.push(value);
    }
  }

  return flatArray.reverse();
}

console.log(flattenArray([1, [2, [3, 4], 5],[6,7]]));