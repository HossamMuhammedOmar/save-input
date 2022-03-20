let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  myLeads.push(inputValue);
  renderInputs(inputValue);
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}

function renderInputs(inputValue) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerHTML = inputValue;
  a.setAttribute("href", inputValue);
  a.setAttribute("target", "_blank");
  li.appendChild(a);
  if (inputValue.length != 0) {
    ulEl.appendChild(li);
    inputEl.value = "";
  }
}
