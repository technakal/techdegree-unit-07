import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../src/config/config';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';

class App extends Component {
  state = {
    searches: {
      dogs: [],
      'guinea-pigs': [],
    },
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&extras=description,url_m&per_page=24`;

  componentDidMount() {
    const defaultSearches = Object.keys(this.state.searches);
    defaultSearches.forEach(key => this.retrievePhotos(key));
  }

  retrievePhotos = searchTerm => {
    const searchURL = `${this.baseURL}&tags=${searchTerm}&api_key=${
      config.FLICKR_KEY
    }&nojsoncallback=1`;
    fetch(searchURL)
      .then(response => response.json())
      .then(responseData => {
        const dataObject = {
          currentPage: responseData.photos.page,
          photos: responseData.photos.photo,
        };
        const searchObject = this.state.searches;
        searchObject[searchTerm] = dataObject;
        this.setState({
          searches: searchObject,
        });
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header retrievePhotos={this.retrievePhotos} />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
