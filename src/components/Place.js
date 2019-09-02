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

	addOutlineClass = (img) => img === this.state.selectedImage ? 'place-outline' : ''

	replaceImage = (imgSrc) => {
		this.setState({
			selectedImage: imgSrc
		})
	}

	render() {
		return(
			<>
				<h1>Places Component</h1>
				<div className='place-background large-background' style={{backgroundImage: `url(${this.state.selectedImage})`}} ></div>
				{this.state.images.map((img, i) => <div key={i} className={`place-background small-background ${this.addOutlineClass(img)}`} style={{backgroundImage: `url(${img})`}} onClick={() => this.replaceImage(this.state.images[i])}></div>)}
			</>
		)
	}
}

export default Place
