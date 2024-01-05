import React, {useState} from 'react';
import axios from 'axios';

export default function MarkAsCompleteForm({jobId, onComplete}) {
    const [formData, setFormData] = useState({
        image: '',
        details: '',
        paidAmount: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3001/api/completedjobs`, {
                jobId,
                completedBy: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : '',
                ...formData,
            });

            if (response.ok) {

                onComplete();
                console.log('Job marked as complete successfully');
            } else {
                console.error('Error marking job as complete:', response.statusText);
            }
        } catch (error) {
            console.error('Error marking job as complete:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Insert Image:
                    <input type="text"
                           name="image"
                           value={formData.image}
                           onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Insert Details:
                    <textarea name="details"
                              value={formData.details}
                              onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Add Paid Amount:
                    <input type="text"
                           name="paidAmount"
                           value={formData.paidAmount}
                           onChange={handleInputChange}/>
                </label>
                <br/>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}
