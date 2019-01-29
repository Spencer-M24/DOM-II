// Your code goes here

const navy = document.querySelectorAll(".nav a");

for (let i =0 ; i < navy.length; i++) {
    navy[i].addEventListener("focus", function (event) {
        console.log("event is listening " + i);

        if (i % 2 == 0) {
            event.target.style.backgroundColor = "red";
            console.log("The grass is green")
        } else {
            event.target.style.backgroundColor = "pink";
            console.log("Does this work with colors")

        }

    }, true);


    navy[i].addEventListener("click", function (event) {

        event.preventDefault();
        console.log("Navigation list will be prevented default")
    });

}
document.addEventListener("click", function (event) {

    event.stopPropagation();
    console.log("Once  this has clicked everything yeilds");
})

    const para =document.querySelector(".intro p");
    para.addEventListener("dblclick",function(event){
    event.target.style.fontSize="13px";
     console.log("I want you to be big!!");
});

    window.addEventListener("resize", function(event) {
    console.log("resized");
});

const heading =document.querySelector(".nav-container .logo-heading");

heading.addEventListener("click", function(event){
    heading.textContent="Pika Pika CHUUUUU!!"
console.log("Text has been changed  ");
});

 const secondHeading =document.querySelector(".intro h2");
secondHeading.addEventListener("drag",function(event){
  console.log(" You have been dragged hahaha");
});

const destinationList = document.querySelectorAll(".destination");
for(let i= 0; i<destinationList.length;i++){
    destinationList[0].addEventListener("mouseover",function(event){

        event.target.style.display='none';
    });
    destinationList[1].addEventListener("mouseover",function(event){

        event.target.style.backgroundColor='green';
    });

    destinationList[2].addEventListener("mouseover",function(event){

        event.target.style.fontStyle='normal';
    });

}


let fontSize=16;
const btnList= document.querySelectorAll(".btn");

for (let i=0; i < btnList.length; i++) {
    btnList[i].addEventListener("wheel", function (event) {

        if (event.deltaY < 0) {

            fontSize++;
            console.log("Bigger Hulk");
        }
        else {
            fontSize--;
            console.log("Melting Decreasing");
        }

        event.target.style.fontSize = `${fontSize}px`;

    });
}

const contentPara =document.querySelector(".content-section .text-content p");
contentPara.addEventListener("copy",function(event){
    console.log("This Paragraph is copied.");
})

const destPara =document.querySelector(".content-section .text-content p");
destPara.addEventListener("cut",function(event){
    console.log("Notice Paragrah is Removed, Cut Out.");

});
destPara.addEventListener("paste",function(event){
        console.log("Paragraph Just Been Pasted Warning.");
});



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
});

const container=document.querySelector(".container")
container.addEventListener("load", function(event) {
    console.log("Mission Has been Loaded!");
});








