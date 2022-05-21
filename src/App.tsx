import Login from './pages/login';
import News from './pages/news';
import Profile from './pages/profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
