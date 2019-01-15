import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../src/config/config';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';

class App extends Component {
  state = {
    loading: true,
    searches: [],
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&extras=description,url_m&per_page=24&api_key=${
    config.FLICKR_KEY
  }&nojsoncallback=1&tags=`;

  componentDidMount() {
    const topic = 'popular';
    fetch(this.baseURL + topic)
      .then(response => response.json())
      .then(responseData => {
        const responseObject = {
          topic: topic,
          page: responseData.photos.page,
          photos: responseData.photos.photo,
        };
        this.setState(prevState => ({
          searches: [...prevState.searches, responseObject],
          loading: false,
        }));
      })
      .catch(error => console.error(error));
  }

  getPhotos = topic => {
    fetch(this.baseURL + topic)
      .then(response => response.json())
      .then(responseData => {
        const responseObject = {
          topic: topic,
          page: responseData.photos.page,
          photos: responseData.photos.photo,
        };
        const topicExists = this.state.searches.find(
          search => search.topic === topic
        );
        if (topicExists) {
          const newPage = topicExists.page < responseObject.page;
          if (newPage) {
            responseObject.photos = [
              responseObject.photos,
              ...topicExists.photos,
            ];
            this.setState(prevState => ({
              searches: [...prevState.searches, responseObject],
            }));
          }
        }
        if (!topicExists) {
          this.setState(prevState => ({
            searches: [...prevState.searches, responseObject],
          }));
        }
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header getPhotos={this.getPhotos} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return this.state.loading ? (
                  <h1>Loading...</h1>
                ) : (
                  <Gallery
                    data={this.state.searches.find(
                      search => search.topic === 'popular'
                    )}
                  />
                );
              }}
            />
            <Route path="/topics" component={Header} />
            <Route path="/history" component={Header} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
