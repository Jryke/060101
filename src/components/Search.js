import React from 'react'
import '../styles/Search.css'

class Search extends React.Component {

	render() {
		return(
			<div className="search">
				<input type='text' placeholder='search...' onChange={this.props.setSearchTerm} value={this.props.value}></input>
			</div>
		)
	}
}

export default Search
