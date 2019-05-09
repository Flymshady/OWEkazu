import React from 'react';

class Section extends React.Component {
    render() {
        const { heading, body } = this.props;
        return (
            <div className={'GridItem'}>
                <div className={'FlexCenter BorderBottomPink Padding5'}>
                    { heading }
                </div>
                <div className={'Padding10'}>
                    { body }
                </div>
            </div>
        );
    }
}

export default Section;
