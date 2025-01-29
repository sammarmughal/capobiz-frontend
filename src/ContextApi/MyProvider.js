import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [filterPosts, setFilterPosts] = useState([]);
  const [allMessages, setAllMessages] = useState([])
  const [uniqueCategory, setUniqueCategory] = useState(new Set());

  const Getallposts = async () => {
    await fetch("https://capobiz-backend.vercel.app/api/auth/getallposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        const newCategory = new Set(data.map((post) => post.category));
        setUniqueCategory(newCategory);
        if (newCategory.size > 0) {
          setCategory([...newCategory][0]);
        }
      });
  };

  const ticketMessages = async () => {
    const res = await fetch("https://capobiz-backend.vercel.app/api/auth/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    setAllMessages(data)
  }

  useEffect(() => {
    Getallposts();
    ticketMessages();
  }, []);

  useEffect(() => {
    if (category === null) {
      setFilterPosts([]);
    } else {
      const filterpost = posts.filter((post) => post.category === category);
      setFilterPosts(filterpost);
    }
  }, [category, posts]);

  return (
    <MyContext.Provider value={{ filterPosts, posts, uniqueCategory, setCategory, allMessages, ticketMessages }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;