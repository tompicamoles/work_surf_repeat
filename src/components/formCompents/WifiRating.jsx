import React, { useState } from 'react';
import { StarIcon } from '@radix-ui/react-icons';

const WifiRating = ({handleOtherInputChange, wifiQuality}) => {
 const [hover, setHover] = useState(null);

 return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleOtherInputChange("wifiQuality",starValue)}
          >
            <StarIcon
              style={{
                color: starValue <= (hover || wifiQuality) ? '#ffe101' : '#ccc',
              }}
            />
          </button>
        );
      })}
    </div>
 );
};

export default WifiRating;
