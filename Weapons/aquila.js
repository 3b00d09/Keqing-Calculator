export function AquilaDisplay(parent1, parent2){

        
    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "41.3% Phys DMG Bonus. Include A Passive Proc in Rotation Damage";
    parent2.appendChild(label)
}
    
export function AquilaBuffsSetOne(CharacterStats){

    let refinement = document.getElementById("weapon-refines").value;

    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)

    let enemyRes = 0.9;
    let enemyDef = 0.5;
    
    // need to add aquila phys bonus here because character stats get the phys bonus AFTER weapon proc is calc'd 

    let WeaponProc = (CharacterStats.ATK * (2 + (0.3 * refinement))) * (1 + (CharacterStats.PhysDmg + 0.413)) 
    * cv * enemyRes * enemyDef


    console.log(WeaponProc)

    let buffs = [
        {Type: "WeaponProc", Value: WeaponProc},
        {Type: "PhysDmg", Value: 0.413}
    ]
    return buffs
}

export function AquilaBuffsSetTwo(CharacterStats){

    let refinement = document.getElementById("weapon-refines2").value;

    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)
    let enemyRes = 0.9;
    let enemyDef = 0.5;
    
    let WeaponProc = (CharacterStats.ATK * (2 + (0.3 * refinement))) * (1 + (CharacterStats.PhysDmg+ 0.413)) 
    * cv * enemyRes * enemyDef

    let buffs = [
        {Type: "WeaponProc", Value: WeaponProc},
        {Type: "PhysDmg", Value: 0.413}
    ]
    return buffs
}