import TournamentItem from '../tournamentItem/TournamentItem.jsx'
import { data } from '../../data.js';
import './tournamentList.css'


const TournamentList = () => {
  
    return (
        <div className='list'>
            {data.map(data => <TournamentItem data={data} key={data.id}/>)}
        </div>
    );
};

export default TournamentList;