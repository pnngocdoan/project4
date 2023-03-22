import { useState } from 'react';

const BanList = ({bannedDates, handleClick}) => {
    return (
        <div className="ban-list">
            <h5>Banned Dates</h5>
            {bannedDates && bannedDates.length > 0 ? 
            (bannedDates.map((date, index) => (
                <button className="date-btn" key={index} onClick={handleClick}>
                    {date}
                </button> 
            ))) : (<div></div>)
            }
        </div>
    )
}

export default BanList;