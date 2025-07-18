import './playerInfo.css'
import avatar from '../../assets/avatar.svg'
import btn_balance from '../../assets/btn_balance.svg'

const PlayerInfo = ( {userName, balance} ) => {
    return (
        <>
          <section className='playerInfo'>
            <div className="userInfo">
                <div className="userName">{userName}</div>
                <div className="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="8" viewBox="0 0 44 8" fill="none">
                        <g clipPath="url(#clip0_6_773)">
                            <path d="M4 0L5.24731 2.45763L8 2.88136L5.97849 4.78814L6.45161 7.5L4 6.22881L1.54839 7.5L1.97849 4.78814L0 2.88136L2.75269 2.45763L4 0Z" fill="#FAFF1A"/>
                            <path d="M13 0L14.2473 2.45763L17 2.88136L14.9785 4.78814L15.4516 7.5L13 6.22881L10.5484 7.5L10.9785 4.78814L9 2.88136L11.7527 2.45763L13 0Z" fill="#FAFF1A"/>
                            <path d="M22 0L23.2473 2.45763L26 2.88136L23.9785 4.78814L24.4516 7.5L22 6.22881L19.5484 7.5L19.9785 4.78814L18 2.88136L20.7527 2.45763L22 0Z" fill="#FAFF1A"/>
                            <path d="M31 0L32.2473 2.45763L35 2.88136L32.9785 4.78814L33.4516 7.5L31 6.22881L28.5484 7.5L28.9785 4.78814L27 2.88136L29.7527 2.45763L31 0Z" fill="#FAFF1A"/>
                            <path d="M40 0L41.2473 2.45763L44 2.88136L41.9785 4.78814L42.4516 7.5L40 6.22881L37.5484 7.5L37.9785 4.78814L36 2.88136L38.7527 2.45763L40 0Z" fill="#FAFF1A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_773">
                            <rect width="44" height="8" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="balance">
               <img src={btn_balance} alt="btn_balance" />
               <div className="balance-value">${balance}</div>
            </div>
            </section>
        </>
    );
};

export default PlayerInfo;