export function BlackcliffStacks(selectID, parent1, parent2){
     

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
    
    
export function BlackcliffBuffSetOne(){
    let weaponStacks = document.getElementById("set-one-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines").value;
    let baseAttack = parseInt(document.getElementById("baseatk").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack * (weaponStacks *(0.12 + refinement * 0.03))}, 
    ]
    return buffs
}

export function BlackcliffBuffSetTwo(){
    let weaponStacks = document.getElementById("set-two-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines2").value;
    let baseAttack = parseInt(document.getElementById("baseatk2").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack * (weaponStacks *(0.12 + refinement * 0.03))}, 
    ]
    return buffs
}