let buttonDom = document.querySelector("#button")
let textDom = document.querySelector("#text")
let listDom = document.querySelector("#list")
let list = document.querySelector("ul")

// clicking list item
list.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// adding item to the list when clicking button 
buttonDom.addEventListener ("click" , add)

function add() {
  const inputValue = textDom.value

  if (!inputValue || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $(".error").toast("show");
    // clearing input area
    document.querySelector("#text").value = "";
    return;
  } else {
    $(".success").toast("show");
  }

  // creating li element and adding to list
  var li = document.createElement("li")
  li.textContent = text.value
  listDom.appendChild(li)
  text.value = ""

  // creating span, adding cross icon and adding the span to li element
  const span = document.createElement("SPAN")
  span.className = "close"
  span.textContent = "\u00D7"
  li.appendChild(span);

  // deleting li element when clicking span
  span.onclick = () => {
  li.style.display = "none"
  };

  // clearing input area
  document.getElementById("#text").value = ""
}