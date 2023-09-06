import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import '../../pages/Chat.css'

const ChatMessages = ({messages}) => {

  const [currentUsername, setCurrentUsername] = useState(null)
  useEffect(() => {
    setCurrentUsername(localStorage.getItem('username'))
  }, [])
  return (
    <TransitionGroup component='ul' className='Chat-messages-list'>
      { 
        messages.map(msg => {
          return (
            <CSSTransition
              key={msg.id}
              timeout={500}
              classNames="item"
            >
              <li className={msg.owner === 'ADMIN' ? 'Chat-messages__item--admin' : 'Chat-messages__item'}>
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
            </CSSTransition>
          )
        })
      }
    </TransitionGroup>
  )
}

ChatMessages.propTypes = {
  messages: PropTypes.array,
}

export default ChatMessages