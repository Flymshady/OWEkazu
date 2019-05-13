import React from 'react';


var title1, title2, title3, title4, title5,title6, title7, title8, title0;
var text1, text2, text3, text4, text5,text6, text7, text8, text0;

const PersonalData = ({personalData}) => {

    for(let i in personalData) {
        title0=personalData[0].title;
        title1=personalData[1].title;
        title2=personalData[2].title;
        title3=personalData[3].title;
        title4=personalData[4].title;
        title5=personalData[5].title;
        title6=personalData[6].title;
        title7=personalData[7].title;
        title8=personalData[8].title;


        text0=personalData[0].text;
        text1=personalData[1].text;
        text2=personalData[2].text;
        text3=personalData[3].text;
        text4=personalData[4].text;
        text5=personalData[5].text;
        text6=personalData[6].text;
        text7=personalData[7].text;
        text8=personalData[8].text;


    }

    return (
        <div>
            <div className={'FlexSpacer'}>
                <h3>{title0}</h3>
                <p>{text0}</p>
                <h3>{title1}</h3>
                <p>{text1}</p>
                <h3>{title2}</h3>
                <p>{text2}</p>
                <h3>{title3}</h3>
                <p>{text3}</p>
                <h3>{title4}</h3>
                <p>{text4}</p>
                <h3>{title5}</h3>
                <p>{text5}</p>
                <h3>{title6}</h3>
                <p>{text6}</p>
                <h3>{title7}</h3>
                <p>{text7}</p>
                <h3>{title8}</h3>
                <p>{text8}</p>

            </div>
        </div>

    );
};

export default PersonalData;

/*
import React from 'react';

var title, text = [];

const PersonalData = ({personalData}) => {
    let objects = JSON.parse(personalData);

    for(let i in objects) {
        title += objects[i].title;
        text += objects[i].text;
    }
    return (
        <div>
            <div className={'FlexSpacer'}>
                <h3>
                    <p>{title[1].toString()}</p>
                </h3>

            </div>
        </div>

    );
};

export default PersonalData;
*/