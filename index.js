let clear=document.getElementById("Clear");
function Clear(){
    digitOne=document.getElementById("digitOne").innerHTML='';
    Oparator=document.getElementById("Oparator").innerHTML='';
    digitTwo=document.getElementById("digitTwo").innerHTML='';
    result=document.getElementById("value2").innerHTML='';

    
}
let digitOne=document.getElementById("digitOne").innerHTML='';
let Oparator=document.getElementById("Oparator").innerHTML='';
let digitTwo=document.getElementById("digitTwo").innerHTML='';
let result=document.getElementById("value2").innerHTML='';
let digit1,digit2

function modul(){
    if(Oparator=='')
    Oparator=document.getElementById("Oparator").innerHTML='%';
    else
    return false
}
function div(){
    if(Oparator=='')
    Oparator=document.getElementById("Oparator").innerHTML='/';
    else
    return false
}
function mult(){
    if(Oparator=='')
    Oparator=document.getElementById("Oparator").innerHTML='*';
    else
    return false
}
function mean(){
    if(Oparator=='')
    Oparator=document.getElementById("Oparator").innerHTML='-';
    else
    return false
    
}
function plus(){
    if(Oparator=='')
    Oparator=document.getElementById("Oparator").innerHTML='+';
    else
    return false

}
function digtDot(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+='.';
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+='.';
}
function digt0(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+='0';
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+='0';

}
function digt1(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=1;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=1;


}
function digt2(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+'&& Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=2;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=2;

}
function digt3(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=3;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=3;


}
function digt4(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=4;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=4;

}
function digt5(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=5;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=5;


}
function digt6(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=6;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=6;

}
function digt7(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=7;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=7;

}
function digt8(){
    if( Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=8;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=8;


}

function digt9(){
    if(Oparator!=='/' && Oparator!=='*' && Oparator!=='-' && Oparator!=='+' && Oparator!=='%')
    digitOne=document.getElementById("digitOne").innerHTML+=9;
    else
    digitTwo=document.getElementById("digitTwo").innerHTML+=9;

}

function Equl(){
    switch(Oparator){
        case '/':
            result=document.getElementById("value2").innerHTML=digitOne/digitTwo;
        break;
        case '*':
            result=document.getElementById("value2").innerHTML=digitOne*digitTwo;
        break;
        case '-':
            result=document.getElementById("value2").innerHTML=digitOne-digitTwo;
        break;
        case '+':
            result=document.getElementById("value2").innerHTML=(parseInt(digitOne)+parseInt(digitTwo));
        break;
        case '%':
            result=document.getElementById("value2").innerHTML=digitOne%digitTwo;
        break;
        default:
        result=document.getElementById("value2").innerHTML='انت عاوز ايه؟؟ ';

    }  
    if(result==Infinity){
        result=document.getElementById("value2").innerHTML='والله اللي علمك رياضة ظلمك';
    }

}