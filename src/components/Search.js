import React from 'react'
import '../styles/Search.css'

class Search extends React.Component {

	render() {
		return(
			<div className="search">
				<input type='text' placeholder='search...'></input>
			</div>
		)
	}
}

export default Search
