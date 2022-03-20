let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  myLeads.push(inputValue);
  const li = document.createElement("li");
  li.textContent = inputValue;
  if (inputValue.length != 0) {
    ulEl.appendChild(li);
    inputEl.value = "";
  }
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
