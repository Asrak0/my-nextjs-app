'use client';

import React, { useState, useEffect } from "react";
import { fetchDiaries, Diary, Entry } from "../../../api/diaryAPIs";
import { fetchEntries } from "../../../api/entryAPIs";
import UpdateEntryForm from "../components/UpdateEntryForm";

const UpdateDeleteEntriesPage: React.FC = () => {
    const [diaries, setDiaries] = useState<Diary[]>([]);
    const [selectedDiaryId, setSelectedDiaryId] = useState<string | null>(null);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch all diaries for selection
        const loadDiaries = async () => {
            try {
                const data = await fetchDiaries();
                setDiaries(data);
            } catch (err) {
                setError("Failed to load diaries");
            }
        };
        loadDiaries();
    }, []);

    useEffect(() => {
        // Fetch entries when a diary is selected
        if (selectedDiaryId) {
            const loadEntries = async () => {
                try {
                    const data = await fetchEntries(selectedDiaryId);
                    setEntries(data);
                } catch (err) {
                    setError("Failed to load entries");
                }
            };
            loadEntries();
        }
    }, [selectedDiaryId]);

    return (
        <div>
            <h1>Update/Delete Entries</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Diary Selector */}
            <div>
                <label htmlFor="diarySelector">Select Diary: </label>
                <select
                    id="diarySelector"
                    value={selectedDiaryId || ""}
                    onChange={(e) => setSelectedDiaryId(e.target.value)}
                >
                    <option value="" disabled>Select a diary</option>
                    {diaries.map((diary) => (
                        <option key={diary.id} value={diary.id}>
                            {diary.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Entries List */}
            {selectedDiaryId && (
                <div>
                    <h2>Entries</h2>
                    {entries.length === 0 ? (
                        <p>No entries found for this diary</p>
                    ) : (
                        <ul>
                            {entries.map((entry) => (
                                <li key={entry.id}>
                                    <UpdateEntryForm entry={entry} diaryId={selectedDiaryId} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default UpdateDeleteEntriesPage;