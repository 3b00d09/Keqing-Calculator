function MistsplitterStacks(){

let p1 = document.getElementById("set-one-info1");
let p2 = document.getElementById("set-one-info2");
let stacks = 3

let select = document.createElement("select");
select.id = "Mistsplitter-stacks";

for (let i = 0; i <= stacks; i++){
let y = document.createElement("option");
y.value = i;
y.text = "%s Stacks".replace("%s", i);
select.appendChild(y);
}

p2.appendChild(select);
}

export {MistsplitterStacks}

