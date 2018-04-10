var header = document.querySelector("header");

var main = document.querySelector("main");

var section = document.querySelector("section");

var mijnSection = document.createElement("section");

var requestURL = 'http://dennistel.nl/movies';

var mijnButton = document.createElement("button");

var request = new XMLHttpRequest();


request.open('GET', requestURL);

request.responseType = 'json'; 

request.send();

console.log(request);

console.dir(request);


request.onload = function() {
    var jsonObj = request.response;
    schrijfhtml(jsonObj);
//    var titletekst = request.response;
//    vuldeh2(titletekst);
//    titletekst(titletekst);
}

function schrijfhtml (jsonObj) {
  console.log(jsonObj["cover"]);   
for (var s = 0; s < jsonObj.length; s++) {
  console.log(jsonObj);
var mijnArticle = document.createElement("article")

    
    var mijnimg = document.createElement("img");
    var mijnh2 = document.createElement("h2");
    var mijnPar = document.createElement("p");
    var mijnPar2 = document.createElement("p");
    var mijnPar3 = document.createElement("p");
    var mijnPar = document.createElement("p");
    var mijnButton = document.createElement("button");
    var buttonText = document.createElement("h3");
    
   
   
    console.log(mijnh2);

    mijnh2.textContent =jsonObj[s].title;
    mijnimg.src =jsonObj[s]["cover"];
    mijnPar.textContent = jsonObj[s].plot;
   

    
   
    mijnArticle.appendChild(mijnimg);
      mijnArticle.appendChild(mijnButton);
     mijnArticle.appendChild(mijnh2);
    mijnArticle.appendChild(mijnPar);
  
    buttonText.textContent = ("The Story");
   
   
    mijnButton.appendChild(buttonText);
    section.appendChild(mijnArticle);
    console.log(mijnButton);
    
    
    mijnButton.onclick = function () {
        this.parentElement.classList.toggle("active");
    }



    


}
} 



