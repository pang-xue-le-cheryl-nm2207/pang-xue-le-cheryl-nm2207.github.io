

// setting the first text to be shown
let initialText = "Suprise!";
document.getElementById("mainDiv").innerHTML = initialText;

// wait for 1 second and then show the next text
setTimeout(function() {
  document.getElementById("mainDiv").innerHTML = "You found the secret room!";
}, 1500);

// wait for 2 second and then show the next text 
setTimeout(function() {
    document.getElementById("mainDiv").innerHTML = "What's your name?";
    

    // create a div for the name input
    let nameDiv = document.createElement("div");
    nameDiv.innerHTML = '<input type="text" name="name" placeholder="enter your name here :)" id= "nameInput">';
    document.getElementById("mainDiv").appendChild(nameDiv);


    
    //get the name of the user after they press enter
    document.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            let userName = nameInput.value;
            console.log("name is " + userName);
            document.getElementById("mainDiv").innerHTML = "Welcome " + userName + "!";

            setTimeout(function() {
                document.getElementById("mainDiv").innerHTML = "Here's a cute matching game for you to play!";
            }, 2500);

    
            // Auto change HTML after 2 seconds
            setTimeout(function() {
                window.location.href = "../room/room.html";
            }, 5000);
        }
    });   
}, 3000);



/////////CODE FOR THE CURSOR///////////
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();






