import React from 'react';

const DetailCard = ({ robot }) => {

	return (
		<div className="mw5 mw7-ns center bg-light-green pa3 ma5 grow br3 shadow-5 ph5-ns">
			
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