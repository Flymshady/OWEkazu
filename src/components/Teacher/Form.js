import React from 'react';


const Form = ({form}) => {

var potvrzeni = 'Pacient byl úspěšně vytvořen';
var potvrzeni2 = 'Pacient byl úspěšně upraven';
var potvrzeni3 = 'Diagnóza byla úspěšně vytvořena';


    //funkce pro validaci formulare po potvrzeni (zze dopsat pripadne dalsi kriteria)
    function validateForm() {
      var x = document.forms["pacientForm"]["title"].value;
      if (x == "") {
        alert("Title musí být vyplněno!");
       return false;
      }
       var x = document.forms["pacientForm"]["id"].value;
            if (x == "") {
              alert("ID musí být vyplněno!");
              return false;
            }
       var x = document.forms["pacientForm"]["text"].value;
                   if (x == "") {
                     alert("Text musí být vyplněn!");
                   return false;
                   }
        //zobrazeni textu 'Pacient byl úspěšně vytvořen' v pripade uspesne validace
        var x = document.getElementById("potvrzeni");
                   x.style.display = "block";
    }
     function validateForm2() {
          var x = document.forms["upraveniPacienta"]["title"].value;
          if (x == "") {
            alert("Title musí být vyplněno!");
           return false;
          }
           var x = document.forms["upraveniPacienta"]["id"].value;
                if (x == "") {
                  alert("ID musí být vyplněno!");
                  return false;
                }
           var x = document.forms["upraveniPacienta"]["text"].value;
                       if (x == "") {
                         alert("Text musí být vyplněn!");
                       return false;
                       }
            //zobrazeni textu 'Pacient byl úspěšně vytvořen' v pripade uspesne validace
            var x = document.getElementById("potvrzeni2");
                       x.style.display = "block";
        }
         function validateForm3() {
              var x = document.forms["diagnozaForm"]["diagnoza"].value;
              if (x == "") {
                alert("Diagnóza musí být vyplněna!");
               return false;
              }

                //zobrazeni textu 'Pacient byl úspěšně vytvořen' v pripade uspesne validace
                var x = document.getElementById("potvrzeni3");
                           x.style.display = "block";
            }
            function zobrazitSeznam(){
            var x = document.getElementById("seznam");
                                       x.style.display = "block";
            }
    return (
        <div>
            <div>
            <p><b>Vytvoření pacienta</b></p>
                <form name="pacientForm" action="'https://owe-kazu.herokuapp.com/api/rest/teacher" onsubmit="return validateForm()" method="post">
                     Title: <input type="text" name="title" ></input>
                     Text: <input type="text" name="text"></input>
                     ID: <input type="text" name="id"></input>
                     <input id="vytvoreniPacienta" onClick={validateForm} type="submit" value="Vytvořit pacienta"></input>
                 </form>

             </div>

              <div  class="hidden" id={"potvrzeni"}>{potvrzeni} </div>
            <div>
            <p><b>Úprava pacienta</b></p>
                 <p><button id="upraveniPacienta" onClick={zobrazitSeznam}>Zobrazit seznam pacientů</button>
                <div id={"seznam"} class="hidden">-nacteny list existujicich pacientu-</div></p>
                <form name="editForm" action="'https://owe-kazu.herokuapp.com/api/rest/teacher" onsubmit="return validateForm()" method="post">

                     Nový title: <input type="text" name="title" ></input>
                     Nový text: <input type="text" name="text"></input>
                     Nové ID: <input type="text" name="id"></input>
                     <input id="upraveni" onClick={validateForm2} type="submit" value="Upravit pacienta"></input>
                 </form>

             </div>
              <div  class="hidden" id={"potvrzeni2"}>{potvrzeni2} </div>
              <div>
            <p><b>Vytvoření diagnózy</b></p>
                             <form name="diagnozaForm" action="'https://owe-kazu.herokuapp.com/api/rest/teacher" onsubmit="return validateForm()" method="post">
                                  Název diagnózy: <input type="text" name="diagnoza" ></input>
                                  <input id="vytvoreniDiagnozy" onClick={validateForm3} type="submit" value="Vytvořit diagnózu"></input>
                              </form>

                          </div>
                           <div  class="hidden" id={"potvrzeni3"}>{potvrzeni3} </div>
        </div>

    );
};
//doresit kam se to bude posilat - atribut action + v jakym formatu
//priklad z  https://owe-kazu.herokuapp.com/api/rest/student - {"id":"5cbf6c8c54eef6000435b060","title":"PL","text":"Petr Čaloun"}
export default Form;