import React from 'react';

const Diary = (props) => {
    return (
        <div className={props.sidebar ? 'diary' : 'diary active'}>
            <iframe
                src="http://kyj9168.ddns.net:6103/"
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                }}
            />
        </div>
    );
};

export default Diary;
