// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

process.stdin.on("data", (data) => {
  let input = data.toString().trim();
  let res = ''
  for (let i of input) {
    let c = 0;
    for (let j of input) {
      if (i == j) {
        c++;
      }
    }
    if (c >= 2) {
      res += ")";
    } else {
      res += "(";
    }
  }
  process.stdin.pause()
  console.log(res)
});
