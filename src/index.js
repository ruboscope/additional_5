module.exports = function check(str, bracketsConfig) {

  let tempStr = str;


  for (let strKey = tempStr.length - 1; strKey >= 0; strKey--) { //Лучше идти с конца, т.к. длина уменьшается за счет удаления элементов
    for (let bracketKey = 0, bracketLen = bracketsConfig.length; bracketKey < bracketLen; bracketKey++) {

      if (tempStr[strKey] === bracketsConfig[bracketKey][0]) {
        tempStr = tempStr.replace(bracketsConfig[bracketKey].join(''), '');
      }
    }
  }

  return str === '';
}
