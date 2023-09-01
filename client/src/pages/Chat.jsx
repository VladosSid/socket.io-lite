import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import ChatMessages from '../components/Chat/ChatMessage'
import ChatInput from '../components/Chat/ChatInput'
import Users from '../components/users/Users'

import './Chat.css'

const PageChat = ({ socket }) => {
  const [username, setUsername] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userName = localStorage.getItem('username')
    setUsername(userName)
  }, [])

  useEffect(() => {
    if (!username) return

    socket.on('joinUser', data => {
      setMessages(data.messages)
      setUsers(data.members)
    })
    socket.emit('join', username)

  }, [username])

  socket.on('ADMIN', data => {
    setMessages([...messages, data])
  })

  socket.on('messageUser', data => {
    setMessages([...messages, data])
  })

  socket.on('message', data => {
    setMessages([...messages, data])
  })
  
  const send = e => {
    e.preventDefault()

    if (message === '') return

    socket.emit('message', {
      message,
      username,
    })
    clear()
  }

  const clear = () => {
    setMessage('')
  }

  return (
    <div className='Chat__container'>
      <Users usersList={users}/>
      <div className='Chat__container-message'>
        <ChatMessages messages={messages} />

        <ChatInput setMessage={setMessage} message={message} send={send}/>
      </div>
    </div>
  )
}

PageChat.propTypes = {
  socket: PropTypes.object,
}

export default PageChat