import React from 'react';
import '../chatRoom.css';

const userName = "Alex";

const ChatRoom = props => {
  return (
    <div>
      <div className="commentBox"><input className="commentBox__inoutField" type='text' value={props.removeOldString} onChange={props.changeHandler} />
      <button className="commentBox__submitButton" onClick={props.addToList}>Send Comment</button></div>
      <div className="chatRoomWrapper"><span className="body_altFont">
        {props.chatRoomList.map((item, i) => {
          return <div><span className="gameBox__chatroom__screenName">{userName}: </span>{props.checkHandler}{item.text}<hr className="chatRoom"/></div>;
        })}
        </span>
      </div>
    </div>
  );
};

export default ChatRoom;