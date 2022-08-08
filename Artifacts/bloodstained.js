export function BloodstainedDisplay(parent1, parent2){

    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "25% Bonus Physical Damage"

}

export function BloodstainedBuffs(){
    let buffs =  [
        {Type: "PhysDmg", Value: 0.25},
    ]
    return buffs
}