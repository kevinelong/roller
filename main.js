
const input = (id, value = "", inputType = "text") => `<input value="${value}" name="${id}" id="${id}" type="${inputType}">`;
// const label = (content) => `<label>${content}</label>`;
const select = (id, content) => `<select id="${id}">${content}</select>`;
const option = (value, content, isSelected) => `<option value="${value}"${isSelected ? " selected" : ''}>${content}</option>`;
const optionList = (list, selectedItem) => list.map(v => option(v, v, selectedItem == v)).join("\n");
const button = (id, content) => `<button id="${id}">${content}</button>`;
const div = (id, content="") => `<div id="${id}">${content}</div>`;

const body = document.body;

body.innerHTML += 
    input("quantity", 1, "number") + 
    "D" + 
    select("d", optionList([1, 4, 6, 8, 10, 12, 20, 30, 100], "20")) + 
    button("roll", "Roll") + div("display");

const display = document.getElementById("display");
const quantity = Number(document.getElementById("quantity").value);
const d = Number(document.getElementById("d").value);
const roll = document.getElementById("roll");

roll.onclick = () => {
    display.innerHTML = Roller.roll(quantity, d)
};