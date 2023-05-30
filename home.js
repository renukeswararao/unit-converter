function length(){
    window.location="length.html"
}
function temperature(){
    window.location="temperature.html"
}
function area(){
    window.location="area.html"
}

function time(){
    window.location="time.html"
}
function weight(){
    window.location="weight.html"
}


function lengthjs(){

    let lengthIn=document.getElementById("lengthIn");
    let lengthRes=document.getElementById("lengthRes");
    let lengthInSub=document.getElementById("lengthIn-sub");
    let lengthResSub=document.getElementById("lengthRes-sub");
    lengthIn.addEventListener('keyup',lenResult);
    lengthInSub.addEventListener('change',lenResult);
    lengthResSub.addEventListener('change',lenResult);
    function lenResult(){
       let lengthInSubValue=lengthInSub.value;
       let lengthResSubValue=lengthResSub.value;

       if(lengthInSubValue==="meter" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)
       }
       else if(lengthInSubValue==="meter" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)*0.001
       }
       else if(lengthInSubValue==="meter" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value)*100
       }
       else if(lengthInSubValue==="meter" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value)*1000;
       }
       else if(lengthInSubValue==="meter" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value)*0.000621
       }
       else if(lengthInSubValue==="meter" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value)*1.093;
       }



       if(lengthInSubValue==="kilometer" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)
       }
       else if(lengthInSubValue==="kilometer" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)*1000;
       }
       else if(lengthInSubValue==="kilometer" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value)*1000*100;
       }
       else if(lengthInSubValue==="kilometer" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value)*1000*1000;
       }
       else if(lengthInSubValue==="kilometer" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value)*1.6093;
       }
       else if(lengthInSubValue==="kilometer" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value)*1093.61;
       }


       if(lengthInSubValue==="millimeter" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)*0.000001
       }
       else if(lengthInSubValue==="millimeter" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)*1000;
       }
       else if(lengthInSubValue==="millimeter" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value)*0.1;
       }
       else if(lengthInSubValue==="millimeter" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value);
       }
       else if(lengthInSubValue==="millimeter" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value)*6.213711922E-7;
       }
       else if(lengthInSubValue==="millimeter" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value)*0.0010936133;
       }


       if(lengthInSubValue==="centimeter" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)*0.00001
       }
       else if(lengthInSubValue==="centimeter" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)*0.01;
       }
       else if(lengthInSubValue==="centimeter" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value);
       }
       else if(lengthInSubValue==="centimeter" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value)*10;
       }
       else if(lengthInSubValue==="centimeter" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value)*0.0000062137;
       }
       else if(lengthInSubValue==="centimeter" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value)*6.213711922E-7;
       }


       if(lengthInSubValue==="yard" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)*0.0009144;
       }
       else if(lengthInSubValue==="yard" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)*0.9144;
       }
       else if(lengthInSubValue==="yard" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value)*191.44;
       }
       else if(lengthInSubValue==="yard" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value)*914.4;
       }
       else if(lengthInSubValue==="yard" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value)*0.00056;
       }
       else if(lengthInSubValue==="yard" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value);
       }


       if(lengthInSubValue==="mile" && lengthResSubValue==="kilometer"){
        lengthRes.value=Number(lengthIn.value)*1.609344;
       }
       else if(lengthInSubValue==="mile" && lengthResSubValue==="meter"){
        lengthRes.value=Number(lengthIn.value)*1609.344;
       }
       else if(lengthInSubValue==="mile" && lengthResSubValue==="centimeter"){
        lengthRes.value=Number(lengthIn.value)*160934.4;
       }
       else if(lengthInSubValue==="mile" && lengthResSubValue==="millimeter"){
        lengthRes.value=Number(lengthIn.value)*1609344;
       }
       else if(lengthInSubValue==="mile" && lengthResSubValue==="mile"){
        lengthRes.value=Number(lengthIn.value);
       }
       else if(lengthInSubValue==="mile" && lengthResSubValue==="yard"){
        lengthRes.value=Number(lengthIn.value)*1760;
       }
 
    }
}


function temperaturejs(){
        let tempIn=document.getElementById("tempIn");
        let tempRes=document.getElementById("tempRes");
        let tempInSub=document.getElementById("tempIn-sub");
        let tempResSub=document.getElementById("tempRes-sub");
        tempIn.addEventListener('keyup',tempResult);
        tempInSub.addEventListener('change',tempResult);
        tempResSub.addEventListener('change',tempResult);
        function tempResult(){
           let tempInSubValue=tempInSub.value;
           let tempResSubValue=tempResSub.value;
    
           if(tempInSubValue==="celsius" && tempResSubValue==="celsius"){
            tempRes.value=Number(tempIn.value)
           }
           else if(tempInSubValue==="celsius" && tempResSubValue==="kelvin"){
            tempRes.value= Number(tempIn.value)+273.15;
           }
           else if(tempInSubValue==="celsius" && tempResSubValue==="fahrenheit"){
            tempRes.value=(Number(tempIn.value)*1.8 )+ 32;
           }

    
    
    
           if(tempInSubValue==="kelvin" && tempResSubValue==="kelvin"){
            tempRes.value=Number(tempIn.value)
           }
           else if(tempInSubValue==="kelvin" && tempResSubValue==="celsius"){
            tempRes.value=Number(tempIn.value)-273.15;
           }
           else if(tempInSubValue==="kelvin" && tempResSubValue==="fahrenheit"){
            tempRes.value=(( Number(tempIn.value)-273.15)*1.8)+32;
           }

    
    
           if(tempInSubValue==="fahrenheit" && tempResSubValue==="fahrenheit"){
            tempRes.value=Number(tempIn.value);
           }
           else if(tempInSubValue==="fahrenheit" && tempResSubValue==="celsius"){
            tempRes.value= (Number(tempIn.value)-32)*(5/9);
           }
           else if(tempInSubValue==="fahrenheit" && tempResSubValue==="kelvin"){
            tempRes.value=((Number(tempIn.value)-32)/1.8) +273.15;
           }
        }
}


function areajs(){

    let areaIn=document.getElementById("areaIn");
    let areaRes=document.getElementById("areaRes");
    let areaInSub=document.getElementById("areaIn-sub");
    let areaResSub=document.getElementById("areaRes-sub");
    areaIn.addEventListener('keyup',areaResult);
    areaInSub.addEventListener('change',areaResult);
    areaResSub.addEventListener('change',areaResult);
    function areaResult(){
       let areaInSubValue=areaInSub.value;
       let areaResSubValue=areaResSub.value;

       if(areaInSubValue==="sqmiles" && areaResSubValue==="sqmiles"){
        areaRes.value=Number(areaIn.value)
       }
       else if(areaInSubValue==="sqmiles" && areaResSubValue==="sqkilometer"){
        areaRes.value= Number(areaIn.value)+273.15;
       }
       else if(areaInSubValue==="sqmiles" && areaResSubValue==="sqmeter"){
        areaRes.value=(Number(areaIn.value)*2.59e+6);
       }




       if(areaInSubValue==="sqkilometer" && areaResSubValue==="sqkilometer"){
        areaRes.value=Number(areaIn.value)
       }
       else if(areaInSubValue==="sqkilometer" && areaResSubValue==="sqmiles"){
        areaRes.value=Number(areaIn.value)*0.386102;
       }
       else if(areaInSubValue==="sqkilometer" && areaResSubValue==="sqmeter"){
        areaRes.value=Number(areaIn.value)*1e+6;
       }



       if(areaInSubValue==="sqmeter" && areaResSubValue==="sqmeter"){
        areaRes.value=Number(areaIn.value);
       }
       else if(areaInSubValue==="sqmeter" && areaResSubValue==="sqkilometer"){
        areaRes.value= (Number(areaIn.value)*1e+6);
       }
       else if(areaInSubValue==="sqmeter" && areaResSubValue==="sqmiles"){
        areaRes.value=(Number(areaIn.value)*3.861e-7);
       }
    }
}


function weightjs(){
    let weightIn=document.getElementById("weightIn");
    let weightRes=document.getElementById("weightRes");
    let weightInSub=document.getElementById("weightIn-sub");
    let weightResSub=document.getElementById("weightRes-sub");
    console.log(weightIn)
    console.log(weightRes)
    console.log(weightInSub)
    console.log(weightResSub)
    weightIn.addEventListener('keyup',weightResult);
    weightInSub.addEventListener('change',weightResult);
    weightResSub.addEventListener('change',weightResult);
    function weightResult(){
       let weightInSubValue=weightInSub.value;
       let weightResSubValue=weightResSub.value;

       if(weightInSubValue==="gram" && weightResSubValue==="gram"){
        weightRes.value=Number(weightIn.value)
       }
       else if(weightInSubValue==="gram" && weightResSubValue==="kilogram"){
        weightRes.value= Number(weightIn.value)*0.001;
       }
       else if(weightInSubValue==="gram" && weightResSubValue==="centigram"){
        weightRes.value=Number(weightIn.value)*100;
       }
       else if(weightInSubValue==="gram" && weightResSubValue==="milligram"){
        weightRes.value=Number(weightIn.value)*1000;
       }




       if(weightInSubValue==="kilogram" && weightResSubValue==="kilogram"){
        weightRes.value= Number(weightIn.value);
       }
       else if(weightInSubValue==="kilogram" && weightResSubValue==="gram"){
        weightRes.value=Number(weightIn.value)*1000;
       }
       else if(weightInSubValue==="kilogram" && weightResSubValue==="centigram"){
        weightRes.value=Number(weightIn.value)*1000*100;
       }
       else if(weightInSubValue==="kilogram" && weightResSubValue==="milligram"){
        weightRes.value= Number(weightIn.value)*1000*1000;
       }



       if(weightInSubValue==="centigram" && weightResSubValue==="centigram"){
        weightRes.value=Number(weightIn.value);
       }
       else if(weightInSubValue==="centigram" && weightResSubValue==="kilogram"){
        weightRes.value= Number(weightIn.value)*0.001*0.01
       }
       else if(weightInSubValue==="centigram" && weightResSubValue==="milligram"){
        weightRes.value=Number(weightIn.value)*10;
       }
       else if(weightInSubValue==="centigram" && weightResSubValue==="gram"){
        weightRes.value=Number(weightIn.value)*0.01;
       }


       if(weightInSubValue==="milligram" && weightResSubValue==="milligram"){
        weightRes.value= Number(weightIn.value);
       }
       else if(weightInSubValue==="milligram" && weightResSubValue==="gram"){
        weightRes.value= Number(weightIn.value)*0.1*0.01;
       }
       else if(weightInSubValue==="milligram" && weightResSubValue==="kilogram"){
        weightRes.value=Number(weightIn.value)*0.1*0.01*0.001;
       }
       else if(weightInSubValue==="milligram" && weightResSubValue==="centigram"){
        weightRes.value=Number(weightIn.value)*0.1;
       }
    }
}


function timejs(){
    let timeIn=document.getElementById("timeIn");
    let timeRes=document.getElementById("timeRes");
    let timeInSub=document.getElementById("timeIn-sub");
    let timeResSub=document.getElementById("timeRes-sub");
    timeIn.addEventListener('keyup',timeResult);
    timeInSub.addEventListener('change',timeResult);
    timeResSub.addEventListener('change',timeResult);
    function timeResult(){
       let timeInSubValue=timeInSub.value;
       let timeResSubValue=timeResSub.value;


       if(timeInSubValue==="day" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="day" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value)*1440;
       }
       else if(timeInSubValue==="day" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value)*24;
       }
       else if(timeInSubValue==="day" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value)/7;
       }
       else if(timeInSubValue==="day" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value)*0.0328767123;
       }
       else if(timeInSubValue==="day" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value)*0.0027378508;
       }


       if(timeInSubValue==="minutes" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="minutes" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value)*0.0006944444;
       }
       else if(timeInSubValue==="minutes" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value)/60;
       }
       else if(timeInSubValue==="minutes" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value)*0.0000992063;;
       }
       else if(timeInSubValue==="minutes" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value)*0.0000228311;
       }
       else if(timeInSubValue==="minutes" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value)*0.0000019013;;
       }


       if(timeInSubValue==="hour" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="hour" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value)*0.0416666667;
       }
       else if(timeInSubValue==="hour" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value)*60;
       }
       else if(timeInSubValue==="hour" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value)*0.005952381;
       }
       else if(timeInSubValue==="hour" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value)*0.0013689254;
       }
       else if(timeInSubValue==="hour" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value)*0.0001140771;
       }


       if(timeInSubValue==="week" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="week" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value)*7;
       }
       else if(timeInSubValue==="week" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value)*10080;
       }
       else if(timeInSubValue==="week" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value)*168;
       }
       else if(timeInSubValue==="week" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value)*0.2299794661;
       }
       else if(timeInSubValue==="week" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value)*0.0191649555;
       }


       if(timeInSubValue==="month" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="month" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value)*30.4375;
       }
       else if(timeInSubValue==="month" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value)*43830;
       }
       else if(timeInSubValue==="month" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value)*730.5;
       }
       else if(timeInSubValue==="month" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value)*4.3482142857;
       }
       else if(timeInSubValue==="month" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value)*0.0833333333;
       }


       if(timeInSubValue==="year" && timeResSubValue==="year"){
        timeRes.value=Number(timeIn.value);
       }
       else if(timeInSubValue==="year" && timeResSubValue==="day"){
        timeRes.value=Number(timeIn.value)*365.25;
       }
       else if(timeInSubValue==="year" && timeResSubValue==="minutes"){
        timeRes.value=Number(timeIn.value)*525960;
       }
       else if(timeInSubValue==="year" && timeResSubValue==="hour"){
        timeRes.value=Number(timeIn.value)*8766;
       }
       else if(timeInSubValue==="year" && timeResSubValue==="week"){
        timeRes.value=Number(timeIn.value)*52.178571429;
       }
       else if(timeInSubValue==="year" && timeResSubValue==="month"){
        timeRes.value=Number(timeIn.value)*12;
       }


    }
}