/* eslint-disable react/prop-types */
import { useEffect, useState} from 'react'
import PropTypes from 'prop-types';

import './Users.css'

const UserList = ({user}) => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
  }, [])
  return (
    <>
      <li className='User-item'>
        <span className={username === user.name ? 'User-item--owner' : ''}>{user.name}</span>
        {/* {owner.id === user.id ? 
          <FaBeer /> :
          null
        } */}
        {/* <FaBeer /> */}
      </li>
    </>
  )
}

UserList.propTypes = {
  user: PropTypes.object
}

export default UserList