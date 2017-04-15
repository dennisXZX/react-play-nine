import React from 'react';
import _ from 'lodash';

const Numbers = (props) => {
	// apply a different CSS style if the number is in the selectedNumbers array
	const numberClassName = (number) => {
		if (props.selectedNumbers.indexOf(number) >= 0) {
			return 'selected';
		}
	};

	return (
  	<div className="card text-center">
    	<div>
				{Numbers.list.map((number, i) => 
        	<span 
						key={i} 
						className={numberClassName(number)}
						onClick={() => props.selectNumber(number)}>{number}</span>
        )}
      </div>
    </div>
  )
}

// use lodash to generate an array of numbers (1 - 9)
// store it as a property in the Numbers component
Numbers.list = _.range(1, 10);

export default Numbers;