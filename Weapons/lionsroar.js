export function LionsRoarToggle(selectID, parent1, parent2){

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Enemy Influcted With Electro";
    parent1.appendChild(label)

    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = "electro-status";
    check.id = "set-one-weapon-toggle";
    check.className = "weapon-toggle"
    check.checked = true
    parent1.appendChild(check)
}
    
export function LionsRoarBuffSetOne(){
    let refinement = document.getElementById("weapon-refines").value;
    let weaponToggle = document.getElementById("set-one-weapon-toggle").checked;

    let buffs =  [
        {Type: "AllDMG", Value: weaponToggle ? 0.2 + (refinement * 0.04) : 0}, 
    ]
    
    return buffs
} 

export function LionsRoarBuffSetTwo(){

    let refinement = document.getElementById("weapon-refines2").value;
    let weaponToggle = document.getElementById("set-two-weapon-toggle").checked;

    let buffs =  [
        {Type: "AllDMG", Value: weaponToggle ? 0.2 + (refinement * 0.04) : 0}, 
    ]
    
    return buffs
}
    