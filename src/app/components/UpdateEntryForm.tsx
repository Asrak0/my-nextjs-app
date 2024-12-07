import React, { useState } from 'react';
import { updateEntry, deleteEntry } from './../../../api/entryAPIs';
import { Entry } from '../../../api/diaryAPIs';

interface UpdateEntryFormProps {
    entry: Entry;
    diaryId: string; // Receive diaryId as a prop
}

const UpdateEntryForm: React.FC<UpdateEntryFormProps> = ({ entry, diaryId }) => {
    const [date, setDate] = useState(entry.date);
    const [time, setTime] = useState(entry.time);
    const [description, setDescription] = useState(entry.description);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const updatedEntry = { ...entry, date, time, description };
            await updateEntry(diaryId, entry.id, updatedEntry); // Use passed diaryId
            alert("Entry updated successfully!");
        } catch (error) {
            console.error("Error updating entry:", error);
            alert("Failed to update entry.");
        }
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this entry?")) {
            try {
                await deleteEntry(diaryId, entry.id); // Use passed diaryId
                alert("Entry deleted successfully!");
            } catch (error) {
                console.error("Error deleting entry:", error);
                alert("Failed to delete entry.");
            }
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <div>
                <label>
                    Date:
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Time:
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Update Entry</button>
            <button type="button" onClick={handleDelete}>
                Delete Entry
            </button>
        </form>
    );
};

export default UpdateEntryForm;