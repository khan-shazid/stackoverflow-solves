import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Pages/Home/HomePage";
import AppLayout from "./Pages/AppLayout/AppLayout";
import Category from "./Pages/Category/Category";

const BASE_URL = "https://my-json-server.typicode.com";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/gahlot1999/fake-api/categories`);
        const data = await res.json();
        setData(data);
      } catch {
        alert("Error in loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={<AppLayout data={data} isLoading={isLoading} />}
        />
        <Route
          path="app/:name"
          element={<Category data={data} isLoading={isLoading} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
