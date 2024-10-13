import React, { useState } from 'react'
import './Chat.css'
import axios from './axios'
import { Avatar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { SearchOutlined, MoreVert, AttachFile } from '@mui/icons-material';

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async  (e) =>  {
    e.preventDefault();
    await axios.post('/api/v1/messages', {
      message: input,
      name: "Ragini",
      timestamp: "Just now",
      received: false
    })

    setInput('')
  }
  return (
    <div className='chat' >
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(message => (
          <p className={`chat__message ${message.received && "chat__receiver"}`} key={message.id}>
            <span className="chat__name">{message.name}</span>{message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))
        }
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message' />
          <button onClick={ sendMessage}type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
