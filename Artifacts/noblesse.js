export function NoblesseDisplay(parent1, parent2){

    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "20% Bonus Burst Damage"
}

export function NoblesseBuffs(){
    let buffs =  [
        {Type: "BurstBonus", Value: 0.2},
    ]
    return buffs
}