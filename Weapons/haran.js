
export function HaranDisplay(selectID, parent1, parent2){


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

export function HaranBuffsSetOne(){

    let weaponStacks = document.getElementById("set-one-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines").value;

    let buffs = [
        {Type: "ElectroDmg", Value: 0.12 + (0.03 * refinement)},
        {Type: "NABonus", Value: weaponStacks * (0.2 + (refinement * 0.05))}
    ]
    return buffs

}

export function HaranBuffsSetTwo(){

    let weaponStacks = document.getElementById("set-two-weapon-stacks").value;
    let refinement = document.getElementById("weapon-refines2").value;

    let buffs = [
        {Type: "ElectroDmg", Value: 0.12 + (0.03 * refinement)},
        {Type: "ElectroDmg", Value: weaponStacks == 3 ? (0.28 + (refinement * 0.07)) : 
        (weaponStacks * (0.08 + refinement * 0.02))}
    ]
    return buffs
}