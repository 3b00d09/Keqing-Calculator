export function ThundersootherDisplay4p(selectID, parent1, parent2){
     
    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Enemy Infliced with Electro";
    parent1.appendChild(label)

    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = "electro-present";
    check.id = selectID;
    check.className = "artifact-4p-toggle"
    check.checked = true
    parent1.appendChild(check)
    
    parent2.textContent = "50% Bonus Damage to enemies affected by Electro"

    document.getElementById(selectID).addEventListener("change", (e) =>{
        
        e.target.checked ? parent2.textContent = "50% Bonus Damage to enemies affected by Electro" : parent2.textContent = ""
    })
}

export function ThundersootherBuffs(toggleDiv){
    
    let toggle = document.getElementById(toggleDiv).checked;
    let buffs =  [
        {Type: "AllDMG", Value: toggle ? 0.5: 0},
    ]
    return buffs

}