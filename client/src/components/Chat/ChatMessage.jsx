import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';


import '../../pages/Chat.css'

const ChatMessages = ({messages}) => {

  const [currentUsername, setCurrentUsername] = useState(null)
  useEffect(() => {
    setCurrentUsername(localStorage.getItem('username'))
  }, [])
  return (
    <ul className='Chat-messages-list'>
      { 
        messages.map(msg => {
          return (
            <li key={msg.id} className={msg.owner === 'ADMIN' ? 'Chat-messages__item--admin' : 'Chat-messages__item'}>
              {
                msg.owner !== 'ADMIN' ? 
                (<span 
                  className={`Chat-messages__user-name ${msg.owner === currentUsername ? 'Chat-messages__user-name--owner' : ''}`}>
                    {msg.owner === currentUsername ? 'You' : msg.owner}
                </span>) :
                null
              }

              <span 
                className={msg.owner === 'ADMIN' ? `Chat-messages__text--admin ${msg.status ? msg.status === 'connected' ? 'connected' : 'disconnected' : null}` : `Chat-messages__text ${msg.owner === currentUsername ? 'Chat-messages__text--owner' : ''}`}>
                  {msg.owner === 'ADMIN' ? (msg.nameUser === currentUsername ? 'You ' : msg.nameUser) + msg.message : msg.message}
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

ChatMessages.propTypes = {
  messages: PropTypes.array,
}

export default ChatMessages