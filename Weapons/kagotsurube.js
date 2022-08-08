
export function KagotsurubeDisplay(parent1, parent2){


    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Weapon passive proc + 15% ATK";
    parent2.appendChild(label)

}

export function KagotsurubeBuffsSetOne(CharacterStats){

    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)

    let enemyRes = 0.9;
    let enemyDef = 0.5;

    let WeaponProc = (CharacterStats.ATK * 1.8 ) * (1 + CharacterStats.PhysDmg) 
    * cv * enemyRes * enemyDef

    let baseAttack = parseInt(document.getElementById("baseatk").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack * 0.15},
        {Type: "WeaponProc", Value: WeaponProc}
    ]
    return buffs

}

export function KagotsurubeBuffsSetTwo(CharacterStats){

    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)

    let enemyRes = 0.9;
    let enemyDef = 0.5;

    let WeaponProc = (CharacterStats.ATK * 1.8 ) * (1 + CharacterStats.PhysDmg) 
    * cv * enemyRes * enemyDef

    let baseAttack = parseInt(document.getElementById("baseatk2").value)

    let buffs = [
        {Type: "ATK", Value: baseAttack * 0.15},
        {Type: "WeaponProc", Value: WeaponProc}
    ]
    return buffs
}