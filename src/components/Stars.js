import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
	return (
		// generate a list of stars using lodash range() function
  	<div className="col-5">
    	{_.range(0, props.numberOfStars).map((num) => {
      	return <i key={num} className="fa fa-star"></i>
      })}
    </div>
  )
}

export default Stars;