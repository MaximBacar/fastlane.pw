import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext"; // Import auth context

export default function Dashboard() {
    const { token } = useAuth(); // Get token from context
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return; // Ensure token exists before making request

        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5197/get_training", {
                    headers: {
                        Authorization: `Bearer ${token}` // Attach Bearer token
                    }
                });
                setData(response.data); // Store response data
            } catch (err) {
                setError(err.response ? err.response.data : err.message);
                console.error("Error fetching training data:", err);
            }
        };

        fetchData();
    }, [token]); // Runs when token changes

    return (
        <div>
            <h1>Dashboard</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}
