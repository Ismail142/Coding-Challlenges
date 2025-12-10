function firstUniqueChar(data){
  uniqueCharMap = {};

  for (i of data ) {
    uniqueCharMap[i] ? ++uniqueCharMap[i] : uniqueCharMap[i] = 1;
  };


  for (i of data){
    if (uniqueCharMap[i]===1) return i;
  }

  return null
}

console.log(firstUniqueChar("1bbaa1c2d"));