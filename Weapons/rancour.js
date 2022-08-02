export function RancourStacks(selectID, set){

    // divs to throw out stuff in 

    let parent1
    let parent2

    // we get passed the "set" string which tells us the set to throw the stacks dropdown in
    
    set === "one" ? (parent1 = document.getElementById("set-one-info1"), parent2 = document.getElementById("set-one-info2")) : 
    (parent1 = document.getElementById("set-two-info1"), parent2 = document.getElementById("set-two-info2"))
         

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""
    
    let stacks = 4
    
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

export function RancourBuffSetOne(){
    let weaponStacks = document.getElementById("set-one-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines").value;
    let baseAttack = parseInt(document.getElementById("baseatk").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack* (weaponStacks * (0.04 + (refinement * 0.01)))}, 
    ]
    return buffs
}

export function RancourBuffSetTwo(){
    let weaponStacks = document.getElementById("set-two-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines2").value;
    let baseAttack = parseInt(document.getElementById("baseatk2").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack * (weaponStacks * (0.04 + (refinement * 0.01)))}, 
    ]
    return buffs
}   
    
    