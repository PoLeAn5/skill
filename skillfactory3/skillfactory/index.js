
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let closeButtons = document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li = closeButton.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
    });
}

const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target) {
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
            }
        }
    }, false);
}

function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    if (!input)
        return;
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        const ul = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (!!li) {
            li.style.display = "none";
        }
    });
}
const addBtn = document.getElementById("addBtn");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", () => {
    newElement();
});
export {};
