let chaBack = document.getElementById("backgr");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

chaBack.addEventListener("click", () => {
    document.body.style.backgroundColor = 'lightblue';
});


btn.addEventListener("click", () => {
const newItem = document.createElement('li');
newItem.textContent = `Item`;
list.appendChild(newItem);
});


