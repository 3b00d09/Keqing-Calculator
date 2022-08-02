export function ShimenawaDisplay4p(selectID, parent1, parent2){
     
    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Elemental Skill Used";
    parent1.appendChild(label)

    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = "skill-used";
    check.id = selectID;
    check.className = "artifact-4p-toggle"
    check.checked = true
    parent1.appendChild(check)

    parent2.textContent = "50% Bonus Damage to Normal, Charged, and Plunge Attacks"

    document.getElementById(selectID).addEventListener("change", (e) =>{
        
        e.target.checked ? parent2.textContent = "50% Bonus Damage to Normal, Charged, and Plunge Attacks" : parent2.textContent = ""
    })
}

export function ShimenawaBuffs(toggleDiv){
    
    let toggle = document.getElementById(toggleDiv).value;
    let buffs =  [
        {Type: "NADmg", Value: toggle ? 0.5: 0},
        {Type: "CADmg", Value: toggle  ? 0.5 : 0} 
    ]
    return buffs

}