import PropTypes from 'prop-types';

import './Users.css'

import UserItem from './UserItem'

function Users({usersList}) {  
  return (
    <div className='Users'>
      <div className="Users-count">
        Users Online: {usersList.length}
      </div>
      <ul className="Users-list">
        {usersList.map(user => <UserItem key={`${user.id}`} user={user}/>)}
      </ul>
    </div>
  )
}

Users.propTypes = {
  usersList: PropTypes.array,
}

export default Users