import React from 'react';


const Form = ({form}) => {

var potvrzeni = 'Pacient byl úspěšně vytvořen';

    //funkce pro validaci formulare po potvrzeni (zze dopsat pripadne dalsi kriteria)
    function validateForm() {
      var x = document.forms["myForm"]["title"].value;
      if (x == "") {
        alert("Title musí být vyplněno!");
       return false;
      }
       var x = document.forms["myForm"]["id"].value;
            if (x == "") {
              alert("ID musí být vyplněno!");
              return false;
            }
       var x = document.forms["myForm"]["text"].value;
                   if (x == "") {
                     alert("Text musí být vyplněn!");
                   return false;
                   }
        //zobrazeni textu 'Pacient byl úspěšně vytvořen' v pripade uspesne validace
        var x = document.getElementById("potvrzeni");
                   x.style.display = "block";
    }
    return (
        <div>

            <div>

                <form name="myForm" action="'https://owe-kazu.herokuapp.com/api/rest/teacher" onsubmit="return validateForm()" method="post">
                     Title: <input type="text" name="title" ></input>
                     Text: <input type="text" name="text"></input>
                     ID: <input type="text" name="id"></input>
                     <input id="vytvoreni" onClick={validateForm} type="submit" value="Vytvořit pacienta"></input>
                 </form>

             </div>

              <div  class="hidden" id={"potvrzeni"}>{potvrzeni} </div>

        </div>


    );
};
//doresit kam se to bude posilat - atribut action + v jakym formatu
//priklad z  https://owe-kazu.herokuapp.com/api/rest/student - {"id":"5cbf6c8c54eef6000435b060","title":"PL","text":"Petr Čaloun"}
export default Form;