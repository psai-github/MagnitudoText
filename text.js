document.getElementById("demo").innerHTML = localStorage.getItem("text");
function colorred() {
  document.getElementById("demo").style.color = "red";
  document.getElementById("h").style.color = "red";
}
var font='Arial';

function colorblue() {
  document.getElementById("demo").style.color = "blue";   
  document.getElementById("h").style.color = "blue";
}

function read(){
	const trainingData = [document.getElementById("demo").value];
	const net = new brain.recurrent.LSTM();
	net.train(trainingData,{
    		iterations:1500,
    		errorThresh:0.011
	});
	alert(net.run(prompt("Enter Phrase")))
	}


function colorgreen() {
  document.getElementById("demo").style.color = "green";
  document.getElementById("h").style.color = "green";
}

function bcolorblue(){
  document.getElementById("demo").style.backgroundColor="blue";
  document.getElementById("h").style.backgroundColor="blue";
}


function size10() {
    document.getElementById("demo").style.fontSize = "10px"; 
    document.getElementById("h").style.fontSize="10px";
  }
  

function size15() {
  document.getElementById("demo").style.fontSize = "15px"; 
  document.getElementById("h").style.fontSize="15px";
}




function size20() {
  document.getElementById("demo").style.fontSize = "20px"; 
}

function size25() {
    document.getElementById("demo").style.fontSize = "25px"; 
  }

  function size30() {
    document.getElementById("demo").style.fontSize = "30px"; 
  }

  function size35() {
    document.getElementById("demo").style.fontSize = "35px"; 
  }

  function size40() {
    document.getElementById("demo").style.fontSize = "40px"; 
  }

  function size45() {
    document.getElementById("demo").style.fontSize = "45px";  
  }

  function size50() {
    document.getElementById("demo").style.fontSize = "50px"; 
  }

  






function bcolorred() {
  document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("h").style.backgroundColor="red";
}






function bcolorgreen() {
  document.getElementById("demo").style.backgroundColor = "green";
  document.getElementById("h").style.backgroundColor="green";
}


function a() {
  document.getElementById("demo").style.fontFamily = "Arial";
  document.getElementById("h").style.fontFamily="Arial";
}



function i() {
  document.getElementById("demo").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("h").style.fontFamily="Impact,Charcoal,sans-serif";
}


function v() {
  document.getElementById("demo").style.fontFamily = "verdana,sans-serif";
  document.getElementByid("h").style.fontFamily="verdana,sans-serif";
}


function p(){
  document.getElementById("demo").style.fontFamily="Roboto";
  document.getElementById("h").style.fontFamily="Roboto";
}



function l(){
  document.getElementById("demo").style.fontFamily="lobster";
}


function bw(){
  document.getElementById("demo").style.backgroundColor="white";
  document.getElementById("h").style.backgroundColor="white";
}
function w(){
  document.getElementById("demo").style.color="black";
}
function link(){
    var a = document.createElement('a');
				
    // Create the text node for anchor element.
    var link = document.createTextNode(prompt("Name of Link"));
    
    // Append the text node to anchor element.
    a.appendChild(link);
    
    // Set the title.
    a.title = "This is Link";
    
    // Set the href property.
    a.href = prompt("Enter Link");
    
    // Append the anchor element to the body.
    document.body.appendChild(a);
    document.body.appendChild(document.createElement('br'));
}
function img(){
  var img = document.createElement('img');

  img.src=prompt("What is the source of this image?");
  img.width=prompt("What should the size of the image be?")
  // Append the anchor element to the body.
  document.body.appendChild(img);
  document.body.appendChild(document.createElement('br'));
}
function save(){
var text1=document.getElementById("demo").value;
localStorage.setItem("text", text1);
}
function wordcount(){
  var str = document.getElementById("demo").value;
  var wordCount = str.match(/(\w+)/g).length;
  alert(wordCount); 
}
let saveFile = () => {

  let data = document.getElementById("demo");
  const textToBLOB = new Blob([data.value], { type: 'text/plain' });
  const sFileName = prompt("What do you want to call this file?")+'.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}
 const savetext = setInterval(save, 1000);
 
