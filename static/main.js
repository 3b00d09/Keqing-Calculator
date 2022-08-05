
import { MistsplitterBuffsSetOne, MistsplitterBuffsSetTwo, MistsplitterDisplay } from "../Weapons/mistsplitter.js";
import { SummitShaperStacks, SummitBuffsSetOne, SummitBuffsSetTwo } from "../Weapons/summitshaper.js";
import { LionsRoarToggle, LionsRoarBuffSetOne, LionsRoarBuffSetTwo } from "../Weapons/lionsroar.js";
import { Blacksword, BlackswordBuffSetOne, BlackswordBuffSetTwo } from "../Weapons/blacksword.js";
import { AquilaDisplay,  AquilaBuffsSetOne, AquilaBuffsSetTwo } from "../Weapons/aquila.js";
import { BlackcliffStacks, BlackcliffBuffSetOne, BlackcliffBuffSetTwo } from "../Weapons/blackcliff.js";
import { RancourStacks, RancourBuffSetOne, RancourBuffSetTwo } from "../Weapons/rancour.js"

import { PaleFlameDisplay2p, PaleFlameDisplay4p, PaleFlameBuffs } from "../Artifacts/paleflame.js";
import { ShimenawaDisplay4p, ShimenawaBuffs } from "../Artifacts/shimenawa.js";
import { ThundersootherDisplay4p ,ThundersootherBuffs } from "../Artifacts/thundersoother.js";
import { ThunderingFuryBuffs, ThunderingFuryDisplay } from "../Artifacts/thunderingfury.js";
import { NoblesseBuffs, NoblesseDisplay } from "../Artifacts/noblesse.js";
import { BloodstainedBuffs, BloodstainedDisplay } from "../Artifacts/bloodstained.js";
import { Gladiator4pBuffs, Gladiator4pDisplay } from "../Artifacts/gladiator.js";




const N1_Talent = [0.4102, 0.4436, 0.477, 0.5247, 0.5581, 0.5962, 0.6487, 0.7012, 0.7537, 0.8109, 0.8681, 0.9254, 0.9826];
const CA_Talent = [1.628, 1.7605, 1.893, 2.0823, 2.2148, 2.3663, 2.5745, 2.7827, 2.9909, 3.2181, 3.4453, 3.6724, 3.8996 ];
const Stiletto_Talent = [0.504, 0.5418, 0.5796, 0.63, 0.6678, 0.7056, 0.756, 0.8064, 0.8568, 0.9072, 0.9576, 1.008, 1.071];
const Recast_Talent = [1.68, 1.806, 1.932, 2.1, 2.226, 2.352, 2.52, 2.688, 2.856, 3.024, 3.192, 3.36, 3.57];
const Burst_Talent = [4.688, 5.0396, 5.3912, 5.86, 6.2116, 6.5632, 7.032, 7.5008, 7.9696, 8.4384, 8.9072, 9.406, 9.962];


loadTalents()
attachEventListeners()


const Weapons = {
    Mistsplitter:{
        DisplayInfoSetOne(div1, div2){
            MistsplitterDisplay("set-one-weapon-stacks", div1, div2)
        },
        DisplayInfoSetTwo(div1, div2){
            MistsplitterDisplay("set-two-weapon-stacks", div1, div2)
        },
        buffsSetOne(){
            let buffs = MistsplitterBuffsSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = MistsplitterBuffsSetTwo()
            return buffs
        }
    },

    SummitShaper:{
        DisplayInfoSetOne(){
            SummitShaperStacks("set-one-weapon-stacks", "set-one-weapon-toggle", "one")
        },
        DisplayInfoSetTwo(){
            SummitShaperStacks("set-two-weapon-stacks", "set-two-weapon-toggle", "two")
        },
        buffsSetOne(){
            let buffs = SummitBuffsSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = SummitBuffsSetTwo()
            return buffs
        }
    },

    LionsRoar:{
        DisplayInfoSetOne(){
            LionsRoarToggle("set-one-weapon-toggle", "one")
        },
        DisplayInfoSetTwo(){
            LionsRoarToggle("set-two-weapon-toggle", "two")
        },
        buffsSetOne(){
            let buffs = LionsRoarBuffSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = LionsRoarBuffSetTwo()
            return buffs
        }
    },

    BlackSword:{
        DisplayInfoSetOne(){
            Blacksword("one")
        },
        DisplayInfoSetTwo(){
            Blacksword("two")
        },
        buffsSetOne(){
            let buffs = BlackswordBuffSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = BlackswordBuffSetTwo()
            return buffs
        }
    },

    Aquila:{
        DisplayInfoSetOne(){
            AquilaDisplay("one")
        },
        DisplayInfoSetTwo(){
            AquilaDisplay("two")
        },
        buffsSetOne(CharacterStats){
            let buffs = AquilaBuffsSetOne(CharacterStats)
            return buffs
        },
        buffsSetTwo(CharacterStats){
            let buffs = AquilaBuffsSetTwo(CharacterStats)
            return buffs
        }
    },
    
    BlackcliffLongsword:{
        DisplayInfoSetOne(){
            BlackcliffStacks("set-one-weapon-stacks", "one")
        },
        DisplayInfoSetTwo(){
            BlackcliffStacks("set-two-weapon-stacks", "two")
        },
        buffsSetOne(){
            let buffs = BlackcliffBuffSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = BlackcliffBuffSetTwo()
            return buffs
        }

    },

    PrototypeRancour:{
        DisplayInfoSetOne(){
            RancourStacks("set-one-weapon-stacks", "one")
        },
        DisplayInfoSetTwo(){
            RancourStacks("set-two-weapon-stacks", "two")
        },
        buffsSetOne(){
            let buffs = RancourBuffSetOne()
            return buffs
        },
        buffsSetTwo(){
            let buffs = RancourBuffSetTwo()
            return buffs
        }
    }
}

const Artifacts = {

    ThunderingFury2p:{
        DisplayInfo(set, div1, div2){
            ThunderingFuryDisplay(div1, div2)
        },
        buffs(set){
            let buffs = ThunderingFuryBuffs()
            return buffs
        }
    },

    PaleFlame2p:{
        DisplayInfo(set, div1, div2){
            PaleFlameDisplay2p(div1, div2)
        },
        buffs(set){
            let buffs = PaleFlameBuffs("2piece")
            return buffs
        },
    },

    BSC2p:{
        DisplayInfo(set, div1, div2){
            BloodstainedDisplay(div1, div2)
        },
        buffs(set){
            let buffs = BloodstainedBuffs()
            return buffs
        }
    },

    Noblesse2p:{
        DisplayInfo(set, div1, div2){
            NoblesseDisplay(div1, div2)
        },
        buffs(set){
            let buffs = NoblesseBuffs()
            return buffs
        }
    },
        Thundersoother4p:{
            DisplayInfo(set, div1, div2){
                let toggleID;
                set === "one" ? toggleID = "set-one-artifact-4p-toggle" : toggleID = "set-two-artifact-4p-toggle"
                ThundersootherDisplay4p(toggleID, div1, div2)
            },
            buffs(set){
                let toggleDiv;
                set === "one" ? toggleDiv = "set-one-artifact-4p-toggle" : toggleDiv = "set-two-artifact-4p-toggle"
                let buffs = ThundersootherBuffs(toggleDiv)
                return buffs
            }
    },

    Gladiator4p:{
        DisplayInfo(set, div1, div2){
            Gladiator4pDisplay(div1, div2)
        },
        buffs(set){
            let buffs = Gladiator4pBuffs()
            return buffs
        }
    },

    Shimenawa4p:{
        DisplayInfo(set, div1, div2){
            let toggleID;
            set === "one" ? toggleID = "set-one-artifact-4p-toggle" : toggleID = "set-two-artifact-4p-toggle"
            ShimenawaDisplay4p(toggleID, div1, div2)
        },
        buffs(set){
            let toggleDiv;
            set === "one" ? toggleDiv = "set-one-artifact-4p-toggle" : toggleDiv = "set-two-artifact-4p-toggle"
            let buffs = ShimenawaBuffs(toggleDiv)
            return buffs
        }
    },

    PaleFlame4p:{
        DisplayInfo(set, div1 , div2){
            let stacksID; 
            set === "one" ? stacksID = "set-one-artifact-4p-stacks" : stacksID = "set-two-artifact-4p-stacks"
            PaleFlameDisplay4p(stacksID, div1, div2)
        },
        buffs(set){
            let toggleDiv;
            set === "one" ? toggleDiv = "set-one-artifact-4p-stacks" : toggleDiv = "set-two-artifact-4p-stacks"
            let buffs = PaleFlameBuffs("4piece", toggleDiv)
            return buffs
        },
    }
}

// set one stuff
let weapon;
let artifact2p;
let artifact4p;

// set two stuff
let weapon2;
let artifact2p2;
let artifact4p2;

function attachEventListeners(){

    document.getElementById("weapon").addEventListener("change", (e) =>{

        weapon = e.currentTarget.value;

        let div1 = document.getElementById("set-one-info1")
        let div2 = document.getElementById("set-one-info2")

        if (weapon in Weapons){
            weapon = Weapons[`${weapon}`]
            document.getElementById("refine-set1").style.display = "flex";
            weapon.DisplayInfoSetOne(div1, div2) 
        }
        else{
            document.getElementById("refine-set1").style.display = "none";
            div1.textContent = "";
            div2.textContent = "";
            weapon = false
        }

    });

    document.getElementById("weapon2").addEventListener("change", (e) =>{

        weapon2 = e.currentTarget.value;
        
        let div1 = document.getElementById("set-two-info1")
        let div2 = document.getElementById("set-two-info2")

        if (weapon2 in Weapons){
            weapon2 = Weapons[`${weapon2}`]
            document.getElementById("refine-set2").style.display = "flex";
            weapon2.DisplayInfoSetTwo(div1, div2) 
        }
        else{
            document.getElementById("refine-set2").style.display  = "none";
            div1.textContent = "";
            div2.textContent = "";
            weapon2 = false

        }

    });

    document.getElementById("artifacts-2piece-set1").addEventListener("change", (e) =>{
        artifact2p = e.currentTarget.value

        let div1 = document.getElementById("artifacts-2p-set1-1")
        let div2 = document.getElementById("artifacts-2p-set1-2")

        if (artifact2p in Artifacts){
            artifact2p = Artifacts[`${artifact2p}`]
            artifact2p.DisplayInfo("one", div1, div2)
        }
        else{
            div1.textContent = ""
            div2.textContent = ""
            artifact2p = false
        }
    });

    document.getElementById("artifacts-4piece-set1").addEventListener("change", (e) =>{
        artifact4p = e.currentTarget.value

        let div1 = document.getElementById("artifacts-4p-set1-1")
        let div2 = document.getElementById("artifacts-4p-set1-2")

        if (artifact4p in Artifacts){
            artifact4p = Artifacts[`${artifact4p}`]
            artifact4p.DisplayInfo("one", div1, div2)
        }
        else{
            div1.textContent = ""
            div2.textContent = ""
            artifact4p = false
        }
    });

    document.getElementById("artifacts-2piece-set2").addEventListener("change", (e) =>{
        artifact2p2 = e.currentTarget.value

        let div1 = document.getElementById("artifacts-2p-set2-1")
        let div2 = document.getElementById("artifacts-2p-set2-2")

        if (artifact2p2 in Artifacts){
            artifact2p2 = Artifacts[`${artifact2p2}`]
            
            artifact2p2.DisplayInfo("two", div1, div2)
        } 

        else{
            div1.textContent = ""
            div2.textContent = ""
            artifact2p2 = false
        }
    });

    document.getElementById("artifacts-4piece-set2").addEventListener("change", (e) =>{
        artifact4p2 = e.currentTarget.value

        let div1 = document.getElementById("artifacts-4p-set2-1")
        let div2 = document.getElementById("artifacts-4p-set2-2")

        if (artifact4p2 in Artifacts){
            artifact4p2 = Artifacts[`${artifact4p2}`]

            artifact4p2.DisplayInfo("two", div1, div2)
        } 

        else{
            div1.textContent = ""
            div2.textContent = ""
            artifact4p2 = false
        }
    });



    document.getElementById("calc-button").addEventListener("click", async () =>{
        
        GetValues1()
        GetValues2()

        await GetDifference()
    });

}

function loadTalents(){
        // cba do this in html its like a million lines
        let talent_id = ["normal_talent", "skill_talent", "burst_talent"];
        let talent_id_set2 = ["normal_talent_set2", "skill_talent_set2", "burst_talent_set2"];
        
        for (let i = 0; i < 3; i++){
            let select = document.getElementById(talent_id[i]);
            for (let j = 0; j < 13; j++){
                let y = document.createElement("option");
                y.value = j;
                y.text = "Talent Level %s".replace("%s", j + 1); 
                select.appendChild(y);
            }
        }
    
        for (let i = 0; i < 3; i++){
            let select = document.getElementById(talent_id_set2[i]);
            for (let j = 0; j < 13; j++){
                let y = document.createElement("option");
                y.value = j;
                y.text = "Talent Level %s".replace("%s", j + 1); 
                select.appendChild(y);
            }
        }
}

// return fresh set of character stats 

function ResetStats(){
    const CharacterStats = {
        ATK: 0,
        CritRate: 0,
        CritDmg: 0,
        ElectroDmg: 0,
        PhysDmg: 0,
        NABonus: 0,
        CABonus: 0,
        SkillBonus: 0,
        BurstBonus: 0,
        AllDMG: 0,
        NATalent: 1,
        CATalent: 1,
        SkillTalentCast: 1,
        SkillTalentRecast: 1,
        BurstTalent: 1,
        WeaponProc: 0
    }

    return CharacterStats;
}


function GetValues1(){

    let CharacterStats = ResetStats();

    // get character stats
    CharacterStats.ATK = parseFloat(document.getElementById("atk").value);
    CharacterStats.CritRate = parseFloat(document.getElementById("cr").value) / 100;
    CharacterStats.CritDmg = parseFloat(document.getElementById("cd").value) / 100;
    let GobletType = document.getElementById("goblet").value;
    GobletType === "elec" ? (CharacterStats.ElectroDmg = 0.466, CharacterStats.PhysDmg = 0) 
    : (CharacterStats.PhysDmg = 0.583, CharacterStats.ElectroDmg = 0);

    // get character talents
    CharacterStats.NATalent = N1_Talent[parseInt(document.getElementById("normal_talent").value)];
    CharacterStats.CATalent = CA_Talent[parseInt(document.getElementById("normal_talent").value)];
    CharacterStats.SkillTalentCast = Stiletto_Talent[parseInt(document.getElementById("skill_talent").value)];
    CharacterStats.SkillTalentRecast = Recast_Talent[parseInt(document.getElementById("skill_talent").value)];
    CharacterStats.BurstTalent = Burst_Talent[parseInt(document.getElementById("burst_talent").value)];

    
    // for damage display (crit vs non crit vs average damage)
    let display = document.getElementById("display").value;

    if (display === "crit"){
        CharacterStats.CritRate = 1
    }
    else if(display === "no-crit"){
        CharacterStats.CritRate = 0
    }
    else{
        CharacterStats.CritRate = parseFloat(document.getElementById("cr").value) / 100;
    }


    // add weapon buffs
    if (weapon){

        if (weapon === Weapons.Aquila){ 

            let weaponBuffs = weapon.buffsSetOne(CharacterStats)
            weaponBuffs.forEach((buff) =>{
                CharacterStats[`${buff.Type}`] += buff.Value
            })
        }
        else{
            let weaponBuffs = weapon.buffsSetOne()
            weaponBuffs.forEach((buff) =>{
                CharacterStats[`${buff.Type}`] += buff.Value
            })
        }
    }

    // add 2-piece artifact buff
    if (artifact2p){
        let artifactBuffs = artifact2p.buffs("one")
        artifactBuffs.forEach((buff) =>{
            CharacterStats[`${buff.Type}`] += buff.Value
        })
    }

    // add 4-piece artifact buff
    if (artifact4p){
        let artifactBuffs = artifact4p.buffs("one")
        artifactBuffs.forEach((buff) =>{
            CharacterStats[`${buff.Type}`] += buff.Value
        })
    }
    

    let damage = calc(CharacterStats, GobletType);

    viewSetOneDamage(damage)
}

function GetValues2(){
    let CharacterStats = ResetStats();

    // get character stats
    CharacterStats.ATK = parseFloat(document.getElementById("atk2").value);
    CharacterStats.CritRate = parseFloat(document.getElementById("cr2").value) / 100;
    CharacterStats.CritDmg = parseFloat(document.getElementById("cd2").value) / 100;
    let GobletType = document.getElementById("goblet2").value;
    GobletType === "elec" ? (CharacterStats.ElectroDmg = 0.466, CharacterStats.PhysDmg = 0) 
    : (CharacterStats.PhysDmg = 0.583, CharacterStats.ElectroDmg = 0);

    // get character talents
    CharacterStats.NATalent = N1_Talent[parseInt(document.getElementById("normal_talent_set2").value)];
    CharacterStats.CATalent = CA_Talent[parseInt(document.getElementById("normal_talent_set2").value)];
    CharacterStats.SkillTalentCast = Stiletto_Talent[parseInt(document.getElementById("skill_talent_set2").value)];
    CharacterStats.SkillTalentRecast = Recast_Talent[parseInt(document.getElementById("skill_talent_set2").value)];
    CharacterStats.BurstTalent = Burst_Talent[parseInt(document.getElementById("burst_talent_set2").value)];

    // for damage display (crit vs non crit vs average damage)
    let display = document.getElementById("display-set2").value;

    if (display === "crit"){
        CharacterStats.CritRate = 1
    }
    else if(display === "no-crit"){
        CharacterStats.CritRate = 0
    }
    else{
        CharacterStats.CritRate = parseFloat(document.getElementById("cr2").value) / 100;
    }

        // add weapon buffs
        if (weapon2){
            if (weapon2 === "Aquila"){
                let weaponBuffs = weapon2.buffsSetTwo(CharacterStats)
                weaponBuffs.forEach((buff) =>{
                    CharacterStats[`${buff.Type}`] += buff.Value
                })
            }
            else{
                let weaponBuffs = weapon2.buffsSetTwo()
                weaponBuffs.forEach((buff) =>{
                    CharacterStats[`${buff.Type}`] += buff.Value
                })
            }
        }
    
        // add 2-piece artifact buff
        if (artifact2p2){
            let artifactBuffs = artifact2p2.buffs("two")
            artifactBuffs.forEach((buff) =>{
                CharacterStats[`${buff.Type}`] += buff.Value
            })
        }
    
        // add 4-piece artifact buff
        if (artifact4p2){
            let artifactBuffs = artifact4p2.buffs("two")
            artifactBuffs.forEach((buff) =>{
                CharacterStats[`${buff.Type}`] += buff.Value
            })
        }

    
    let damage = calc(CharacterStats, GobletType);

    viewSetTwoDamage(damage)
}


function calc (CharacterStats, GobletType){
    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)
    let enemyRes = 0.9;
    let enemyDef = 0.5;

    let N1;
    let CA;

    if (GobletType === "elec"){
        N1 = (CharacterStats.ATK * CharacterStats.NATalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.NABonus + CharacterStats.AllDMG)) 
        * cv * enemyRes * enemyDef
    
        CA = (CharacterStats.ATK * CharacterStats.CATalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.CABonus)) * 
        cv * enemyRes * enemyDef
    }

    else{
        N1 = (CharacterStats.ATK * CharacterStats.NATalent) * (1 + (CharacterStats.PhysDmg + CharacterStats.NABonus + CharacterStats.AllDMG)) 
        * cv * enemyRes * enemyDef
    
        CA = (CharacterStats.ATK * CharacterStats.CATalent) * (1 + (CharacterStats.PhysDmg + CharacterStats.CABonus)) * 
        cv * enemyRes * enemyDef
    }
    

    let Stilleto = (CharacterStats.ATK * CharacterStats.SkillTalentCast) * (1 + (CharacterStats.ElectroDmg + CharacterStats.SkillBonus)) * 
    cv * enemyRes * enemyDef

    let SkillRecast = (CharacterStats.ATK * CharacterStats.SkillTalentRecast) * (1 + (CharacterStats.ElectroDmg + CharacterStats.SkillBonus)) * 
    cv * enemyRes * enemyDef

    let Burst = (CharacterStats.ATK * CharacterStats.BurstTalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.BurstBonus)) * 
    cv * enemyRes * enemyDef

    let rotationDamage = (5 * (N1 + CA)) + Stilleto + SkillRecast + Burst + CharacterStats.WeaponProc



    const Result = {
        N1: N1,
        CA: CA,
        Skill: Stilleto,
        Skill2: SkillRecast,
        Burst: Burst,
        WeaponProc: CharacterStats.WeaponProc,
        Total: rotationDamage
    }

    return Result;
}


function viewSetOneDamage(damage){
    document.querySelector("#hidden").style.display = "initial"

    document.querySelector("#NA-set1").textContent= Math.round(damage.N1)
    document.querySelector("#CA-set1").textContent = Math.round(damage.CA)
    document.querySelector("#E1-set1").textContent = Math.round(damage.Skill)
    document.querySelector("#E2-set1").textContent = Math.round(damage.Skill2)
    document.querySelector("#Q-set1").textContent = Math.round(damage.Burst)
    document.querySelector("#Total-set1").textContent = Math.round(damage.Total)
}

function viewSetTwoDamage(damage){
    document.querySelector("#hidden").style.display = "initial"

    document.querySelector("#NA-set2").textContent= Math.round(damage.N1)
    document.querySelector("#CA-set2").textContent = Math.round(damage.CA)
    document.querySelector("#E1-set2").textContent = Math.round(damage.Skill)
    document.querySelector("#E2-set2").textContent = Math.round(damage.Skill2)
    document.querySelector("#Q-set2").textContent = Math.round(damage.Burst)
    document.querySelector("#Total-set2").textContent = Math.round(damage.Total)
}

async function GetDifference(){


    let set1Damage = parseFloat(document.getElementById("Total-set1").textContent);
    let set2Damage = parseFloat(document.getElementById("Total-set2").textContent);
    let div = document.getElementById("difference");


    let difference = (set1Damage / set2Damage) * 100;
    difference = Math.round(difference)

    if (!isNaN(difference)){
        div.style.display = "initial"
        if (difference === 100){
            div.textContent = "Both sets deal equal damage."
        }
        else if (difference < 100){
            div.textContent = `Set one is weaker than set two by ${100 - difference}%`
        }
        else{
            div.textContent = `Set one is stronger than set two by ${difference - 100}%`
        }
    }

    
}


document.querySelectorAll(".basic-view-btn").forEach((btn) => {

    btn.addEventListener("click", () =>{
        document.querySelector("#about-view").style.display = "none";
        document.querySelector("#calculator-view").style.display = "block";
    })
})



document.querySelectorAll(".about-view-btn").forEach((btn) =>{
    btn.addEventListener("click", () =>{
        document.querySelector("#calculator-view").style.display = "none";
        document.querySelector("#about-view").style.display = "block";
    })

})

//on resize
window.addEventListener('resize',() => {
    if(window.innerWidth < 960){
        document.querySelector(".calcbody").classList.remove("container")
    }
    else{
        document.querySelector(".calcbody").classList.add("container")
    }
  });

