import PropTypes from 'prop-types';

import './Users.css'

import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom';

function Users({usersList}) {  
  const navigaate = useNavigate()
  
  const exitChat = () => {
    navigaate('/')
  }

  return (
    <div className='Users'>
      <div>
        <div className="Users-count">
          Users Online: {usersList.length}
        </div>
        <ul className="Users-list">
          {usersList.map(user => <UserItem key={`${user.id}`} user={user}/>)}
        </ul>
      </div>

      <button onClick={() => exitChat()} className='Users__button'>Leave chat</button>
    </div>
  )
}

Users.propTypes = {
  usersList: PropTypes.array,
}

export default Users