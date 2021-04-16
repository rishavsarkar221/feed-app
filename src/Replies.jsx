import React from 'react';

const Replies = (props) => {
    return(
        <React.Fragment>
            <div className="toast-header">
                <img src="https://www.wwe.com/f/styles/wwe_large/public/all/2019/04/AJ_Styles_bio--29520c1a21281781bb33b5afee4e6659.jpg" className="rounded mr-2" style={{width: '15%', borderRadius: '50%'}} alt="profilePic" />
                <strong className="mr-auto">{props.userName}</strong>
            </div>
            <div className="toast-body">
                {props.reply}
            </div>
            <br/><br/>
        </React.Fragment>
    );
}

export default Replies;