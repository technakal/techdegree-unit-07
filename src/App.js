import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../src/config/config';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';

class App extends Component {
  state = {
    searches: [],
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&extras=description,url_m&per_page=24&api_key=${
    config.FLICKR_KEY
  }&nojsoncallback=1&tags=`;

  componentDidMount() {
    const defaultSearches = ['popular', 'cats', 'guinea-pigs'];
    defaultSearches.forEach(key => {
      const searchURL = this.baseURL + key;
      this.retrievePhotos(searchURL, key);
    });
  }

  retrievePhotos = (url, key) => {
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        const dataObject = {
          topic: key,
          currentPage: responseData.photos.page,
          photos: responseData.photos.photo,
        };
        this.setState({
          searches: [dataObject, ...this.state.searches],
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
            <Route
              exact
              path="/"
              component={() => <Gallery photos={this.state.searches} />}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
