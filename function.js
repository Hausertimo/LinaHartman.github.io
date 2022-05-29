//#######################################################################################################################################
//                                                              Todoo in Africa
//#######################################################################################################################################
//when buying proficency add proficency 

//add subtract stats when item worn

//Function for Weapon Attack

//Add Trainings Goblin, Wolf, Skeleton, Mage, Banidt, Orc, Ogre, Giant, Dragon
//Add Twohanded support
//Inventory Weight(works withweight)

//add 8 weapon and 3 helmets, 3 boots, 6 bodypeaces (4erreihe)

//#######################################################################################################################################
//                                                          Testting
//#######################################################################################################################################

var equipped_0 = false, equipped_1 = false, equipped_2 = false, equipped_3 = false, equipped_4 = false;


    //Calculate AC
    switch (equipped_3){
        case false:         AC = Math.floor(10 + ((STAT_ARRAY[1]-10)/2)); break;
        case armorlight:    AC = 12+Math.floor(dex_mod); break;
        case armormedium:
        case platearmor:
    }

    if (equipped_2[4] == "shield"){AC+=equipped_2[1]}

    if (equipped_3 = false){ AC = 10 + ((STAT_ARRAY[1]-10)/2);}
    ACH = 10 + ARMORH + Shield;
    ACM = 10 + ARMORM + Shield;
    ACL = 10 + ARMORL + Shield + ((STAT_ARRAY[1]-10)/2);
    ACD = 10 + ((STAT_ARRAY[1]-10)/2);
  
    AC = Math.ceil(Math.max(ACH, ACM, ACL, ACD));

function testing(){
    //helmet
    switch (getchildidbyid('head')){
        case    false: equipped_0 = false;break;
        case "helmet": equipped_0 = helmet;break;
    }
     

    //Main Hand
    switch (getchildidbyid('main')){
        case false:         equipped_1 = false;         break;
        case "dagger":      equipped_1 = dagger;        break;
        case "shortsword":  equipped_1 = shortsword;    break;
        case "lightaxe":    equipped_1 = lightaxe;      break;
        case "lighthammer": equipped_1 = lighthammer;   break;
        case "rapier":      equipped_1 = rapier;        break;
        case "longsword":   equipped_1 = longsword;     break;
    }

    //Off Hand
    switch (getchildidbyid('off')){
        case false:         equipped_2 = false;         break;
        case "dagger":      equipped_2 = dagger;        break;
        case "shortsword":  equipped_2 = shortsword;    break;
        case "lightaxe":    equipped_2 = lightaxe;      break;
        case "lighthammer": equipped_2 = lighthammer;   break;
        case "rapier":      equipped_2 = rapier;        break;
        case "longsword":   equipped_2 = longsword;     break;
        case "shield":      equipped_2 = shield;        break;    
        }


    //Armor
    switch (getchildidbyid('armor')){
        case false: equipped_3 = false
        case "armorlight":  equipped_3 = armorlight;    break;
        case "armormedium": equipped_3 = armormedium;   break;
        case "platearmor":  equipped_3 = platearmor;    break;
        }


    //Boots
    switch (getchildidbyid('feet')){
        case false: equipped_4 = false
        case "boots": equipped_4 = boots
        }
}





//Get the Itemnames inside of eqquipped inventroy from innnerhtml string 
function getchildidbyid(id){
    if (readbyid(id) != ""){return(returnname(readbyid(id)))}else{return false}
}

function returnname(text){
    let pstart = text.search("vent,")+5;
    let pstop = text.search('">')-1;
    result = text.substr(pstart, (pstop - pstart))
    return result;
}



function test1(){
     testing()
   
}
    
function test2(){
        document.getElementById("devfeedback").innerHTML = "Dex Check = "+player_check("dex")
        
}
    
function test3(){
        document.getElementById("devfeedback").innerHTML = "Con Check = " + player_check("con")
    
}
    
function test4(){
       document.getElementById("devfeedback").innerHTML = "Int Check = " + player_check("int")
        console.log(int_mod)
}


var i_am_bool=false;


function hide(bool){

    switch(bool, id){
    case true:
    document.getElementById(id).style.visibility = "hidden";
    bool=false;
    break;  

    case false: 
    document.getElementById(id).style.visibility = "visible";
    bool=true;
    break;
    }
}

//#######################################################################################################################################
//                                                          Tools && Setup
//#######################################################################################################################################

var timeout =1000;
window.onload = setup;

function setup() {   
}

//ensures randomness >0
function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  
  //Sort Array
  function listsGetSortCompare(type, direction) {
    var compareFuncs = {
      'NUMERIC': function(a, b) {
          return Number(a) - Number(b); },
      'TEXT': function(a, b) {
          return a.toString() > b.toString() ? 1 : -1; },
      'IGNORE_CASE': function(a, b) {
          return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
    };
    var compare = compareFuncs[type];
    return function(a, b) { return compare(a, b) * direction; };
  }

function opacitybyid(a,b){document.getElementById(a).style.opacity = b}

setTimeout(function(){}, timeout);

function setopacitybyid(id, opacity){
    document.getElementById(id).style.opacity = opacity;
}

function uncheckbyid(id){
    document.getElementById(id).checked = false;
}

function checkbyid(id){
    document.getElementById(id).checked = true;
}

function getcheckboxbyid(id){
    return document.getElementById(id).checked;
}

function readbyid(id){
    return document.getElementById(id).innerHTML
}

//#######################################################################################################################################
//                                                          Stat Bar
//#######################################################################################################################################

var PT = 0, GP=200, PP=0, HP=0, AC=0, MP =0;

var STAT_ARRAY=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0], str_mod, dex_mod, con_mod, int_mod, psy_mod, cha_mod;

var PT, ACH, ACM, ACL, ACD, ARMORH = 0, ARMORM = 0, ARMORL = 0, Shield = 0, HPB = 0, PPB = 0, ACB = 0, MPB = 0, INV_SPACE = 0; STR_modifier = 0, DEX_modifier = 0;

setInterval(function updatev(){

        //choose higest AC
        ACH = 10 + ARMORH + Shield;
        ACM = 10 + ARMORM + Shield;
        ACL = 10 + ARMORL + Shield + ((STAT_ARRAY[1]-10)/2);
        ACD = 10 + ((STAT_ARRAY[1]-10)/2);
      
        AC = Math.ceil(Math.max(ACH, ACM, ACL, ACD));
    
    //calc HP
    HP = 5+Math.ceil((STAT_ARRAY[2] / 2))+HPB;
  
    //calc PP
    PP = 5+Math.ceil((STAT_ARRAY[4] / 2))+PPB;

    //calc MP
    MP = 5+Math.ceil((STAT_ARRAY[3] / 2))+MPB;

    //Set Inventory Space by str

    //Set Skill
    
    str_mod = Math.floor(((STAT_ARRAY[0]-10)/2+train_mod[0]))
    dex_mod = Math.floor(((STAT_ARRAY[1]-10)/2+train_mod[1]))
    con_mod = Math.floor(((STAT_ARRAY[2]-10)/2+train_mod[2]))
    int_mod = Math.floor(((STAT_ARRAY[3]-10)/2+train_mod[3]))
    psy_mod = Math.floor(((STAT_ARRAY[4]-10)/2+train_mod[4]))
    cha_mod = Math.floor(((STAT_ARRAY[5]-10)/2+train_mod[5])) 


    //set Body properties
    SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

    //Set Stats
    for(i=0;i<12;i++){
        if(i<=5)
            {document.getElementById('stat_'+i).innerHTML = STAT_ARRAY[i];}
        else if(i==6)
            {document.getElementById('stat_'+i).innerHTML = AC;}
        else if(i==7)
            {document.getElementById('stat_'+i).innerHTML = HP;}
        else if(i==8)
            {document.getElementById('stat_'+i).innerHTML = PP;}
        else if(i==9)
            {document.getElementById('stat_'+i).innerHTML = GP;}
        else if(i==10)
            {document.getElementById('stat_'+i).innerHTML = MP;}
        else if(i==11)
            {document.getElementById('stat_'+i).innerHTML = PT;}
    }
}, 50);
  
//#######################################################################################################################################
//                                                              Checks
//#######################################################################################################################################

var train_mod=[]; for(var i = 0; i<80; i++){train_mod[i]=0;}


//                  str,dex5
function player_check(mod){

switch (mod){
    case "str":return str_mod+train_mod[6]   + mathRandomInt(1,20);
    case "dex":return dex_mod+train_mod[7]   + mathRandomInt(1,20); 
    case "con":return con_mod+train_mod[8]   + mathRandomInt(1,20);
    case "int":return int_mod+train_mod[9]   + mathRandomInt(1,20);
    case "psy":return psy_mod+train_mod[10]  + mathRandomInt(1,20);
    case "cha":return cha_mod+train_mod[11]  + mathRandomInt(1,20);
}
}

function player_check(mod){

switch (mod){
    case "str": return str_mod+train_mod[12] + mathRandomInt(1,20);
    case "dex": return dex_mod+train_mod[13] + mathRandomInt(1,20); 
    case "con": return con_mod+train_mod[14] + mathRandomInt(1,20);
    case "int": return int_mod+train_mod[15] + mathRandomInt(1,20);
    case "psy": return psy_mod+train_mod[16] + mathRandomInt(1,20);
    case "cha": return cha_mod+train_mod[17] + mathRandomInt(1,20);


    case "athletic":        return str_mod+train_mod[30] + mathRandomInt(1,20);
    case "stealth":         return dex_mod+train_mod[31] + mathRandomInt(1,20);
    case "sleightofhand":   return dex_mod+train_mod[32] + mathRandomInt(1,20);
    case "acrobatics":      return dex_mod+train_mod[33] + mathRandomInt(1,20);
    case "drinking":        return con_mod+train_mod[34] + mathRandomInt(1,20);
    case "history":         return int_mod+train_mod[35] + mathRandomInt(1,20);
    case "arcane":          return int_mod+train_mod[36] + mathRandomInt(1,20);
    case "religion":        return psy_mod+train_mod[37] + mathRandomInt(1,20);
    case "insight":         return psy_mod+train_mod[39] + mathRandomInt(1,20);
    case "nature":          return psy_mod+train_mod[40] + mathRandomInt(1,20);
    case "perception":      return psy_mod+train_mod[41] + mathRandomInt(1,20);
    case "seduce":          return cha_mod+train_mod[42] + mathRandomInt(1,20);
    case "threaten":        return cha_mod+train_mod[43] + mathRandomInt(1,20);
    case "performance":     return cha_mod+train_mod[44] + mathRandomInt(1,20);
    case "deception":       return cha_mod+train_mod[45] + mathRandomInt(1,20);
}
}

//#######################################################################################################################################
//                                                              Sidebar
//#######################################################################################################################################
function openSide(id,width){
    document.getElementById(id).style.width = width;
}
function closeSide(id){
    document.getElementById(id).style.width = "0";
}

//#######################################################################################################################################
//                                                              Items
//#######################################################################################################################################

var            //dmg dice mod    hand      name/id     weight price
dagger         = [4,  1, "dex", "either", "dagger"      ,1 , 10, "/pica/dagger_01.png"],
shortsword     = [6,  1, "str", "either", "shortsword" ,12, 10, "/pica/sword_01.png"],
lightaxe       = [6,  1, "str", "either", "lightaxe"   ,12, 10, "/pica/axe_01.png"],
lighthammer    = [6,  1, "str", "either", "lighthammer"   ,17, 8, "/pica/hammer_01.png"],
rapier         = [6,  1, "dex", "either", "rapier"      ,12, 10],
longsword      = [8,  1, "str",   "main", "longsword"   ,24, 10],
shield         = [0,  2, "false", "shield","shield"    ,8 , 10, "/pica/shield_06.png"],


armorlight         = [0, 12,  "dex", "armor", "armorlight" , 5,  8, "/pica/armor_light_03.png"],
armormedium        = [0, 15,  "dex", "armor", "armormedium", 35, 14, "/pica//medium_armor_01.png"],
platearmor         = [0, 18,  "false", "armor", "platearmor", 80, 25, "/pica/heavy_armor_02.png"],

helmet        = [0, 0,  "false",   "head", "helmet", 2,  4],

boots          = [0, 0,  "false",   "feet", "boots", 2,  5];


 
//#######################################################################################################################################
//                                                              Equipped
//#######################################################################################################################################

var dragitem, inventoryslots=[];

for (i =  0; i < 24; i++){inventoryslots[i]="inventory_"+i };

function allowDrop(ev) {
    ev.preventDefault();
    
}
  
function drag(ev, item) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragitem = item;
    console.log(dragitem[3]);

}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.className);
   if (getpalce(ev.target.id)){ev.target.appendChild(document.getElementById(data));}

}

function getpalce(targetid){


    if   (document.getElementById(targetid).innerHTML == 0){

        for(i=0; i<23;i++){
            if (targetid == "inventory_"+i) return true
        }
        //console.log(targetid);
        //console.log(dragitem);


    switch (targetid){
        case "head":  if(dragitem[3]=="head")                       {return true}else{return false;}
        case "off":   if(dragitem[3]=="off" || 
                         dragitem[3]=="either"||
                         dragitem[3]=="shield")                     {return true}else{return false;}
        case "main":  if(dragitem[3]=="either"  || 
                         dragitem[3]=="main")                     {return true}else{return false;}
        case "armor": if(dragitem[3]=="armor")                      {return true}else{return false;}
        case "feet":  if(dragitem[3]=="feet")                       {return true}else{return false;}

    }    

}  else {return false;}

}


//#######################################################################################################################################
//                                                              Buy/Sell
//#######################################################################################################################################
var itemcount = 0;

function buy_item(item){

//Look if enough money
console.log(item [6])
if(item [6]>GP){console.log("Not enough Money dear Friedn"); return}  
GP -= item[6]


//   dagger         = [4,  1, "dex", "either", "Dagger"  ,1 , 10, "/pica/ dagger_01.png"],
    var itemtext = '<img src="'+item[7]+'" class="pic_inventory" draggable="true" id="'+item[4]+itemcount+'"ondragstart="drag(event,'+item[4]+')"></div>';
    console.log(itemtext),itemcount++;

    document.getElementById(free_inv_slot()).innerHTML = itemtext;
   
   if (getcheckboxbyid('openinvonbuy')==false) openSide('myInventory', '500px');
}

function free_inv_slot(){
    for (i =  0; i < 24; i++){if (document.getElementById(inventoryslots[i]).innerHTML == 0) return inventoryslots[i]; }

}

  

//#######################################################################################################################################
//                                                              Lootbox
//#######################################################################################################################################
var lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lb10,lb11, lb12, loot_box_array =[lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8,lb9,lb10,lb11,lb12], lock_01="0", active="";


function lootbox(b){

        //deactibvate old benefits
        if (active ==1 ||active ==2||active ==3){
            document.getElementById("intro_0"+active).style.opacity = "1";
            PT -= loot_box_array[active];
            GP -=  loot_box_array[(active+3)];
            
            if ((loot_box_array[(active+6)])<7)
            STAT_ARRAY[(loot_box_array[(active+6)])-1] -= loot_box_array[active+9];
            else{
                switch (loot_box_array[(active+6)]){
                    case 7:  ACB -=  loot_box_array[(active+9)];      break;
                    case 8:  HPB -=  loot_box_array[(active+9)]*2;    break;
                    
                    
                    case 10: GP -=  loot_box_array[(active+9)]*18;    break;
                    case 11: PT -=  loot_box_array[(active+9)]*18;    break;
                    case 12:                                          break; 
                }
            }
        }
    
  
    for (let i = 1; i < 14; i++) {

        //Firsttimesetup
        if (lock_01=="0"){
            if (i<4)
            {loot_box_array[i] = (mathRandomInt(120,240)+mathRandomInt(60,120)+mathRandomInt(30,60));}
            else if (i<7)
            {loot_box_array[i] = ( 10*(mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)+mathRandomInt(1,4)));}
            else if (i<10)
            {loot_box_array[i] = (mathRandomInt(1,12));} 
            else if (i<13)
            {loot_box_array[i] = (mathRandomInt(1,2));} 
            else if (i=13)
            {lock_01="1";}
            else{1==1}
        }
    }


    //activate new benefits
    PT += loot_box_array[b];
    GP +=  loot_box_array[(b+3)];

    if  ((loot_box_array[(b+6)])<7) 
    {STAT_ARRAY[(loot_box_array[(b+6)]-1)]+=loot_box_array[b+9]}
    else{
        switch (loot_box_array[(b+6)]){
            case 7:  ACB +=  loot_box_array[(b+9)];      break;
            case 8:  HPB +=  loot_box_array[(b+9)]*2;    break;
            case 9:  PPB +=  loot_box_array[(b+9)]*2;    break;
            case 10: GP  +=  (loot_box_array[(b+9)])*18; break;
            case 11: PT  +=  loot_box_array[(b+9)]*18;   break;
            case 12:                                     break;
        }
    }
  

    //reveal and opacitiy pic
    document.getElementById("intro_0"+b).src="/pica/tressure_0"+b+".jpg";
    document.getElementById("intro_0"+b).style.opacity = "0.5";
    document.getElementById("intro_0"+b).className = 'pic_0013';
        
    //Show benefit on Div
    document.getElementById("lootbox"+b).innerHTML = "Points: "+(loot_box_array[b])+"<br> Gold Coins:"+loot_box_array[(b+3)]+"<br>"; 

   //check ran benefit
    var text = ""
    var i=2
    switch (loot_box_array[(b+6)]){
        case 1: text = "STR: +"             +loot_box_array[(b+9)];     break;
        case 2: text = "DEX: +"             +loot_box_array[(b+9)];     break;
        case 3: text = "CON: +"             +loot_box_array[(b+9)];     break;
        case 4: text = "INT: +"             +loot_box_array[(b+9)];     break;
        case 5: text = "PSY: +"             +loot_box_array[(b+9)];     break;
        case 6: text = "CHA: +"             +loot_box_array[(b+9)];     break;
        case 7: text = "AC: +"              +loot_box_array[(b+9)];     break;
        case 8: text = "HP: +"              +loot_box_array[(b+9)]*2;   break;
        case 9: text = "PP: +"              +loot_box_array[(b+9)]*2;   break;
        case 10:text = "Extra Gold "        +loot_box_array[(b+9)]*18;  break;
        case 11:text = "Extr Points "       +loot_box_array[(b+9)]*18;  break;
        case 12:text = "";                                              break;
    }

    //Show benefit on Div
    document.getElementById("lootbox"+b).innerHTML = "Points: "+(loot_box_array[b])+"<br> Gold Coins:"+loot_box_array[(b+3)]+"<br>"+text; 
   
    //set flagg for next iteration
    active=b;
}


//#######################################################################################################################################
//                                                   Either Choose PB or Roll
//#######################################################################################################################################

var choose_0010 = 0, lock_02 = false;

function choose_pb_roll(i){

    if (i==2)
    {   
         //if onerun needed
        if (lock_02 == false&&choose_0010 == 0)
            {
                lock_02=true

                for(i=0; i<6; i++)  
                {       
                    STAT_ARRAY[i]+=8;
                }
            }
                

        //buy
        document.getElementById("choose_0002").style.opacity = "0.5";
        document.getElementById("choose_0001").style.opacity = "1";
        
        //Readd the bought points
        if(choose_0010==2)
        {
            PT -= 50;
            for(i=0; i<6; i++)
            {
                STAT_ARRAY[i]+=stat_pb[i];
            }
            for(i=0; i<6; i++)  
            {       
                STAT_ARRAY[i]-=OLD_STAT_ARRAY[i] 
            }
        }
        //choose Buy
        choose_0010 = 1;
    }                                                               //buy
    else if (i==1)//===================================================================================================================================
    {                                                               //roll
        //roll
        document.getElementById("choose_0001").style.opacity = "0.5";
        document.getElementById("choose_0002").style.opacity = "15";
        PT += 50;
        



        
        //Remove buypoints
        if(choose_0010== 1)
        {
            for(i=0; i<6; i++)
            {
            STAT_ARRAY[i]-=stat_pb[i];
            }

            for(i=0; i<6; i++)  
            {       
                STAT_ARRAY[i]+=OLD_STAT_ARRAY[i];
            }
        }
        //choose roll
        choose_0010 = 2;
    }
}





//#######################################################################################################################################
//                                                          Roll Stat
//#######################################################################################################################################

var STAT_ROLL, STAT_ROLL_ARRAY=[], OLD_STAT_ARRAY=[0, 0, 0, 0, 0, 0];

var roll_nr = "1";

//Rollstat
function rollstat() 
{   
    if (choose_0010==2){

        //Roll
        if (roll_nr>1)
            {PT-=10*roll_nr;}

        var i = 0;
        for (var count = 0; count < 6; count++) {
            STAT_ARRAY[i]-=OLD_STAT_ARRAY[i];
            STAT_ROLL_ARRAY = [mathRandomInt(1, 6), mathRandomInt(1, 6), mathRandomInt(1, 6), mathRandomInt(1, 6)].slice().sort(listsGetSortCompare("NUMERIC", -1));
            STAT_ROLL = STAT_ROLL_ARRAY[0]+STAT_ROLL_ARRAY[1]+STAT_ROLL_ARRAY[2] +(STAT_ROLL_ARRAY[3] = 0);
            STAT_ARRAY[i] += STAT_ROLL;
            OLD_STAT_ARRAY[i] = STAT_ROLL;

            //Display Stat
            document.getElementById("stat_0"+i).innerHTML = STAT_ROLL;
            i++;
        }
        roll_nr++;
        document.getElementById("button_1001").innerHTML = "Cost: "+(10*roll_nr); 
    }
}   

//#######################################################################################################################################
//                                                          POINT BUY
//#######################################################################################################################################

var str_pb =8, dex_pb=8, con_pb=8, int_pb=8, psy_pb=8, cha_pb=8, points_pb = 27, stat_pb=[str_pb, dex_pb, con_pb, int_pb, psy_pb, cha_pb];

function point_buy(pb_i, pb_gain){
if (choose_0010==1){ 


//add
    if(pb_gain==true){
        if(stat_pb[pb_i] == 15)
            {bought=0;}
        else if(stat_pb[pb_i] < 13 && points_pb>0){
            points_pb -= 1;
            stat_pb[pb_i] +=1;
            bought=1}
        else if(stat_pb[pb_i] >= 13 && points_pb>1){
            points_pb -= 2; 
            stat_pb[pb_i] +=1;
            bought=1;}
    };

    //subtract
    if (pb_gain==false){
        if(stat_pb[pb_i] == 8)
            {bought=0;}
        else if(stat_pb[pb_i] <= 13){
            points_pb += 1
            stat_pb[pb_i] -=1;
            bought = -1} 
        else if(stat_pb[pb_i] >= 14 && stat_pb[pb_i] >8){
            points_pb += 2; 
            stat_pb[pb_i] -=1;
            bought = -1;}

    };

    STAT_ARRAY[pb_i] += bought;

    if((stat_pb[pb_i])<13)
        {var lkj = "Cost: "+1;}
    else if((stat_pb[pb_i])<15)
        {lkj = "Cost: "+2;}
    else if((stat_pb[pb_i])==15)
        {lkj = "Maxed out";}
    else
        {alert("error in calculating passive cost, nonimportant");}

    document.getElementById("stat_pt_buy_"+pb_i).innerHTML = stat_pb[pb_i];
    document.getElementById("pb_cost_"+pb_i).innerHTML =lkj;
    document.getElementById("pb_stat").innerHTML = "Points Pool:"+points_pb;
    }
}



//#######################################################################################################################################
//                                                          Race
//#######################################################################################################################################

var RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0], remember_0001=0;

function setrace(a){
//var a = document.querySelector('input[name=race]:checked').id;

    for(i=0;i<7;i++){
        if(i<6)
        {STAT_ARRAY[i] -= RAC_ARRAY[i];}
        else if(i==6)
        {PT -= RAC_ARRAY[6];};
    }

switch(a){
case 0:RAC_ARRAY =  [1, 1, 1, 0, 0, 0, 0]; break;
case 1:RAC_ARRAY =  [0, 1, 0, 1, 1, 0, 0]; break;
case 2:RAC_ARRAY =  [0, 1, 0, 0, 1, 1, 0]; break;
case 3:RAC_ARRAY =  [0, 0, 0, 2, 0, 1, 0]; break;//
case 4:RAC_ARRAY =  [0, 2, 0, 0, 0, 0, 0]; break;
case 5:RAC_ARRAY =  [3, 0, 0, 0, 0, -1, 0]; break;
case 6:RAC_ARRAY =  [0, 1, 0, 2, 0, 0, 0]; break;
case 7:RAC_ARRAY =  [1, 0, 2, 0, 0, 0, 0]; break;//
case 8:RAC_ARRAY =  [0, 0, 0, 0, 0, 0, 0]; break;
case 9:RAC_ARRAY =  [1, 1, 0, 1, 2, 2,-60]; break;//
case 10:RAC_ARRAY = [1, 0, 1, 2, 1, 2,-60]; break;//
case 11:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 12:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 13:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 14:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 15:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 16:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 17:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 18:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 19:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 20:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 21:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 22:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
case 23:RAC_ARRAY = [0, 0, 0, 0, 0, 0, 0]; break;
}

document.getElementById("rac_"+remember_0001).style.opacity = "1";
if(a!=23){document.getElementById("rac_"+a).style.opacity = "0.5";}

//remember rac_x to reset the opacity
remember_0001 = a;


    for(i=0;i<7;i++){
        if(i<6) {STAT_ARRAY[i] += RAC_ARRAY[i];}
        else if(i==6){PT += RAC_ARRAY[6];}
    }

}


//#######################################################################################################################################
//                                                          Set body
//#######################################################################################################################################

var typenew, typeold, b=0, c=3, d=7, e=11, f=15, g=19, h=27, i=35;

var gender=false, size=false, weight=false, fitness=false, face=false, hair_color=false, eye_color=false, SET_BODY =[gender, size, weight, fitness, face, hair_color, eye_color];

function setbody(a){
    
    switch(a){
        case 0: gender="female";        break;
        case 1: gender="male";          break;
        case 2: gender="genderless";    break;

        case 3: size="small";           break;
        case 4: size="avarage";         break;
        case 5: size="tall";            break;

        case 6: weight="skinny";        break;
        case 7: weight="avarage";       break;
        case 8: weight="chubby";        break;

        case 9:  fitness="untrained";   break;
        case 10: fitness="avarage";     break;
        case 11: fitness="fit";         break;

        case 12: face="manly";          break;
        case 13: face="masculin";       break;
        case 14: face="neutral";        break;
        case 15: face="feminine";       break;
        case 16: face="girly";          break;

        case 17: hair_color="blond";    break;
        case 18: hair_color="brown";    break;
        case 19: hair_color="black";    break;
        case 20: hair_color="red";      break;
        case 21: hair_color="violet";   break;
        case 22: hair_color="blue";     break;
        case 23: hair_color="pink";     break;
        case 24: hair_color="white";    break;

        case 25: eye_color="blue";      break;
        case 26: eye_color="brown";     break;
        case 27: eye_color="green";     break;
        case 28: eye_color="grey";      break;
        case 29: eye_color="violet";    break;
        case 30: eye_color="white";     break;
        case 31: eye_color="pink";      break;
        case 32: eye_color="red";       break;

        default: alert("there was non selected"); break;
    }

    //oppacity buttons for each radio, change to check radio for selected in furture?

    switch (a){
        case 0:
        case 1:
        case 2:
            typeold  = "bod_"+b;
            typenew  = "bod_"+a;
            b=a;
            break;

        case 3: 
        case 4: 
        case 5:
            typeold  = "bod_"+c;
            typenew  = "bod_"+a;
            c=a;
            break;

        case 6: 
        case 7: 
        case 8: 
            typeold  = "bod_"+d;
            typenew  = "bod_"+a;
            d=a;
            break;
        
        case 9: 
        case 10: 
        case 11:  
            typeold  = "bod_"+e;
            typenew  = "bod_"+a;
            e=a;
            break;
        case 12: 
        case 13: 
        case 14: 
        case 15: 
        case 16: 
            typeold  = "bod_"+f;
            typenew  = "bod_"+a;
            f=a;
            break;

        case 17: 
        case 18: 
        case 19:
        case 20:    
        case 21: 
        case 22: 
        case 23: 
        case 24: 
            typeold  = "bod_"+g;
            typenew  = "bod_"+a;
            g=a;
            break;
        
        case 25: 
        case 26: 
        case 27: 
        case 28: 
        case 29: 
        case 30: 
        case 31: 
        case 32: 
            typeold  = "bod_"+h;
            typenew  = "bod_"+a;
            h=a;
            break;   
        
        default: alert("there was non selected"); break;
    }
    document.getElementById(typeold).style.opacity = "1";
    document.getElementById(typenew).style.opacity = "0.5";
}

//#######################################################################################################################################
//                                                          Set mind
//#######################################################################################################################################

var SET_MIND =[], lock_03="0";

function setmind(c){
      

    if (lock_03=="0"){
        for (var i = 0; i <= 60; ++i) {
            SET_MIND[i] = "m"+i;
            SET_MIND[i]="0";
        }
        lock_03 = 1;
    }


    if(SET_MIND[c] == "false" || SET_MIND[c]=="0")
    {
        SET_MIND[c]="true";
        document.getElementById(("m_"+c)).style.opacity = "0.5";
        PT-=20;
    }

    else if (SET_MIND[c] == "true")
    {
        SET_MIND[c]="false";
        document.getElementById("m_"+c).style.opacity = "1";
        PT+=20;
    }   
    
    
    return SET_MIND;
}

//#######################################################################################################################################
//                                                            Training
//#######################################################################################################################################


var  tshield = false; tlarmor = false, tmarmor = false, tharmor = false, tlweapon = false, tmweapon = false;
var SET_TRAIN=[tshield, tlarmor, tmarmor, tharmor, tlweapon, tmweapon];


function settrain(a){

    price = 0;

    switch(a){
        case 0: var price = 35; break;  
        case 1: if(getcheckboxbyid("tr_2")==true){checkbyid("tr_1")}else{ price = 30;} break;  
        case 2: if(getcheckboxbyid("tr_1")==false){uncheckbyid("tr_2")}else if(getcheckboxbyid("tr_3")==true){checkbyid("tr_2")}else{price = 50;} break; 
        case 3: if(getcheckboxbyid("tr_2")==false){uncheckbyid("tr_3")}else{price = 50; } break;
        case 4: if(getcheckboxbyid("tr_5")==true){checkbyid("tr_4")}else{price = 50; } break;             
        case 5: if(getcheckboxbyid("tr_4")==false){uncheckbyid("tr_5")}else{price = 50; } break;         
        case 6: price = 50;  break;
        case 7: price = 50;  break;
        case 8: price = 50;  break;
        case 9: price = 50;  break;
        case 10: price = 50; break;
        case 11: price = 50; break;
        default: break;
    }

    for(i=0;i<12;i++){
       train_mod[(i+50)] = getcheckboxbyid("tr_"+i)
        console.log("Number "+(i+50)+" "+train_mod[50+i])
   }

    if (getcheckboxbyid("tr_"+a)){setopacitybyid(("tra_"+a),0.5); PT-=price;} else if (getcheckboxbyid("tr_"+a) == false){setopacitybyid(("tra_"+a),1); PT+=price;}

}


//#######################################################################################################################################
//                                                   Fight a goblin
//#######################################################################################################################################

var ccount =0;

function fight1(){

    switch(ccount){
    case 0: document.getElementById("goblintalk").innerHTML =('Soon you will be able to fight uzzzss...'); break;
    case 1: document.getElementById("goblintalk").innerHTML =('Aaggh, stop this foolish clickiin grrrr'); break;
    case 2: document.getElementById("goblintalk").innerHTML =('You cannot fightzzz me yet!'); break;
    case 3: document.getElementById("goblintalk").innerHTML =('Can.. not.. click me'), document.getElementById("goblin").classList.add('goblin_atk1');break;
    case 4: document.getElementById("goblintalk").innerHTML =('YOU CANNOT BZZEAT MEE'), document.getElementById("goblin").classList.add('goblin_atk2');break;
    case 5: document.getElementById("goblintalk").innerHTML =('AARGGHH'), document.getElementById("goblin").classList.add('goblin_atk3');break;
    case 6: document.getElementById("goblintalk").innerHTML =('You have too much time lina 😡'), 
    document.getElementById("goblin").classList.remove('goblin_atk3'), 
    document.getElementById("goblin").classList.remove('goblin_atk2'), 
    document.getElementById("goblin").classList.remove('goblin_atk1'), 
    document.getElementById("goblin").classList.add('goblin_idle');break;
    default: break;
    }
    ccount++;
}

