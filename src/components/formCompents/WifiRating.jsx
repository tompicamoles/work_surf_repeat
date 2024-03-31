import React, { useState } from 'react';
import { StarIcon } from '@radix-ui/react-icons';
import { FaWifi } from "react-icons/fa";


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
            <FaWifi
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
