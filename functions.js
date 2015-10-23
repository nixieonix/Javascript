//iz besede zadnjo črko prestaviti na prvo mesto
/*var str = "w3resource";

str = str[str.length - 1] + str.substring(0, str.length - 1);

document.write(str);*/

/*var str = "w3resource";
var arr = str.split("");
var newStr = [];

var zadnjiElem = arr[arr.length-1];

newStr.push(zadnjiElem);

for(var i = 0; i < arr.length - 1; i++){

	newStr.push(arr[i]);

}

// newStr.push(arr.slice(0, arr.length-1));

document.write(str);
document.write("<br />");
document.write(arr);
document.write("<br />");
document.write(newStr);
document.write("<br />");


//prestopno leto 
var year = 1900;

var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
document.write(x);
document.write("<br />");

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
	document.write("je prestopno leto!");
}else{
	document.write("NI prestopno leto!");
}

	

console.log(5+6); // zapiše v konzoli. aktivacija kozole F12!
document.write("<br />");
document.write(5+6);

document.write("<br />");
document.write("<br />");

// 
/*var d = new Date();
d.setDate(d.getDate() + 50);
document.write(d);

var date, daytoset; // given: a Date object and a integer representing the week day

var currentDay = date.getDay();
var distance = daytoset - currentDay;
date.setDate(date.getDate() + distance);
document.write(date);


document.write("<br />");
document.write("<br />");*/

// 1. januar, ki je sobota med leti 2014 in 2050!!
/*for(var leto = 2014; leto <= 2050; leto++)
{
	var datum = new Date(leto, 0, 1);
	if(datum.getDay() == 6)
	{
		document.write("1. januar je sobota: " + leto);
		document.write("<br />");
	}
}


var intiger = Math.ceil(Math.random()*10);
var hit = prompt("Hit the number between 1 and 10:");



if( intiger == hit){
	document.write("You guessed it!");
}
else
{
	document.write("Better luck next time!");
}

console.log(intiger);*/

// odštevanje do božiča!
/*today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25){
	xmas.setFullYear(xmas.getFullYear()+1);
}

var oneDay = 1000 * 60 * 60 * 24; // milisekunde v enem dnevu
var dayLeft = Math.ceil((xmas.getTime() - today.getTime()) /(oneDay));
document.write("Do Božiča je še " + dayLeft + " dni!");

document.write("<br />");
document.write("<br />");

// Odštevanje v različnih časovvnih enotah 
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var d = new Date();
var t = d.getTime(); // vrne čas v milisekundah od polnoči 1. januarja leta 1970 pa do željenega datuma

var y = Math.round(t / years);

document.write(y);

document.write("<br />");
document.write("<br />");

/*function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	if (h<10)
	{
		h="0" + h;
	}
	if (m<10)
	{
		m="0" + m;
	}
	if (s<10)
	{
		s="0" + s;
	}

	document.getElementById('txt').innerHTML= h + ":" + m + ":" + s;
	t = setTimeout('startTime()',500);
}

function mnoz(){
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	document.getElementById("result").innerHTML = x * y;
}

function delj(){
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	document.getElementById("result").innerHTML = x / y;
}
document.write("<br />");
document.write("<br />");*/


/*var z = 0;
do{
	++z;
}
while (!(z>11));

for( var i = 0; i <= 10; i++ ){
	document.write("Stavek i");
	document.write("<br />");

	for(var j = 10; j > 0; --j){
		document.write("Stavek j");
		document.write("<br />");
	}
}
document.write("Vsak i: " + i);
document.write("Vsak j: " + j);


document.write("<br />");

document.write(z);

function celz(){
	var f = document.getElementById("f").value;
	var c = (f-32)/1.8;

	document.getElementById("result").innerHTML = f + " \xB0F is " + c + " \xB0C";
}

function fahr(){
	var c = document.getElementById("c").value;
	var f = c * 1.8 + 32;

	document.getElementById("result").innerHTML = c + " \xB0C is " + f + " \xB0F"; 
}

alert(document.URL); 
document.write(window.location.href);*/


/*var x = "32243";
var arr = x.split("");
var newStr = [];

for( var i = arr.length - 1; i >= 0; i--){
	newStr.push(arr[i]);
}

x = x.slice("").reverse().join("");

document.write(x);
document.write("<br />");

document.write("<br />");
document.write(newStr);*/

/*function substrings(str){
	var sustr = [];

	for(var j = 0; j < str.length; j++){
		for(var i = j+1; i <= str.length; i++){
			sustr.push(str.substring(j,i)); 
		}
	}
	document.write(sustr);
}	

substrings("dog");

document.write("<br />");

function subs(x){
	var y = x.slice
	("");

	for(var j = 0; j < y.length; j++){
		for(var i = j+1; i <= y.length; i++){
			var z = y.substr(j,i); 
			document.write(z);
	document.write(", ");
		}
	}
	
}	

subs("dog");*/

//slice() string!!
//split() array!!

/*var str = "madam";
var arr = str.split("");
var newStr = [];

for(var i = arr.length - 1; i >= 0; i--){
	newStr.push(arr[i]);
}
document.write(newStr);
document.write("<br />");
document.write(arr);
document.write("<br />");

if(arr == newStr){
	document.write("Word is palindrome!");
}
else{
	document.write("Word is NOT palindrome!");
}

document.write("<br />");
document.write("<br />");

function sort(){
	x = [9, 3, 5, 8, 7, 2, 4];
	y = [];
	zamenjava = true;

	document.write(x);
	document.write("<br />");

	while( zamenjava == false){
		for(var i = 0; i < x.length; i++){
			if(x[i] > x[i+1]){
				y.push(x[i]);
				x[i] = x[i+1];
				x[i+1]= y[y.length-1];
			}
			zamenjava = false;
		}

	}
	
	document.write(x);
}
sort()

document.write("<br />");
document.write("<br />");

function postevanka(){
document.write("<table>");
	for(var j = 1; j <= 10; j++){
		document.write("<tr>");
		for(var i = 1; i <= 10; i++){
			document.write("<td>");
			document.write(i*j);
			document.write("</td>");
		}
		document.write("</tr>");
	}
document.write("</table>");	
}
postevanka()

document.write("<br />");
document.write("<br />");

var user = prompt("Choose rock, paper or scissors:");
var computer = ["rock", "paper", "scissors"];
computer = computer[Math.floor(Math.random()*computer.length)];



function compare(choice1, choice2){

	if(choice1 == "rock"){
		if(choice2 == "scissors"){
			return ("User won!");
		}else if(choice2 == "paper"){
			return ("Computer won!");
		}
	}else if(choice1 == "paper"){
		if(choice2 == "rock"){
			return ("User won!");
		}else if(choice2 == "scissors"){
			return ("Computer won!");
		}
	}else if (choice1 == "scissors"){
		if(choice2 == "paper"){
			return ("User won!");
		}else if(choice2 == "rock"){
			return ("Computer won!");
		}
	}

	if(choice1 == choice2){
		return ("It's a tie!");
	}
}

document.write("User: " + user);
document.write("<br />");
document.write("Computer: " + computer);
document.write("<br />");
document.write(compare(user, computer));

var total = 0 , count = 1;
while ( count <= 10) {
total += count;
count += 1;
}
document.write("<br />");
document.write("<br />");
document.write(total);

document.write("<br />");
document.write("<br />");

function sorts(){
	var x = [9, 3, 5, 8, 7, 2, 4];
	var y = [];

	for(var i = 0; i <= x.length; i++){
		if(x[i] < x[i+1]){
			y.push(x[i]);
		}else{
			y.push(x[i+1]);
		}
	}
	document.write(x);
	document.write("<br />");
	document.write(y);
}
sorts();*/

/*function ssort() {
	var x = "webmaster";
	var y = x.split("");

	y.sort(); //alphabetically sorted form a to z (x.reverse(); alphabetically from z to a)

	document.write(x);
	document.write("<br />");
	document.write(y);
}
ssort();

document.write("<br />");
document.write("<br />");

function myFunction() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b-a}); //sort the number from highest to lowest ( a-b = form lowest to hightest)
    document.write(points);
}
myFunction();*/

document.write("<br />");
document.write("<br />");

function lowerCase() {
	var str = "the quick brown fox";

	var firtsStr = str.charAt(0);

	firtsStr.toUpperCase();

	document.write(firtsStr);
}
lowerCase();
