function reverse(str){
  var t = str.split('');
  t = t.reverse();
  t = t.join('');//you have to send '' because default is comma
  //t = t.replace(/,/g,"")
  return t;
}
reverse("abc");

function isPalindrome(str){
  var t = reverse(str);
  var flag = (t==str);
  console.log('isPalindrome:',str,"=",t,"?",flag)
  return flag;
}
isPalindrome("abc");
isPalindrome("mom");

function isPermutation(str1,str2){
  var t1 = str1.split('');
  t1 = t1.sort();
  t1 = t1.join('');//you have to send '' because default is comma
  var t2 = str2.split('');
  t2 = t2.sort();
  t2 = t2.join('');//you have to send '' because default is comma
  var flag = (t1===t2);
  console.log('isPermutation:',str1,"=",str2,"?",flag)
  return flag;
}

isPermutation("cost","scot");
isPermutation("cost","cuts");

