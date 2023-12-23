import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const location = useLocation();
    const [name, setName] = useState("");

    useEffect(() => {
        // Fetch the name from the backend API (replace with your actual API endpoint)
        axios.get("/api/users").then((response) => {
            const fetchedName = response.data.name; // Adjust based on your API response structure
            setName(fetchedName);
        });
    }, []);

    return <h1>Hello, {name}</h1>;
}
