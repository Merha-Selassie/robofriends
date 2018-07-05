import React from 'react';

const DetailCard = ({ robot }) => {

	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			
			<div>
				<h2>{robot.name}</h2>
				<img alt='robots' src={`https://robohash.org/${robot.id}?size=200x200`}/>
				<div className='info'>
					<p>{robot.email}</p>
					<p>{robot.phone}</p>
					<p>{robot.website}</p>
					<p>{robot.phone}</p>
				</div>
			</div>
		</div>
	);
}

export default DetailCard;