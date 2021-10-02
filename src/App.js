import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainPageContainer } from './Components/MainPage.jsx/MainPageContainer';
import { store } from './Redux/Redux-store';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <MainPageContainer />
         
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
