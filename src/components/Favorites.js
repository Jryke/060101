import React from 'react';
import '../styles/Favorites.css';
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {
	state = {
		places: this.props.places
	}

	render() {
		return (
			<div className="favorites">
				<h1>Favorites:</h1>
				{this.state.places.filter(place => place.liked).map((place, i) => <Thumbnail key={i} place={place} toggleLike={this.props.toggleLike}/>)}
			</div>
		)
	}
}

export default Favorites
