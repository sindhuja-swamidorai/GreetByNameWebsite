"use strict";

// Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
                         // This isn't calling init now -- it 
                         // saying call the init function when
                         // the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the helloBtn
   const greetUserBtn = document.getElementById("greetUserBtn");

   // Let helloBtn's onclick know there is a function
   // called onHelloBtnClicked that should be called when
   // the button is clicked
   greetUserBtn.onclick = onGreetUserBtnClicked; 

   // Find the clearBtn
   let clearBtn = document.getElementById("clearBtn");

   // Let clearBtn's onclick know there is a function
   // called onClearBtnClicked that should be called when
   // the button is clicked
   clearBtn.onclick = onClearBtnClicked; 

}



// This function is called when helloBtn is clicked
function onGreetUserBtnClicked() {
   // Find the messageDiv
   let messageDiv = document.getElementById("messageDiv");
   // Set the contents of the div
   let name = document.getElementById("nameField")
   messageDiv.innerHTML = `Hello ${name.value}`;
}

// This function is called when clearBtn is clicked
function onClearBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");
    // Clear the contents of the div
    messageDiv.innerHTML = "";
 }
