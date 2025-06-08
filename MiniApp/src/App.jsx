import Header from './components/header/Header'
import PlayerInfo from './components/playerInfo/PlayerInfo'
import './App.css'

function App() {

  return (
    <>
      <main className='main'>
        <Header />
        <PlayerInfo userName = 'LongUserName' balance = '100,500.00'/>
     </main>
    </>
  )
}

export default App
