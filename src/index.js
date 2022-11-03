import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  contacts: [{id: "asdfasd234", name: "James Smith", price: 31}, {id: "asdfasd235", name: "Thomas Anderson", price: 29}] 
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_SERVICE':
      return {...state,
        contacts: [...state.contacts, action.data]}
    case 'SERVICE':
      return {contacts: state.contacts.filter(item => item.id !== action.data)}    
    default:
      return state;
  }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
