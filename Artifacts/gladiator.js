export function Gladiator4pDisplay(parent1, parent2){

    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "35% Bonus Damage to Normal Attacks"
}

export function Gladiator4pBuffs(){
    let buffs =  [
        {Type: "NABonus", Value: 0.35},
    ]
    return buffs
}