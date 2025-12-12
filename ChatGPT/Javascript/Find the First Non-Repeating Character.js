function firstUniqueChar(data){
  //Map to count the frequency of each character
  const uniqueCharMap = {};

  for (let i of data ) {
    uniqueCharMap[i] ? ++uniqueCharMap[i] : uniqueCharMap[i] = 1;
  };

  // find the first character with count 1
  for (let i of data){
    if (uniqueCharMap[i]===1) return i;
  }

  return null
}

console.log(firstUniqueChar("leetcode"));