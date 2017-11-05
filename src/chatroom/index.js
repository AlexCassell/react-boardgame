/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatRoom from './components/ChatRoom';
import StartGame from '../StartGame.js';
import './chatRoom.css';

class ChatRoomIndex extends Component {
  constructor() {
    super();
    this.state = {
      newChatRoom: '',
      chatRoomList: []
    };
    this.handleNewChatRoom = this.handleNewChatRoom.bind(this);
    this.handleAddNewChatRoom = this.handleAddNewChatRoom.bind(this);
  }

  handleNewChatRoom(event) {
    this.setState({ newChatRoom: event.target.value });
  }

  handleAddNewChatRoom() {
    let removeOldString = this.state.newChatRoom;
    let choreObj = {'text' : this.state.newChatRoom, 'completed' : false};
    const chatRoomList = this.state.chatRoomList;
    chatRoomList.push(choreObj);
    this.setState({ chatRoomList, newChatRoom: '' });
    console.log(this.state.chatRoomList);
  }
render() {
    return (
      <div>
        <h2><span className="body_altFont">Game Log</span></h2>
        <ChatRoom
          removeOldString={this.state.newChatRoom}
          changeHandler={this.handleNewChatRoom}
          addToList={this.handleAddNewChatRoom}
          chatRoomList={this.state.chatRoomList}
          checkHandler={this.handleClickItem}
        />
      </div>

    );
  }
}

render(<ChatRoomIndex />, document.getElementById('root'));
export default ChatRoomIndex;