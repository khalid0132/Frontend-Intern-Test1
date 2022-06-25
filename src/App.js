import './App.css';
import { Routes, Route} from "react-router-dom";
import Layout1 from './components/Layout1/Layout1';
import Layout2 from './components/Layout2/Layout2';
import Layout3 from './components/Layout3/Layout3';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<Layout1 />} />
          <Route path="layout1" element={<Layout1 />} />
          <Route path="layout2" element={<Layout2 />} />
          <Route path="layout3" element={<Layout3 />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
