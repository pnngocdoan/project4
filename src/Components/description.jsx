import { useState } from 'react';

const Description = ({text, date, title, handleBanDate}) => {
    const [showFullText, setShowFullText] = useState(false);
    const [buttonName, setButtonName] = useState("See more");
    const handleClick = () => {
        if (showFullText) {
            setShowFullText(false);
            setButtonName("See more");
        }
        else {
            setShowFullText(true);
            setButtonName("See less");
        }
    }

    return (
        <div className="paragraph" style={{width: showFullText ? '600px' : '400px'}}>
            <h3>{title}</h3>
            <button className="date" onClick={handleBanDate}>
                {date}
                <span class="hover-text">Click to ban this date</span>
            </button>
            {showFullText ? (
                <p className="content"> {text} </p>      
            ) : (
                <p className="content"> 
                {text.slice(0,300)} 
                {text.length > 300 ? " ..." : ""}
                </p>
            )}
            <button className="read-more" onClick={handleClick}>{buttonName}</button>
        </div>
    )
}

export default Description;