# Gallery App

## Techdegree Unit 07

### Requirements

#### Priority 1

- Use create-react-app
- Use React Router
  - Use Route, NavLink, and Link.
  - Provide a Search link for users to search for photos
  - Using the nav links should navigate to the appropriate route.
  - The URL should reflect the current route.
  - The app should include at least three topic links (and their associated routes), which return galleries related to that topic.
  - Queue up the galleries at load, so that you don't have to request each time the topic is selected.
- TODO: Make the app match the index.html, Results, and No-Results layouts.
- Use App.js as the main file for the app.
  - Manage as much state as possible in this file.
- Create stateless components for your UI elements. Examples include:
  - Header
  - Nav
  - Gallery
  - Gallery item
  - Search
- Include a search feature to search for other galleries.
  - Make it a stateless component.
  - Make a route for it.
- Use the flickr API.
  - Create a config.js file to store your API key. Don't commit it to Github.
  - Fetch the data from Flickr using fetch API or axios.
  - Manage this fetching in App.js.
- Display images from the api.
  - Include a key on each iterated element.
  - Dynamically display the title of the gallery using props.
  - Display the current route in the URL.
  - Display no more than 24 images in a gallery.
- Use code comments.
- Ensure cross-browser support.
- Ensure there are no errors in the console.
- `npm start` starts the app.

#### Priority 2

- Add a loading indicator that displays each time the app fetches new data.
- Display a friendly "no results found" when a search fails to return any data.
- Include a 404 route with a friendly 404 message.

### Design

#### App Flow

- Landing page
  - Header
  - Gallery (trending)
    - Gallery Items
- Topics Page
  - Header
  - Topics Nav
  - Gallery (topic)
    - Gallery Items
- Search History Page
  - Header
  - Search history

### Resources

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
