import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import config from './config/env_var';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';
import { Loading } from './components/Loading';

class App extends Component {
  state = {
    loading: true,
    searches: [],
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&extras=description,url_m&per_page=24&api_key=${
    config.FLICKR_KEY
  }&nojsoncallback=1&tags=`;

  componentDidMount() {
    this.getPhotos('shinrin yoku');
    this.getPhotos('cats');
    this.getPhotos('guinea pigs');
  }

  getPhotos = topic => {
    this.setState({ loading: true });
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
        if (!topicExists) {
          this.setState(prevState => ({
            searches: [...prevState.searches, responseObject],
            loading: false,
          }));
        } else {
          this.setState({ loading: false });
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
            {this.state.loading ? (
              <Loading />
            ) : (
              <Route
                exact
                path="/"
                render={() => <Redirect to="/topics/popular" />}
              />
            )}
            <Route
              path="/topics/popular"
              render={() => (
                <Gallery
                  data={this.state.searches.find(
                    search => search.topic === 'shinrin yoku'
                  )}
                />
              )}
            />
            <Route
              path="/topics/cats"
              render={() => (
                <Gallery
                  data={this.state.searches.find(
                    search => search.topic === 'cats'
                  )}
                />
              )}
            />
            <Route
              path="/topics/guinea-pigs"
              render={() => (
                <Gallery
                  data={this.state.searches.find(
                    search => search.topic === 'guinea pigs'
                  )}
                />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
