'use client'

import React, { useEffect, useState } from 'react';
import { fetchDiaries, Diary } from '../../../api/diaryAPIs'; // Fetch and update APIs
import UpdateDiaryForm from './UpdateDiaryForm'; // Type definition for Diary

const UpdateDiaryPage: React.FC = () => {
    const [diaries, setDiaries] = useState<Diary[]>([]);
    const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDiaries = async () => {
            try {
                const data = await fetchDiaries();
                setDiaries(data);
            } catch (error) {
                setError('Failed to fetch diaries');
            } finally {
                setLoading(false);
            }
        };

        getDiaries();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Update Diary</h1>
            <ul>
                {diaries.map((diary) => (
                    <li key={diary.id}>
                        {diary.name}{' '}
                        <button onClick={() => setSelectedDiary(diary)}>
                            Update
                        </button>
                    </li>
                ))}
            </ul>

            {selectedDiary && (
                <UpdateDiaryForm diaryId={selectedDiary.id} />
            )}
        </div>
    );
};

export default UpdateDiaryPage;