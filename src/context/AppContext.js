import { createContext, useState } from "react";
import React from "react";
import { baseUrl } from "../baseUrl";

export const appContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  async function fetchBlogData(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`
    try{
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setposts(data.posts);
      setTotalPages(data.totalPages);
      setPageCount(data.page)
    }catch(error){
      console.log("Error in fetching data");
      setPageCount(1);
      setposts([]);
      setTotalPages(null); 
    }
    setLoading(false);
  }
  function changePageHandler(page){
    setPageCount(page);
    fetchBlogData(page);
  }
  const value = {
    loading,
    setLoading,
    posts,
    setposts,
    pageCount,
    setPageCount,
    totalPages,
    setTotalPages,
    changePageHandler,
    fetchBlogData, 
  };
  return <appContext.Provider value={value}>
    {children}
  </appContext.Provider>
}
