function LionsRoarToggle(selectID, parent1, parent2){

    // empty the parent from previous stack toggles
    parent1.textContent = ""
    parent2.textContent = ""

    let label = document.createElement("label");
    label.textContent = "Enemy Influcted With Electro";
    parent1.appendChild(label)

    let check = document.createElement("input");
    check.type = "checkbox";
    check.name = "shielded";
    check.id = "summit-shield-check-set1";
    check.className = "weapon-toggle"
    check.checked = true
    parent1.appendChild(check)

}
    
export {LionsRoarToggle}
    
    