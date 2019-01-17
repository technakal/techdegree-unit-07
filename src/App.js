import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import config from './config/env_var';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';
import { Loading } from './components/Loading';
import { History } from './components/History';

class App extends Component {
  state = {
    isLoading: true,
    hasError: false,
    searches: [],
    currentSearch: '',
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&extras=description,url_m&per_page=24&api_key=${
    config.FLICKR_KEY
  }&nojsoncallback=1&tags=`;

  componentDidMount() {
    this.getPhotos('shinrin yoku');
    this.getPhotos('cats');
    this.getPhotos('guinea pigs');
  }

  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  };

  getPhotos = topic => {
    this.setState({ isLoading: true });
    fetch(this.baseURL + topic)
      .then(this.handleErrors)
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
            isLoading: false,
            currentSearch: topic,
          }));
        } else {
          this.setState({ isLoading: false, currentSearch: topic });
        }
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ hasError: true, isLoading: false });
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header getPhotos={this.getPhotos} />
          <Switch>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <Route
                exact
                path="/"
                render={() => <Redirect to="/topics/shinrin-yoku" />}
              />
            )}
            <Route
              path="/topics/shinrin-yoku"
              render={() => (
                <Gallery
                  hasError={this.state.hasError}
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
                  hasError={this.state.hasError}
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
                  hasError={this.state.hasError}
                  data={this.state.searches.find(
                    search => search.topic === 'guinea pigs'
                  )}
                />
              )}
            />
            <Route
              path={`/topics/${this.state.currentSearch.replace(/\s/, '-')}`}
              render={() => (
                <Gallery
                  hasError={this.state.hasError}
                  data={this.state.searches.find(
                    search => search.topic === this.state.currentSearch
                  )}
                />
              )}
            />
            <Route
              path="/history"
              render={() => (
                <History
                  hasError={this.state.hasError}
                  history={this.state.searches.map(search =>
                    search.topic.toLowerCase()
                  )}
                />
              )}
            />
            <Route
              render={() => (
                <ErrorPage
                  type="404 - Not Found"
                  message="This page doesn't exist."
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
