import React from 'react'
import '../styles/Place.css'

class Place extends React.Component {
	state = {
		images: [
			'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
			'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
		],
		selectedImage: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
	}

	replaceImage = (imgSrc) => {
		this.setState({
			selectedImage: imgSrc
		})
	}

	render() {
		return(
			<>
				<h1>Places Component</h1>
				<div id='place-large-background' className='place-background large-background' style={{backgroundImage: `url(${this.state.selectedImage})`}} ></div>
				{this.state.images.map((img, i) => <div key={i} id={`background${i}`} className='place-background small-background' style={{backgroundImage: `url(${img})`}} onClick={() => this.replaceImage(this.state.images[i])}></div>)}
			</>
		)
	}
}

export default Place
