import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
