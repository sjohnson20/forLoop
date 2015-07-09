var color = ["<a href='http://www.google.com' target='_blank'>red</a><br>This color is red","blue","yellow","green","purple"];
var flavor = ["sweet","spicy","sour","bitter"]
var items = "";
var i;

function colorSet () {
	list = color;
	looper();
	return;
}

function flavorSet () {
	list = flavor;
	looper();
	return;
}

function resetter () {
	document.getElementById("space").innerHTML = "";
	items = "";
	return;
}

function looper() {
	for (i = 0; i < list.length; i++) {
		items += list[i] + "<br>";
	};
	document.getElementById("space").innerHTML = items;
	return;
}

