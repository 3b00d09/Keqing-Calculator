function Blacksword(parent1, parent2){

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Bonus Damage to Normal and Charged Attacks.";
    parent2.appendChild(label)
}
    
export {Blacksword}
    
    