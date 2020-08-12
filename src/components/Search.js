import React, { Component } from 'react'

class Search extends Component {
    state = {
        input: ''
    }

    handleSearch = (e) => {
        this.props.filterFood(e.target.value)
        this.setState( {
            input: e.target.value
        })
    }
    
    render() {
        return (
        <div>
            <input type="text" name="search" value={this.state.input} onChange={this.handleSearch} placeholder="Search" />
        </div>
    )
    }
    
}

export default Search
