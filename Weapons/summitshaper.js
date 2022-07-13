export function SummitShaperStacks(selectID, checkID, parent1, parent2){

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let stacks = 5

    let select = document.createElement("select");
    select.id = selectID;

    for (let i = 0; i <= stacks; i++){
    let y = document.createElement("option");
    y.value = i;
    y.text = "%s Stacks".replace("%s", i);
    select.appendChild(y);
    }

    parent2.appendChild(select);

    let label = document.createElement("label");
    label.textContent = "Shield Active";
    parent1.appendChild(label)

    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = "shielded";
    check.id = checkID;
    check.className = "weapon-toggle"
    check.checked = true
    parent1.appendChild(check)
}


export function SummitBuffsSetOne(){

    let weaponStacks = document.getElementById("set-one-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines").value;
    let weaponToggle = document.getElementById("set-one-weapon-toggle").checked;
    let baseAttack = parseInt(document.getElementById("baseatk").value)

    let buffs = [
        {Type: "ATK", Value: weaponToggle ? baseAttack * (weaponStacks * 2 * (0.04 + (refinement * 0.01))) 
        : baseAttack * (weaponStacks * (0.04 + (refinement * 0.01)))}, 
    ]
    return buffs
}

export function SummitBuffsSetTwo(){
    let weaponStacks = document.getElementById("set-two-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines").value;
    let weaponToggle = document.getElementById("set-two-weapon-toggle").checked;
    let baseAttack = parseInt(document.getElementById("baseatk2").value)

    let buffs = [
        {Type: "ATK", Value: weaponToggle ? baseAttack * (weaponStacks * 2 * (0.04 + (refinement * 0.01))) 
        : baseAttack * (weaponStacks * (0.04 + (refinement * 0.01)))}, 
    ]
    return buffs
}