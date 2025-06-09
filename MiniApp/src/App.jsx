import Header from './components/header/Header'
import PlayerInfo from './components/playerInfo/PlayerInfo'
import Loader from './components/loader/Loader'
import './App.css'
import TournamentList from './components/tournamentList/TournamentList'

function App() {

  
  return (
    <>
      <main className='main'>
        <Header />
        <PlayerInfo userName = 'LongUserName' balance = '100,500.00'/>
        <Loader />
        <TournamentList />
     </main>
    </>
  )
}

export default App
