import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		place: this.props.place,
	}

	toggleLike = () => {
		let place = this.state.place
		place.liked = !place.liked
		this.setState({place})
	}

	toggleLikedClass = () => {
		return this.state.place.liked ? 'liked' : ''
	}

	render() {
		return (
			<div className='thumbnail'>
				<span>{this.props.place.title} </span>
				<span>{this.props.place.price} </span>
				<span>{this.props.place.location} </span>
				<button className={this.toggleLikedClass()} onClick={this.toggleLike}>Like</button>
			</div>
		)
	}
}

export default Thumbnail
