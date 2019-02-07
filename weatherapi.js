var button=document.getElementById("btn");
var area=document.getElementById("area");
var city;
button.addEventListener("click",function(){
	city=prompt("Please enter a City:","Charleston")
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=e0619c3f985f76cacd12544a8ed1c353");
	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		write(ourData);
	};
	ourRequest.send();	
});

function write(data){
	var string=""
	string+="<p>The current temp in "+data.name+", "+data.sys.country+" is "+data.main.temp+" degrees Fahrenheit.</p>";
	area.insertAdjacentHTML("beforeend",string);
}