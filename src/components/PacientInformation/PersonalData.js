import React from 'react';


const PersonalData = ({personalData}) => {

    var prom = '';
    var titleExam= '';
    var textExam= '';
    var vykresleni=true;
    var ohodnoceni = true;
    var pocetChyb = 0;
    var znamka = '';



    for(let i in personalData) {
            prom = personalData.map(function (val) {
                if ((val.title != undefined) && (val.text != undefined)) {
                    if(val.exam==null){
                    return val.title + ': ' + val.text;
                }}
            }).join('\n');
        titleExam = personalData.map(function (val) {
            if (val.title != undefined) {
                if(val.exam==true){
                    return val.title;
                }}
        });
        textExam = personalData.map(function (val) {
            if ((val.title != undefined) && (val.text != undefined)) {
                if(val.exam==true){
                    return val.text;
                }}
        }).join(' \n');
    }
    function clickButton()
    {
    if(vykresleni){
        for (var i = 0; i < titleExam.length; i++) {
             if (titleExam[i] != undefined) {document.getElementById("myDIV").innerHTML += "<button>" + titleExam[i] + "</button>";
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
                //podminka pro zapocteni spatne odpovedi
               /* if(odpoved je spatne){
                pocetChyb++;
                }*/
        }
        function clickButton3()
                {

                if(ohodnoceni){
                    switch(pocetChyb) {
                      case 0:
                        znamka=znamka + "A";
                        break;
                      case 1:
                        znamka=znamka + "B";
                        break;
                      case 2:
                        znamka=znamka + "C";
                        break;
                      case 3:
                        znamka=znamka + "D";
                        break;
                      case 4:
                        znamka=znamka + "F";
                        break;

                    }
                    document.getElementById("znamka").innerHTML += "Známka: <b>" + znamka + "</b> (počet chyb: <b>"+ pocetChyb + "</b>)";
                    var x = document.getElementById("znamka");
                        x.style.display = "block";
                        ohodnoceni=false;
 }
                }

    return (
        <div>

            <div id={"promDIV"}>
                <h3>{prom}</h3>
            </div>
            <button id="moznosti" onClick={clickButton}>Zobrazit možnosti</button>
            <div onClick={clickButton2} id={"myDIV"}>
            </div>
            <div class="hidden" id={"answer"}> {textExam}</div>
<button id="ohodnotit" onClick={clickButton3}>Ohodnotit</button>
 <div class="hidden" id={"znamka"}></div>

        </div>


    );
};

export default PersonalData;