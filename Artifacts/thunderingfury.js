export function ThunderingFuryDisplay(parent1, parent2){

    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "15% Bonus Electro Damage"
}

export function ThunderingFuryBuffs(){
    let buffs =  [
        {Type: "ElectroDmg", Value: 0.15},
    ]
    return buffs
}