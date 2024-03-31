import React, { useState } from 'react';
import { BiDollar } from "react-icons/bi";


const LifeCost = ({handleOtherInputChange, lifeCost}) => {
 const [hover, setHover] = useState(null);

 return (
    <div>
      {[...Array(5)].map((_, index) => {
        const costValue = index + 1;
        return (
          <button
            key={index}
            onMouseEnter={() => setHover(costValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleOtherInputChange("lifeCost",costValue)}
          >
            <BiDollar
              style={{
                color: costValue <= (hover || lifeCost) ? '#ffe101' : '#ccc',
              }}
            />
          </button>
        );
      })}
    </div>
 );
};

export default LifeCost;
