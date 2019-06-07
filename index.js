var element = document.createElement('div')
document.body.appendChild(element)
var ul = document.createElement('li')

for (let i = 0; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)

}

element.appendChild(ul)

// let element =
// document.querySelector("p#greeting");
// element.innerHTML = "Hello, DOM!"

element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAligh = 'left'
