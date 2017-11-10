/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import Scroll from 'react-scroll';

import ChatRoom from './components/ChatRoom';
import StartGame from '../StartGame.js';
import './chatRoom.css';

let Link       = Scroll.Link;
let DirectLink = Scroll.DirectLink;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller  = Scroll.scroller;

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

  scrollBottom() {
    scroll.scrollToBottom();
    console.log("scroll called");
    this.state = {
      scrollToBottom : this.scrollBottom.bind(this)
    };
  }

  componentDidMount() {
    
        Events.scrollEvent.register('begin', function() {
        });
    
        Events.scrollEvent.register('end', function() {
        });
    
        scrollSpy.update();
    
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
    this.scrollBottom();
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