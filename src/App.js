import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import config from './config/env_var';

// components
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { ErrorPage } from './components/ErrorPage';
import Loading from './components/Loading';
import { History } from './components/History';

class App extends Component {
  state = {
    isLoading: true,
    hasError: false,
    searches: [],
    currentSearch: '',
  };

  baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&sort=relevance&format=json&extras=description,url_m&per_page=24&api_key=${
    config.REACT_APP_FLICKR_KEY
    }&nojsoncallback=1&tags=`;

  /**
   * Retrieves initial searches.
   * @memberof App
   */
  componentDidMount() {
    console.log(config.REACT_APP_FLICKR_KEY)
    this.getPhotos('shinrin yoku');
    this.getPhotos('cats');
    this.getPhotos('guinea pigs');
  }

  /**
   * Throws errors related to HTTP request codes, like 400, 500, etc.
   * @throws {Error}
   * @memberof App
   */
  handleServerErrors = res => {
    if (!res.ok) {
      throw Error(`Something went wrong: ${res.status} - ${res.statusText}`);
    }
    return res.json();
  };

  /**
   * Throws "fail" errors from the API server, such as bad API key, incorrect parameters, etc.
   * @throws {Error}
   * @memberof App
   */
  handleAPIErrors = res => {
    if (res.stat === 'fail') {
      const err = new Error();
      err.message = res.message;
      err.code = `${res.stat.toUpperCase()} (${res.code})`;
      throw err;
    }
    return res;
  };

  /**
   * Processes the API search request.
   * Sets search results into state.
   * Sets errors into state.
   * Toggles loading state.
   * @param {text} topic - The tags to be passed to the API photo search.
   * @memberof App
   */
  getPhotos = topic => {
    /**
     * Determine whether the topic already exists in the search grid.
     * Prevents unnecessary data calls if result already exists.
     * This section could be enhanced later to allow pagination of results.
     */
    const topicExists = this.state.searches.some(
      search => search.topic === topic
    );

    if (!topicExists) {
      this.setState({ isLoading: true });
      fetch(this.baseURL + topic.replace(/\s/g, '-'))
        .then(this.handleServerErrors)
        .then(this.handleAPIErrors)
        .then(res => {
          /**
           * Format the json response into what the app needs for its components.
           */
          const resObject = {
            topic: topic,
            page: res.photos.page,
            photos: res.photos.photo,
          };

          this.setState(prevState => ({
            searches: [...prevState.searches, resObject],
            isLoading: false,
            currentSearch: topic,
          }));
        })
        .catch(error => {
          const err = { code: error.code, message: error.message };
          this.setState({ hasError: true, error: err, isLoading: false });
        });
    }
  };

  /**
   * Handles complicated rendering logic for the states of isLoading, hasError, and successful retrieval of photos.
   * @returns {Component}
   * @memberof App
   */
  renderComponent = topic => {
    if (this.state.isLoading) {
      return <Loading />;
    } else if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    } else {
      return (
        <Gallery
          data={this.state.searches.find(search => search.topic === topic)}
        />
      );
    }
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
              render={() => <Redirect to="/topics/shinrin-yoku" />}
            />
            <Route
              path="/topics/shinrin-yoku"
              render={() => this.renderComponent('shinrin yoku')}
            />
            <Route
              path="/topics/cats"
              render={() => this.renderComponent('cats')}
            />
            )} />
            <Route
              path="/topics/guinea-pigs"
              render={() => this.renderComponent('guinea pigs')}
            />
            <Route
              path={`/topics/${this.state.currentSearch.replace(/\s/g, '-')}`}
              render={() => this.renderComponent(this.state.currentSearch)}
            />
            <Route
              path="/history"
              render={() => {
                if (this.state.searches.length > 0) {
                  return (
                    <History
                      history={this.state.searches.map(search =>
                        search.topic.toLowerCase()
                      )}
                    />
                  );
                }
                return (
                  <ErrorPage
                    error={{
                      code: 'No Recent Searches',
                      message: `There are no recent searches to load.`,
                    }}
                  />
                );
              }}
            />
            {/**
             * Forces the app to render the <Loading /> component during search processing.
             * Had a problem with the application rendering the 404 page during loading on searches.
             */}
            {this.state.isLoading ? (
              <Loading />
            ) : (
                <Route
                  render={() => (
                    <ErrorPage
                      error={{
                        code: 'Not Found (404)',
                        message: `We didn't plan for you to visit this page...`,
                      }}
                    />
                  )}
                />
              )}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
