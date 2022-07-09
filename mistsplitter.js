function MistsplitterStacks(select_id, p1){

// empty the parent from previous stack toggles
p1.textContent = ""

let stacks = 3

let select = document.createElement("select");
select.id = select_id;

for (let i = 0; i <= stacks; i++){
let y = document.createElement("option");
y.value = i;
y.text = "%s Stacks".replace("%s", i);
select.appendChild(y);
}

p1.appendChild(select);
}

export {MistsplitterStacks}

