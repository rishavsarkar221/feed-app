import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import ThumbDownIcon from '@material-ui/icons/ThumbDownAlt';
import ReplyIcon from '@material-ui/icons/Reply';
import Tooltip from '@material-ui/core/Tooltip';
import Replies from './Replies';

const Posts = (props) => {

    const [replyContent, setReply] = useState("");
    const [userName, setName] = useState("");

    const [replyList, setReplyList] = useState([]);
    
    const [replyDisplay, setReplyDisplay] = useState("none");

    const replyOnChange = (event) => {
        setReply(event.target.value);
    }

    const nameOnChange = (event) => {
        setName(event.target.value)
    }

    const onReply = () => {
        if(replyContent !== "" && userName !== "") {
            setReplyList((oldReplies) => {
                return [{userName: userName, reply: replyContent}, ...oldReplies];
            });   
        }
        else {
            alert("Write Something")
        }
    }

    const onReplyButton = () => {
        setReplyDisplay("block");
    }

    const hideReplies = () => {
        setReplyDisplay("none");
    }

    return(
        <React.Fragment>
            <div className="card" style={{width: '28rem'}}>
                <div className="toast-header">
                    <img src={props.profilePic} class="rounded mr-2" alt={props.profileAlt} style={{width: '10%'}} />
                    <strong className="mr-auto">{props.name}</strong>
                </div>

                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>

                <img src={props.img} className="card-img-top" alt={props.alt} />

                <div className="card-body">
                    <Tooltip title="Like">
                        <Badge color="secondary" badgeContent={props.like} className="interact">
                            <FavoriteIcon className="interact" />                
                        </Badge>
                    </Tooltip>

                    <Tooltip title="Dislike">
                        <Badge color="secondary" badgeContent={props.dislike} className="interact" showZero>
                            <ThumbDownIcon className="interact" />
                        </Badge>
                    </Tooltip>

                    <Tooltip title="Reply">
                        <ReplyIcon className="interact" onClick={onReplyButton} />
                    </Tooltip>

                    <div className="replyArea" style={{display: replyDisplay}}>
                        <br/><br/>

                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" style={{outline: 'none'}} onClick={hideReplies}>
                            <Tooltip title="Close Reply Area">
                                <span aria-hidden="true">&times;</span>
                            </Tooltip>
                        </button>

                        <input type="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={nameOnChange} required />
                        <br/>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Reply" onChange={replyOnChange} rows="5" style={{resize: 'none'}} required></textarea>
                        <br/>                        
                        <button className="btn btn-outline-primary" onClick={onReply}>Reply</button>


                        <div className="replies">
                            <br/><br/>
                            {replyList.map((val, index) => {
                                return <Replies key={index} userName={val.userName} reply={val.reply} />
                            })}
                        </div>                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Posts;