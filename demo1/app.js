alert("Hello from app.js!")
var pics= [
    "imgs/cat1.jpg", 
    "imgs/cat2.jpg",
    "imgs/cat3.jpg",
    "imgs/cat4.jpg",
    "imgs/cat5.jpg"
  ]

var btn = document.querySelector("button");
var img=document.querySelector("img");
var counter=1;

btn.addEventListener("click", function(){
    if(counter===pics.length)
       counter=0;
    img.src=pics[counter]
    counter=counter+1
});