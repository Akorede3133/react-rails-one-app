// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'  element={<Greeting />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
);