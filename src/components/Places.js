import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{
				title: 'Mansion',
				price: 1000,
				location: 'Lamai'
			},
			{
				title: 'House',
				price: 500,
				location: 'Chaweng'
			},
			{
				title: 'Hotel',
				price: 250,
				location: 'Maenam'
			},
			{
				title: 'Bungalow',
				price: 100,
				location: 'Pha-ngan'
			},
			{
				title: 'Hut',
				price: 50,
				location: 'Maret'
			},
			{
				title: 'Tent',
				price: 20,
				location: 'Thong Krut'
			}
		]
	}

	render() {
		return (
			<div>
				<h1>{this.state.places.length}</h1>
				<div className="thumbnails">
					{this.state.places.map((place, i) => <Thumbnail key={i} place={place} />)}
				</div>
				<Favorites />
			</div>
		)
	}
}

export default Places
