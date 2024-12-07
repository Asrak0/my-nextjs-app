import React, { useState } from 'react';
import { updateDiary } from '../../../api/diaryAPIs';

const UpdateDiaryForm: React.FC<{ diaryId: string }> = ({ diaryId }) => {
    const [name, setName] = useState<string>('');
    
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleUpdate = async () => {
        try {
            const updatedDiary = {id:'', name, entries:[]}; // Fields to update
            const result = await updateDiary(diaryId, updatedDiary);
            setSuccessMessage(`Diary updated successfully: ${result.name}`);
        } catch (error) {
            setSuccessMessage('Failed to update the diary.');
        }
    };

    return (
        <div>
            <h2>Update Diary</h2>
            <input
                type="text"
                placeholder="Diary Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Diary</button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default UpdateDiaryForm;