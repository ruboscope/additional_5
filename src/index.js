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
    
    //1-ое условие: при котором используются следующая скобка закрывающая и она одинаковая с отркрывающей
    //2-ое условие: если скобка - закрывающая, то проверяем, чтобы предыдущая скобка в теге была соответствующая закрывающей открывающая скобка
    if ((startBracket.includes(str[i]) && endBracket.includes(str[i]) && str[i] == stack[stack.length - 1]) || (endBracket.includes(str[i]) && startBracket[endBracket.indexOf(str[i])] == stack[stack.length - 1])) {
      stack.pop();
      continue;
    }
    //если символ - открывающая скобка, то добавляем ее в стек
    if (startBracket.includes(str[i])) {
      stack.push(str[i]);
      continue;
    }
 
    //когда символ закрывающая скобка и в стеке нету элементов, то сразу возвращаем false(бессмысленно проверять дальше)
    if (endBracket.includes(str[i]) && stack.length == 0) {
      return false;
    }
  }
  if (stack.length > 0)
    return false;
  else
    return true;  
}
