import Login from './pages/login';
import News from './pages/news';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
