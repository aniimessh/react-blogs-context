import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { appContext } from "./context/AppContext";
import './App.css'

function App() {
  const {fetchBlogData} = useContext(appContext);
  useEffect(()=>{
    fetchBlogData();
  },[])
  return (
    <div>
      <div>
        <Header />
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
