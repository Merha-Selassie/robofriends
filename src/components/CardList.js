import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	console.log('CardList');
	return (
		<div>
			{
			robots.map((user, i) => {
				return  (
					<a href={`/detail/${robots[i].id}`}>
							<Card 
								key={i} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email}/>
						</a>
					);	
				})
			}	
		</div>
	);
}

export default CardList;