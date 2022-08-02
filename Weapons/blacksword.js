export function Blacksword(set){

    // divs to throw out stuff in 

    let parent1
    let parent2

    // we get passed the "set" string which tells us the set to throw the stacks dropdown in
    
    set === "one" ? (parent1 = document.getElementById("set-one-info1"), parent2 = document.getElementById("set-one-info2")) : 
    (parent1 = document.getElementById("set-two-info1"), parent2 = document.getElementById("set-two-info2"))
         

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
    
    