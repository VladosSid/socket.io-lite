import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react' 
// import io from 'socket.io-client';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));

//  const socket = io('https://api-chat-lite.onrender.com'); // Ваш сервер Socket.io https://api-chat-lite.onrender.com http://localhost:5050/

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="App">
        <main className='App-main'>
          <h1 className='App__title'>Socket.io Chat</h1>

          <Routes>
            <Route
              index
              path='/home'
              element={<Home />}
            />

            <Route
              path='/chat'
              element={<Chat />}
              />
          </Routes>
        </main>
      </div>
    </Suspense>
  )
}

export default App
