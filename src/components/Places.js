import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'
import Search from './Search'

class Places extends React.Component {
	state = {
		places: [
			{
				title: 'Mansion',
				price: 1000,
				location: 'Lamai',
				liked: false
			},
			{
				title: 'House',
				price: 500,
				location: 'Chaweng',
				liked: false
			},
			{
				title: 'Hotel',
				price: 250,
				location: 'Maenam',
				liked: true
			},
			{
				title: 'Bungalow',
				price: 100,
				location: 'Pha-ngan',
				liked: true
			},
			{
				title: 'Hut',
				price: 50,
				location: 'Maret',
				liked: false
			},
			{
				title: 'Tent',
				price: 20,
				location: 'Thong Krut',
				liked: false
			}
		]
	}

	toggleLike = (t) => {
		let places = this.state.places
		places.map(place => {
			if (t === place.title) {
				place.liked = !place.liked
			}
		})
		this.setState({places})
	}

	render() {
		return (
			<div>
				<h1>{this.state.places.length}</h1>
				<Search />
				<div className="thumbnails">
					{this.state.places.map((place, i) => <Thumbnail key={i} place={place} toggleLike={this.toggleLike} />)}
				</div>
				<Favorites places={this.state.places} toggleLike={this.toggleLike} />
			</div>
		)
	}
}

export default Places
