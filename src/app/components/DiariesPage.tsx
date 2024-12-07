"use client";

import React, { useEffect, useState } from 'react';
import { fetchDiaries } from '../../../api/diaryAPIs';  // Import the API call function
import DiaryList from '../components/DiaryList';  // Import the DiaryList component
import { Diary } from '../../../api/diaryAPIs';

const DiariesPage: React.FC = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDiaries = async () => {
      try {
        const data = await fetchDiaries();
        setDiaries(data); // Save the fetched diaries to state
      } catch (err) {
        setError("Error fetching diaries");
      } finally {
        setLoading(false);
      }
    };

    getDiaries(); // Call the function to fetch diaries when the component mounts
  }, []); // Empty dependency array to only run once on mount

  return (
    <div>
      <h1>Diary List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* Display the list of diaries if they exist */}
      {diaries.length > 0 ? (
        <DiaryList diaries={diaries} />
      ) : (
        <p>No diaries found</p>
      )}
    </div>
  );
};

export default DiariesPage;