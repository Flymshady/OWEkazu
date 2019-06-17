import React from 'react';
import { Link } from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (

            <div className={'Content FlexCenter'}>
                <span className={'horizontal-bar'}></span>
                <div className={"card"}>
                    <img src="https://image.flaticon.com/icons/svg/1877/1877771.svg" className={'w100'}></img>
                        <div className={"container"}>
                            <h4><b>Student</b></h4>
                            <Link to={'/patient'}>Vstup do systému <i className="fas fa-caret-right"></i></Link>
                        </div>
                </div>
                <div className={"card"}>
                    <img src="https://image.flaticon.com/icons/svg/1875/1875640.svg" className={'w100'}></img>
                    <div className={"container"}>
                        <h4><b>Vyučující</b></h4>
                        <Link to={'/admin'}>Vstup do systému <i className="fas fa-caret-right"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
