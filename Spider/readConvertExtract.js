var html = '此处定义逐行读取的文件内容';
var flag;
var temp = '';
var result = [];
var htmlArray = [];

console.log('逐行读取的结果 : ', html);
for (var i in html) {
  htmlArray.push(html[i]);
}
for (var i = 0; i < htmlArray.length; i++) {
  if (' ' === htmlArray[i] || '\n' === htmlArray[i]) {
    htmlArray.splice(i, 1);
    i --;
  }
}

console.log('html转化为字符数组 : ', htmlArray);
for (var i = 0; i < htmlArray.length - 1; i++) {
  if (htmlArray[i] === '>') {
    if (htmlArray[i + 1] === '<') {
      continue;
    } else {
      flag = i + 1;
      while (htmlArray[flag] != '<') {
        temp += htmlArray[flag++];
      }
      result.push(temp);
      temp = '';
    }
  }
}
console.log('提取字符数组中的有用信息 : ', result);
