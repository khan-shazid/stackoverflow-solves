import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Category from './Category';
import Home from './Home';

function App() {
  const [data, setData] = useState([
    {
      "id": 1,
      "title": "Post 1"
    },
    {
      "id": 2,
      "title": "Post 2"
    },
    {
      "id": 3,
      "title": "Post 3"
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        // const res = await fetch(`${BASE_URL}/gahlot1999/fake-api/categories`);
        const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
        const data = await res.json();
        setData(data);
      } catch {
        alert('Error in loading data');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log("data ====>", data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route
          path='/app'
          element={<AppLayout data={data} isLoading={isLoading} />}
        /> */}
        <Route
          path='app/:name'
          element={<Category data={data} isLoading={isLoading} />}
        />
      </Routes>
    </BrowserRouter>
  )
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
