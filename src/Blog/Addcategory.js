import React, { useRef, useState, useEffect } from 'react';

export default function Addcategory() {
  const [category, setCategory] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);
  const refForm = useRef();

  useEffect(() => {
    // Fetch existing categories when the component mounts
    fetchExistingCategories();
  }, []);

  const fetchExistingCategories = async () => {
    await fetch("https://capobiz-backend.vercel.app/api/auth/getcategory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const cleanedCategories = data.map((post) =>
          post.category
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")
        );
        setExistingCategories(cleanedCategories);
      });
  };

  const AddCategory = async (e) => {
    e.preventDefault();
    const form = refForm.current;
    const catValue = form.category.value.trim();
    const cate = document.getElementById('category');

    if (!catValue) {
      cate.innerText = 'Please enter category';
      return;
    }

    // Check if the category already exists (case insensitive)
    const isCategoryExists = existingCategories.some(
      (existingCategory) => existingCategory.toLowerCase() === catValue.toLowerCase()
    );

    if (isCategoryExists) {
      cate.innerText = 'Category already exists';
      return;
    }

    cate.innerText = '';

    // Add the new category
    await fetch("https://capobiz-backend.vercel.app/api/auth/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: catValue }),
    });

    // Clear the input and fetch updated list of categories
    setCategory('');
    fetchExistingCategories();
  };

  return (
    <div>
      
      <h2 className="pt-5 pb-3 text-center">Create Category</h2>
      <form ref={refForm} className='form-group' onSubmit={AddCategory}>
        <input
          className='form-control'
          style={{ width: '40%' }}
          type='text'
          placeholder='Add Category'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div id='category' style={{ color: 'red' }}></div>
        <button className='btn btn-primary mt-3'>Add</button>
      </form>
      
    </div>
  );
}
