import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
  }, [])

  const handleEnterChat = () => {
    if (username.toLowerCase().includes('admin')) {
      window.alert('This name blocked!!!')
      return
    }
    if (username.trim() !== '') {
      // Зберігаємо ім'я користувача в локальне сховище
      localStorage.setItem('username', username);
      navigate('/chat')
    }
  };

  return (
    <div className='Home'>
      <div className='Home-continer'>
        <label className='Home__lable'>
          Username:
          <input type="text" className='Home__input' value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <a className='Home__link'>
          <button className='Home__button' onClick={handleEnterChat}>Enter Chat</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
