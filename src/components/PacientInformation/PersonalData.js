import React from 'react';


const PersonalData = ({personalData}) => {
    //let objects = JSON.parse(personalData);

    //var obj = [personalData];
    //obj.title = new String(obj.title);

    var prom = '';
    var prom2= '';
    var prom3= '';
    var prom5= 0;



    for(let i in personalData) {
            prom = personalData.map(function (val) {
                if ((val.title != undefined) && (val.text != undefined)) {
                    if(val.exam==null){
                    return val.title + ': ' + val.text;
                }}
            }).join('\n');
        prom2 = personalData.map(function (val) {
            if (val.title != undefined) {
                if(val.exam==true){
                    prom5++;
                    return val.title;
                }}
        }).join(' \n');
        prom3 = personalData.map(function (val) {
            if ((val.title != undefined) && (val.text != undefined)) {
                if(val.exam==true){
                    return val.text;
                }}
        }).join(' \n');
    }
    function clickButton()
    {
        for (var i = 0; i < prom5; i++) {
            document.getElementById("myDIV").innerHTML += "<button>" + prom2 + "</button>";
        }
        var x = document.getElementById("myDIV");
            x.style.display = "block";


    }

    return (

        <div>
            <div id={"promDIV"}>
                <h3>{prom}</h3>

            </div>
            <button onClick={clickButton}>{prom2}</button>
            <div >
                <h3  class="hidden" id={"myDIV"}> {prom3}</h3>

            </div>
        </div>

    );
};

export default PersonalData;