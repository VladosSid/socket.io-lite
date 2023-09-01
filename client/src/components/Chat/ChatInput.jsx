import PropTypes from 'prop-types';


import '../../pages/Chat.css'

const ChatInput = ({setMessage, message, send}) => {
  // const [message, setMessage] = useState('')

  // const sendMessage = e => {
    // e.preventDefault()
    // send()
  // }

  return (
    <form onSubmit={send} className="Chat-input__form">
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="Chat-input__form-input"/>

      <button type="submit" className="Chat-input__button">Send</button>
    </form>
  )
}

ChatInput.propTypes = {
  setMessage: PropTypes.func,
  message: PropTypes.string,
  send: PropTypes.func,
}

export default ChatInput