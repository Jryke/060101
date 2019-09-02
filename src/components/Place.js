import React from 'react'
import '../styles/Place.css'

class Place extends React.Component {
	state = {
		images: [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
		]
	}

	render() {
		return(
			<>
				<h1>Places Component</h1>
				<div class='place-background large-background' style={{backgroundImage: `url(${this.state.images[0]})`}}></div>
				{this.state.images.map(img => <div class='place-background small-background' style={{backgroundImage: `url(${img})`}}></div>)}
			</>
		)
	}
}

export default Place
