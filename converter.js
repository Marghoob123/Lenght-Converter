function feetToOthers(value){

   if(!isNaN(value)){
    let feet = document.getElementById("feet");
    inch.value = value*12;
    cm.value = value/0.032808;
    m.value = value/3.2808;
    km.value = value/3280.8;
    yards.value = value*0.33333;
    mil.value = value*0.00018939;
   }else{
    let inch = document.getElementById("inch");
    inch.value='';
    let cm = document.getElementById("cm");
    cm.value='';
    let m = document.getElementById("m");
    m.value='';
    let km = document.getElementById("km");
    km.value='';
    let yards = document.getElementById("yards");
    yards.value='';
    let mil = document.getElementById("mil");
    mil.value='';
   }
};

function inchToOthers(value){
    if(!isNaN(value)){
        let inch = document.getElementById("inch");
        feet.value = value/12;
        cm.value = value/0.39370;
        m.value = value/39.370;
        km.value = value/39370;
        yards.value = value*0.027778;
        mil.value = value*0.000015783;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let cm = document.getElementById("cm");
        cm.value='';
        let m = document.getElementById("m");
        m.value='';
        let km = document.getElementById("km");
        km.value='';
        let yards = document.getElementById("yards");
        yards.value='';
        let mil = document.getElementById("mil");
        mil.value='';
       }
};

function cmToOthers(value){
    if(!isNaN(value)){
        let cm = document.getElementById("cm");
        feet.value = value*0.032808;
        m.value = value/100;
        inch.value = value*0.39370;
        km.value = value/100000;
        yards.value = value*0.010936;
        mil.value = value*0.0000062137;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let m = document.getElementById("m");
        m.value='';
        let inch = document.getElementById("inch");
        inch.value='';
        let km = document.getElementById("km");
        km.value='';
        let yards = document.getElementById("yards");
        yards.value='';
        let mil = document.getElementById("mil");
        mil.value='';
       }
};

function mToOthers(value){
    if(!isNaN(value)){
        let m = document.getElementById("m");
        feet.value = value*3.2808;
        cm.value = value/0.01;
        inch.value = value*39.370;
        km.value = value/1000;
        yards.value = value*1.0936;
        mil.value = value*0.00062137;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let cm = document.getElementById("cm");
        cm.value='';
        let inch = document.getElementById("inch");
        inch.value='';
        let km = document.getElementById("km");
        km.value='';
        let yards = document.getElementById("yards");
        yards.value='';
        let mil = document.getElementById("mil");
        mil.value='';
       }
};

function kmToOthers(value){
    if(!isNaN(value)){
        let km = document.getElementById("km");
        feet.value = value*3280.8;
        cm.value = value/100000;
        inch.value = value*39370;
        m.value = value*1000;
        yards.value = value*1093.6;
        mil.value = value*0.62137;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let cm = document.getElementById("cm");
        cm.value='';
        let inch = document.getElementById("inch");
        inch.value='';
        let m = document.getElementById("m");
        m.value='';
        let yards = document.getElementById("yards");
        yards.value='';
        let mil = document.getElementById("mil");
        mil.value='';
       }
};

function yardsToOthers(value){
    if(!isNaN(value)){
        let yards = document.getElementById("yards");
        feet.value = value*3;
        cm.value = value/0.010936;
        inch.value = value*36;
        m.value = value/1.0936;
        km.value = value/1093.6;
        mil.value = value*0.00056818;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let cm = document.getElementById("cm");
        cm.value='';
        let inch = document.getElementById("inch");
        inch.value='';
        let m = document.getElementById("m");
        m.value='';
        let km = document.getElementById("km");
        km.value='';
        let mil = document.getElementById("mil");
        mil.value='';
       }
};

function milesToOthers(value){
    if(!isNaN(value)){
        let mil = document.getElementById("mil");
        feet.value = value*5280;
        cm.value = value/0.0000062137;
        inch.value = value*63360;
        m.value = value/0.00062137;
        yards.value = value*1760;
        km.value = value/0.62137;
       }else{
        let feet = document.getElementById("feet");
        feet.value='';
        let cm = document.getElementById("cm");
        cm.value='';
        let inch = document.getElementById("inch");
        inch.value='';
        let m = document.getElementById("m");
        m.value='';
        let yards = document.getElementById("yards");
        yards.value='';
        let km = document.getElementById("km");
        km.value='';
       }
};

function convertToOthers(convertFrom,value){
    switch (convertFrom){
        case "feet" : feetToOthers(parseFloat(value)); break;
        case "inch" : inchToOthers(parseFloat(value)); break;
        case "cm" : cmToOthers(parseFloat(value)); break;
        case "m" : mToOthers(parseFloat(value)); break;
        case "km" : kmToOthers(parseFloat(value)); break;
        case "yards" : yardsToOthers(parseFloat(value)); break;
        case "miles" : milesToOthers(parseFloat(value)); break;
    }
}