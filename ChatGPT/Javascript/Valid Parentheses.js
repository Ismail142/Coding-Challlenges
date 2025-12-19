function isValidParentheses(query) {
  //this object contains the corresponding closing parentheses
  const parentheses = {
    "(":")",
    "{":"}",
    "[":"]"
  };

  //get hold of the opening brackets
  const checker = [];

  for (let i of query){
    //return false if there is no opening brackets but there is a closing brackets
    if (checker.length===0 && ")]}".includes(i)){
      return false;
    }

    if ("([{".includes(i)){
      checker.push(i);
    }
    else if (parentheses[checker[checker.length-1]] === i){
      checker.pop();
    }
    else {
      return false;
    }
  };

  //checks to see if there is no existing opening brackets
  if (checker.length>0) return false;

  return true;

}


console.log(isValidParentheses("[()]{[]}"));


// console.log(isValidParentheses("()"));        // true
// console.log(isValidParentheses("()[]{}"));    // true
// console.log(isValidParentheses("(]"));        // false
// console.log(isValidParentheses("([)]"));      // false
// console.log(isValidParentheses("{[]}"));      // true
