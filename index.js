// let main = document.getElementById('main');
// main.remove();

// let newHeader = document.createElement('h1');
// document.body.appendChild(newHeader);

// newHeader.id = "victory";

// newHeader.innerHTML = "YOUR-NAME is the champion";


/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";