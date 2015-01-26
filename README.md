# React Isomorphic App

This is a simple isomorphic React/Flux application using MongoDB for storage and the React-Router for client side routing.

This app is built off of the [React Server Example](https://github.com/mhart/react-server-example)

In this app we are using the React-Router to perform server side rendering of the route when a request comes in. At that point, we serve up the rendered html for the user. Within the rendered html we provide a script tag for the full bundled JS with React and the React-Router to load the responsive app JS.

The other thing we do here is to wrap in the data we load from our database into our pre-rendered html. Then, when our store loads on the client, it checks for the data and loads it into storage. This allows our React views to access the data we loaded from MongoDB both on the server and on the client.

The end result?

1) Our app loads incredibly quickly because we are just submitting an html page at the start

2) Our app serves fast expressive html which leads to SEO

2) Our app loads all of the goody responsive client-side routing associated with SPAs, meaning a much more enjoyable experience navigating the app than you get with a server side app

3) We can write our React Router and React components just like we would for any normal client side app without having to worry about our rendering on the server

4) The only part of the app that needs to know anything about the server side rendering is our store because it needs to grab pre-rendered app data

5) We can directly modify our store on the server-side whenever we get our data
