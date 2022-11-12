import './App.css';
import Main from './Main'
import Welcome from './Welcome'
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Main web app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
