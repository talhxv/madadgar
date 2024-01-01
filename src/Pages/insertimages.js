import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const InsertImages = () => {
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('img', data.img[0]);
        formData.append('name', data.name);

        try {
            const response = await axios.post('http://localhost:3001/api/categories', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Update the categories state with the new category
            setCategories([...categories, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Category Name:
                    <input {...register('name')} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="file" {...register('img')} />
                </label>
                <br />
                <button type="submit">Add Category</button>
            </form>

            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>
                        {category.name} - <img src={`http://localhost:3001/${category.img}`} alt={category.name} style={{ maxWidth: '100px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InsertImages;
