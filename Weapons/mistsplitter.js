function MistsplitterStacks(selectID, parent1, parent2){

// empty the parent from previous stack toggles
parent1.textContent = ""
parent2.textContent = ""

let stacks = 3

let select = document.createElement("select");
select.id = selectID;

for (let i = 0; i <= stacks; i++){
let y = document.createElement("option");
y.value = i;
y.text = "%s Stacks".replace("%s", i);
select.appendChild(y);
}

parent2.appendChild(select);
}

export {MistsplitterStacks}

