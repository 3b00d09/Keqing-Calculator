import { MistsplitterStacks } from "./mistsplitter.js";

// add support for talents 8 through 10 eventually, maybe 10 to 13? 

const N1_Talent = [0.4102, 0.4436, 0.477, 0.5247, 0.5581, 0.5962, 0.6487, 0.7012, 0.7537, 0.8109, 0.8681, 0.9254, 0.9826];
const CA_Talent = [1.628, 1.7605, 1.893, 2.0823, 2.2148, 2.3663, 2.5745, 2.7827, 2.9909, 3.2181, 3.4453, 3.6724, 3.8996 ];
const Stiletto_Talent = [0.504, 0.5418, 0.5796, 0.63, 0.6678, 0.7056, 0.756, 0.8064, 0.8568, 0.9072, 0.9576, 1.008, 1.071];
const Recast_Talent = [1.68, 1.806, 1.932, 2.1, 2.226, 2.352, 2.52, 2.688, 2.856, 3.024, 3.192, 3.36, 3.57];
const Burst_Talent = [4.688, 5.0396, 5.3912, 5.86, 6.2116, 6.5632, 7.032, 7.5008, 7.9696, 8.4384, 8.9072, 9.406, 9.962];

// need to find a way to reset stats every time a user calcs, wep buffs are being carried over (or are they? idk)
const CharacterStats = {
    Atk: 0,
    CritRate: 0,
    CritDmg: 0,
    ElectroDmg: 0,
    PhysDmg: 0,
    NABonus: 0,
    CABonus: 0,
    SkillBonus: 0,
    BurstBonus: 0,
    NATalent: 1,
    CATalent: 1,
    SkillTalentCast: 1,
    SkillTalentRecast: 1,
    BurstTalent: 1,
}

let weaponToggle = false;
let artifactToggle = false;

const Weapons = {
    Mistsplitter:{
        secondStatType: "CritDmg",
        secondStatValue: 0.441,
        buffs: [ 
            {Type: "ElectroDmg", Value: [0.12]}, 
            {Type: "ElectroDmg", Value: [0, 0.08, 0.16, 0.28]}
        ],
        stacks1(){
            let p1 = document.getElementById("set-one-info2");
            MistsplitterStacks("mistsplitter-stacks1", p1)
        },
        stacks2(){
            let p1 = document.getElementById("set-two-info2")
            MistsplitterStacks("mistsplitter-stacks2", p1)
        }
    },

    SummitShaper:{
        buffs: [
            {Type: "ATK%", Value: weaponToggle ? [0, 0.08, 0.16, 0.24, 0.32, 0.4] : [0, 0.04, 0.08, 0.12, 0.16, 0.20]}, 
        ]
    },

    LionsRoar:{
        buffs: [
            {Type: "AllDMG", Value: [weaponToggle ? 0.4 : 0]}, 
        ]
    },

    BlackSword:{
        secondStatType: "CritRate",
        secondStatValue: 0.276,
        buffs: [ 
            {Type: "NABonus", Value: [0.2]}, 
            {Type: "CABonus", Value: [0.2]}
        ] 
    },
    
    BlackcliffLongsword:{
        secondStatType: "CritDmg",
        secondStatValue: 0.368,
        buffs: [
            {Type: "ATK%", Value: [0, 0.12, 0.24, 0.36]}, 
        ]
    },

    PrototypeRancour:{
        secondStatType: "PhysDmg",
        secondStatValue: 0.345,
        buffs:[
            {Type:"ATK%", Value:[0, 0.04, 0.08, 0.12, 0.16]}
        ]
    }
}

const Artifacts = {

    ThunderingFury2p:{
        buffs:[
            {Type:"ElectroDmg", Value:[0.15]}
        ]
    },

    PaleFlame2p:{
        buffs:[
            {Type:"PhysDmg", Value:[0.25]}
        ]
    },

    BSC22p:{
        buffs:[
            {Type:"PhysDmg", Value:[0.25]}
        ]
    },

    Noblesse2p:{
        buffs:[
            {Type:"BurstBonus", Value:[0.2]}
        ]
    },

    Thundersoother4p:{
        buffs:[
            {Type:"AllDmg", Value:[artifactToggle ? 0.50 : 0]}
        ]
    },

    Gladiator4p:{
        buffs:[
            {Type:"NABonus", Value:[0.35]}
        ]
    },

    Shimenawa4p:{
        buffs: [ 
            {Type: "NABonus", Value: [0.5]}, 
            {Type: "CABonus", Value: [0.5]}
        ]
    },

    // PaleFlame4p:{
    //     buffs:[
    //         {Type:"PhysDmg", Value:[artifactToggle ? 0.25 : 0]},
    //         {Type:"ATK%", Value:[artifactToggle ? ]}
    //     ]
    // }
}

let damage = [];
let pos = 0;
let weapon;
let artifact2p;
let artifact4p;


let Rotation1, Rotation2;
let Aquila1 = 0, Aquila2 = 0;


window.onload = function(){

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

    
    document.getElementById("weapon").addEventListener("change", (e) =>{

        weapon = e.currentTarget.value;

        if (weapon in Weapons){
            weapon = Weapons[`${weapon}`]
            weapon.stacks1() 
        }

    });

    document.getElementById("weapon2").addEventListener("change", (e) =>{

        weapon = e.currentTarget.value;

        if (weapon in Weapons){
            weapon = Weapons[`${weapon}`]
            weapon.stacks2() 
        }

    });

    document.getElementById("artifacts-2piece-set1").addEventListener("change", (e) =>{
        artifact2p = e.currentTarget.value
        if (artifact2p in Artifacts){
            artifact2p = Artifacts[`${artifact2p}`]
        }
    });

    document.getElementById("artifacts-4piece-set1").addEventListener("change", (e) =>{
        artifact4p = e.currentTarget.value
        if (artifact4p in Artifacts){
            artifact4p = Artifacts[`${artifact4p}`]
        }
    });

}

function generate_stacks(select_id,stacks,p1,p2){

    let select = document.createElement("select");
    select.id = select_id;
    
    for (let i = 0; i < stacks; i++){
    let y = document.createElement("option");
    y.value = i;
    y.text = "%s Stacks".replace("%s", i);
    select.appendChild(y);
    }

    if (select_id == "summit-stacks"){
        let linebreak = document.createElement("br");
        p2.appendChild(linebreak);
        p2.appendChild(select);
        document.getElementById("refine_row").style.marginTop = "1rem";
    }
    
    else{
        p2.appendChild(select);
    }
}

function GetValues(){
    GetValues1();
    
}

function GetValues1(){

    let refinement;

    // get character stats
    CharacterStats.Atk = parseFloat(document.getElementById("atk").value);
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


    //cv = 1 + (cr * cd);

    let stacks = 0;

    // add weapon buffs
    try{
        weapon.buffs.forEach((buff) =>{
            CharacterStats[`${buff.Type}`] += buff.Value[stacks]
        })
    }
    catch(err){
        console.log("No weapon")
    }
    

    
    // add 2-piece artifact buff

    try{
        artifact2p.buffs.forEach((buff) =>{
            CharacterStats[`${buff.Type}`] += buff.Value[0]
        })
        
    }

    catch(err){
        console.log("No first set bonus detected")
    }

    
    // add 4-piece artifact buff
    try{
        artifact4p.buffs.forEach((buff) =>{
            CharacterStats[`${buff.Type}`] += buff.Value[0]
        })
    }
    catch(err){
        console.log("No second set bonus detected")
    }


    console.log(CharacterStats)
    

    calc();
}


function calc (){
    console.log("DN");
    let cv = 1 + (CharacterStats.CritDmg * CharacterStats.CritRate)
    let enemyRes = 0.9;
    let enemyDef = 0.5;
    
    let N1 = (CharacterStats.Atk * CharacterStats.NATalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.NABonus)) * 
    cv * enemyRes * enemyDef

    let CA = (CharacterStats.Atk * CharacterStats.CATalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.CABonus)) * 
    cv * enemyRes * enemyDef

    let Stilleto = (CharacterStats.Atk * CharacterStats.SkillTalentCast) * (1 + (CharacterStats.ElectroDmg + CharacterStats.SkillBonus)) * 
    cv * enemyRes * enemyDef

    let SkillRecast = (CharacterStats.Atk * CharacterStats.SkillTalentRecast) * (1 + (CharacterStats.ElectroDmg + CharacterStats.SkillBonus)) * 
    cv * enemyRes * enemyDef

    let Burst = (CharacterStats.Atk * CharacterStats.BurstTalent) * (1 + (CharacterStats.ElectroDmg + CharacterStats.BurstBonus)) * 
    cv * enemyRes * enemyDef

    console.log(N1)
    console.log(CA)
    console.log(Stilleto)
    console.log(SkillRecast)
    console.log(Burst)
}

function basicView(){
    document.querySelector("#advanced-view").style.display = "none";
    document.querySelector("#basic-view").style.display = "block";
}

function advancedView(){
    document.querySelector("#basic-view").style.display = "none";
    document.querySelector("#advanced-view").style.display = "block";
}


