import React from 'react';
import { Diary } from '../../../api/diaryAPIs'; // Import the Diary type

interface DiaryListProps {
    diaries: Diary[]; // Define the type of the diaries prop
}

const DiaryList: React.FC<DiaryListProps> = ({ diaries }) => {
    return (
        <div>
            <h1>Diary Entries</h1>
            <ul>
                {diaries.map((diary) => (
                    <li key={diary.id}>
                        {diary.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiaryList;