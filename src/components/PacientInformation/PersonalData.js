import React from 'react';


const PersonalData = ({personalData}) => {
    //let objects = JSON.parse(personalData);

    //var obj = [personalData];
    //obj.title = new String(obj.title);

    var prom = '';
    var prom2= '';
    var prom3= '';
    var prom5= 0;
    var vykresleni=true;


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
        });
        prom3 = personalData.map(function (val) {
            if ((val.title != undefined) && (val.text != undefined)) {
                if(val.exam==true){
                    return val.text;
                }}
        }).join(' \n');
    }
    function clickButton()
    {
    if(vykresleni){
        for (var i = 0; i < prom2.length; i++) {
             if (prom2[i] != undefined) {document.getElementById("myDIV").innerHTML += "<button>" + prom2[i] + "</button>";
        } }
        var x = document.getElementById("myDIV");
                        x.style.display = "block";
        vykresleni=false;
}
    }
     function clickButton2()
        {
            var x = document.getElementById("answer");
                x.style.display = "block";
        }

    return (
        <div>
            <div id={"promDIV"}>
                <h3>{prom}</h3>
            </div>
            <button onClick={clickButton}>Zobrazit možnosti</button>
            <div onClick={clickButton2} id={"myDIV"}>
            </div>
            <div class="hidden" id={"answer"}> {prom3}</div>
        </div>
    );
};

export default PersonalData;