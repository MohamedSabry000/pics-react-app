import React from 'react';
// import { Button, Icon } from 'semantic-ui-react'

import unsplash from '../../Api/unsplash';
import NavBar from '../NavBar'
import SearchBar from "../SearchBar";
import ImageList from "../ImageList";
import './styles.css';


class App extends React.Component {
  state = { images: [], term: '', page: 1}

  onSearchSubmit = async (term) => {
    // using Axios for fetching data from https://unsplash.com/developer photo api
    const response = await unsplash.get('/search/photos', {
      params: { query: term, page: 1},
    });

    this.setState({ images: response.data.results, term: term, page: 1 });
  }

  getData = async(page) => {
    return await unsplash.get('/search/photos', {
      params: { query: this.state.term, page: page},
    });
  }

  loadMoreButton = async (val) => {
    // const response = this.getData(this.state.page+1);
    let response = null;
    switch(val){
      case "next": 
        response = await this.getData(this.state.page+1);
        this.setState({ images: response.data.results, 
                        page: this.state.page+1 });
        break;
      case "load":
        response = await this.getData(this.state.page+1);
        this.setState({ images: this.state.images.concat(response.data.results), 
                        page: this.state.page+1 });
        break;
      case "past":
        const sure = this.state.page > 1 ? this.state.page-1 : this.state.page ;
        response = await this.getData(sure);
        this.setState({ images: response.data.results,
                        page: sure});
        break;
      default:
        break;
    }
    console.log(`Page = ${this.state.page}`);
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <NavBar onSubmit={this.onSearchSubmit} />
        {/* <SearchBar onSubmit={this.onSearchSubmit} /> */}
        <ImageList images={this.state.images} loadBtn={this.loadMoreButton} />
      </div>
    );
  }
}

export default App;
