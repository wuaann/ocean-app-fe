import React, { useState } from 'react';
interface seeMoreTextProps {
    text : string
    maxChar: number
}
const SeeMoreText = ({text ,maxChar}:seeMoreTextProps) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText((prev) => !prev);
    };

    return (
        <div>
            {showFullText ? (
                <p>{text}</p>
            ) : (
                <p>{text.slice(0, maxChar)}{text.length > maxChar ? '...' : ''}</p>
            )}

            {text.length > maxChar && (
                <button onClick={toggleShowFullText} className="text-gray-500">
                    {showFullText ? 'See Less' : 'See More'}
                </button>
            )}
        </div>
    );
};

export default SeeMoreText;
