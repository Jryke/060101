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
		],
		searchTerm: "",
	}

	toggleLike = (t) => {
		let places = this.state.places
		places.forEach(place => {
			if (t === place.title) {
				place.liked = !place.liked
			}
		})
		this.setState({places})
	}

	setSearchTerm = (e) => {
		let searchTerm = e.target.value
		this.setState({searchTerm})
	}

	searchFilterPlaces = () => this.state.places
		.filter(place => place.title.includes(this.state.searchTerm))

	filterFavorites = () => this.state.places.filter(place => place.liked)

	render() {
		return (
			<div>
				<h1>{this.state.places.length}</h1>
				<Search setSearchTerm={this.setSearchTerm} value={this.state.searchTerm} />
				<div className="thumbnails">
					{this.searchFilterPlaces().map((place, i) => <Thumbnail key={i} place={place} toggleLike={this.toggleLike} />)}
				</div>
				<Favorites filteredFavorites={this.filterFavorites} toggleLike={this.toggleLike} />
			</div>
		)
	}
}

export default Places
