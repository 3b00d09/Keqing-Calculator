export function PaleFlameDisplay2p(parent1, parent2){
        
    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label")
    label.textContent = "25% Bonus Physical Damage"
    parent2.appendChild(label)
}



export function PaleFlameDisplay4p(selectID, parent1, parent2){
     
    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let stacks = 2

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

export function PaleFlameBuffs(piece, stacksDiv){

    if (piece === "2piece"){
        let buffs = [
            {Type: "PhysDmg", Value: 0.25}
        ]
        return buffs
    }

    let setStacks = document.getElementById(stacksDiv).value;
    let baseAttack = parseInt(document.getElementById("baseatk").value);
    

    let buffs = [
        {Type: "ATK", Value: 0.09 * setStacks * baseAttack},
        {Type: "PhysDmg", Value: setStacks === 2 ? 0.5 : 0.25}
    ]
    return buffs

}