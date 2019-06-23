import React from 'react';
import DiagnosisBar from "../DiagnosisBar";



class PersonalData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vykresleniTextExam : true,
            vykresleniImageExam : true,
            ohodnoceni : true,
            pocetChyb : 0,
            znamka : '',
            text : "",
            image : "",
            imageTitle : "",
            index : 0,
            examsChecked : [],
            personalDataToSent : [],
            examsWithTextToSent : [],
            examsWithImageToSent : [],
            patientId : "",
            diagnosis : "",
            vykresleni : "",
        };
    }


    clickButton = () =>
    {
        if(this.state.vykresleni){

            var x = document.getElementById("myDIV");
            x.style.display = "block";
            this.state.vykresleni=false;
        }
    }

    clickButton2 = (id) =>
    {

        for(let i in this.state.examsWithTextToSent) {
            this.state.text = this.state.examsWithTextToSent.map(function (val) {
                if(val.id === id) {
                    //console.log(val.text);
                    var x = document.getElementById("answer1");
                    x.style.display = "block";
                    return val.text;
                }
            })
        }

        document.getElementById('answer1').innerHTML = this.state.text;

        if(this.state.vykresleniTextExam) {
            this.state.examsChecked[this.state.index] = id;
            this.state.index++;
            this.state.vykresleniTextExam = false;
        }


        console.log(this.state.examsChecked);
    }

    clickButton3 = (id) => {

        for(let i in this.state.examsWithImageToSent) {
            this.state.image = this.state.examsWithImageToSent.map((val) =>{
                if(val.id === id) {
                    console.log(val.title);
                    this.state.imageTitle = val.title;
                    val.imageGroup.images.map(function (val2) {
                        var x = document.getElementById("answer2");
                        x.style.display = "block";
                        console.log(val2.filename);
                        return val2;
                    })
                }
            })
        }

        //document.getElementById('answer2').innerHTML = this.state.image;
        //document.getElementById('answer2').innerHTML = this.state.imageTitle;



        if(this.state.vykresleniImageExam) {
            console.log(this.state.vykresleniImageExam);
            this.state.examsChecked[this.state.index] = id;
            this.state.index++;
            this.state.vykresleniImageExam = false;
        }

        console.log(this.state.examsChecked);
    }

    render() {
        this.state.vykresleni = true;
        this.state.personalDataToSent = this.props.personalDataToSent;
        this.state.examsWithTextToSent = this.props.examsWithTextToSent;
        this.state.examsWithImageToSent = this.props.examsWithImageToSent;
        this.state.patientId = this.props.patientId;
        this.state.diagnosis = this.props.diagnosis;
        //console.log(this.state.personalDataToSent + ',' + this.state.vykresleni);
        return (
            <div>
                <div>{this.state.personalDataToSent.map(function(item, i){
                    return <h3 key={i}>{item.title} : {item.text}</h3>
                })}</div>

                <button id="moznosti" onClick={this.clickButton}>Zobrazit možnosti</button>

                <div id={"myDIV"}>
                    <div>{this.state.examsWithTextToSent.map((item, i) => (
                        <div>
                            <button onClick={()=>this.clickButton2(item.id)} key={i}>{item.title}</button>
                        </div>
                    ))}</div>

                    <div>{this.state.examsWithImageToSent.map((item, i) => (
                        <div>
                            <button onClick={()=>this.clickButton3(item.id)} key={i}>{item.title}</button>
                        </div>
                        ))}</div>

                    <div id={"answer1"} className={"hidden"}><p>{this.state.text}</p></div>

                    <div id={"answer2"} className={"hidden"}>

                        <img src={this.state.image.filename} alt={this.state.image.text} width={500} height={500}></img></div>

                </div>

                <div>
                    <DiagnosisBar patientId = {this.state.patientId} diagnosisName = {this.state.diagnosis} exams = {this.state.examsChecked}/>
                </div>
            </div>

        );

    }
}

export default PersonalData;