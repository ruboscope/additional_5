module.exports = function check(str, bracketsConfig) {
  // your solution
  // реализация будет с помощью стека. Если элемент открывающий, то мы будем push в массив, в противном случае будем pop из массива
  var stack = [];
  var startBracket = [];
  var endBracket = [];

  // создами словари открывающих и закрывающих скобок
  for (var i = 0; i < bracketsConfig.length; i++){
    startBracket.push(bracketsConfig[i][0]);
    endBracket.push(bracketsConfig[i][1]);
  }


  for (var i = 0; i < str.length; i++){
    if (startBracket.includes(str[i])) {
      stack.push(str[i]);
    }
    if (endBracket.includes(str[i])) {
      stack.pop();
    }
  }
  if (stack.length > 0)
    return false;
  else
    return true;  
}
