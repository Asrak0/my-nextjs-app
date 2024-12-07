import React, { useState } from 'react';
import { createDiary } from '../../../api/diaryAPIs';

const CreateDiaryForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createDiary({ id: '', name, entries: [] });
            setName('');
        } catch (err) {
            setError('Failed to create diary');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Diary Name:</label>
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <button type="submit">Create Diary</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default CreateDiaryForm;