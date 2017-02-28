# Tube Driver

A single-page dashboard for navigating and managing Youtube playlists, and playing videos.

As the above hints at, this is intended to be a single-page application, built with React 
and designed to work with lots of data. Most or all of the data will be pulled from Google's
Youtube Data API. 

### Operation

- `npm start` will get your basic dev build running. It's based on `webpack-dev-server`, so you don't 
need to explicitly compile.
- `npm run build` runs a production build. This may not be what I want -- need to figure this out later.
- `npm run watch-css` runs a Sass file-watcher that compiles Sass into CSS. 
- `npm run test` runs a testing framework. This is just a React tester -- I'd love to get a set of 
real unit tests for the Youtube API stuff.

### Useful Resources

- [Youtube Developer Docs](https://developers.google.com/youtube/documentation/)