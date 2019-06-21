import React from 'react';


const PersonalData = ({personalDataToSent, examsWithTextToSent, examsWithImageToSent}) => {

    var vykresleni=true;
    var ohodnoceni = true;
    var pocetChyb = 0;
    var znamka = '';
    var text = "";
    var image = "";
    var imageTitle = "";

    function clickButton()
    {
    if(vykresleni){

        var x = document.getElementById("myDIV");
                        x.style.display = "block";
        vykresleni=false;
}
    }

    // fce pro exams s textem
     function clickButton2(id)
        {

            for(let i in examsWithTextToSent) {
                text = examsWithTextToSent.map(function (val) {
                    if(val.id === id) {
                        console.log(val.text);
                        var x = document.getElementById("answer1");
                        x.style.display = "block";
                        return val.text;
                    }
                })
            }

            document.getElementById('answer1').innerHTML = text;

                //podminka pro zapocteni spatne odpovedi
               /* if(odpoved je spatne){
                pocetChyb++;
                }*/
        }
        // fce pro exams s obrázkama
        function clickButton3(id) {

            for(let i in examsWithImageToSent) {
                image = examsWithImageToSent.map(function (val) {
                    if(val.id === id) {
                        console.log(val.title);
                        imageTitle = val.title;
                        val.imageGroup.images.map(function (val2) {
                            var x = document.getElementById("answer2");
                            x.style.display = "block";
                            console.log(val2.filename);
                            return val2;
                        })
                    }
                })
            }

            document.getElementById('answer2').innerHTML = image;
            document.getElementById('answer2').innerHTML = imageTitle;
        }

        // fce pro hodnocení
        function clickButton4()
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
        <div>{personalDataToSent.map(function(item, i){
            console.log('test');
            return <h3 key={i}>{item.title} : {item.text}</h3>
        })}</div>

            <button id="moznosti" onClick={clickButton}>Zobrazit možnosti</button>

            <div id={"myDIV"}>
            <div>{examsWithTextToSent.map(function(item, i){
                console.log('test');
                return <div>
                    <button onClick={clickButton2.bind(this, item.id)} key={i}>{item.title}</button>
                </div>
            })}</div>

                <div>{examsWithImageToSent.map(function(item, i){
                    console.log('test');
                    return <div>
                        <button onClick={() => clickButton3(item.id)} key={i}>{item.title}</button>
                    </div>
                })}</div>

                <div id={"answer1"} className={"hidden"}><p>{text}</p></div>

                <div id={"answer2"} className={"hidden"}><p>{imageTitle}</p><br/>
                    <img src={image.filename} alt={image.text} width={500} height={500}></img></div>

            </div>

            <button id="ohodnotit" onClick={clickButton4}>Ohodnotit</button>
            <div className="hidden" id={"znamka"}></div>

        </div>

    );
};

export default PersonalData;