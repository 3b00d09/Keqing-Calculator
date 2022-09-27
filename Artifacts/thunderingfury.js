export function ThunderingFuryDisplay2p(parent1, parent2){

    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "15% Bonus Electro Damage"
}


export function ThunderingFuryDisplay4p(parent1, parent2){
    // empty the parent from previous whatever
    parent1.textContent = ""
    parent2.textContent = ""

    parent2.textContent = "20% Bonus Damage to Aggravate."

}

export function ThunderingFuryBuffs(piece){

    let buffs;

    if (piece === "2piece"){
        buffs =  [
            {Type: "ElectroDmg", Value: 0.15},
        ]
    }
    else{
        buffs = [
            {Type: "ReactionBonus", Value: 0.2},
        ]
    }

    return buffs
}