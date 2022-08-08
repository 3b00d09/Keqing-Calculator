export function Blacksword(parent1, parent2){
         

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Bonus Damage to Normal and Charged Attacks.";
    parent2.appendChild(label)
}
    

export function BlackswordBuffSetOne(){
    
    let refinement = document.getElementById("weapon-refines").value;

    let buffs =  [ 
        {Type: "NABonus", Value: 0.2 + (0.05 * refinement)}, 
        {Type: "CABonus", Value: 0.2 + (0.05 * refinement)}
    ]

    return buffs
}

export function BlackswordBuffSetTwo(){
    
    let refinement = document.getElementById("weapon-refines2").value;

    let buffs =  [ 
        {Type: "NABonus", Value: 0.2 + (0.05 * refinement)}, 
        {Type: "CABonus", Value: 0.2 + (0.05 * refinement)}
    ]

    return buffs
}
    
    