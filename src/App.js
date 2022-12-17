import './App.css';
import { Index } from './home';
import { Provider } from 'react-redux'
import store from './state/store'

function App() {
  return (
    <Provider store={store} >
      <div>
        <Index />
      </div>
    </Provider>
  );
}

export default App;
