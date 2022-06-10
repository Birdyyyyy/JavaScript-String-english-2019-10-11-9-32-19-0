// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase())

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var newStr = sentence.split(" ")
for(let i = 0; i <newStr.length; i++){
	newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
}
console.log(newStr)

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.replace(/[^0-9]/ig,""))
