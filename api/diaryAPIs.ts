import apiRequest from "../utils/api";

export interface Diary {
    id: string;
    name: string;
    entries: Entry[];  // Adjust the type of entries as per your backend model
}

export interface Entry {
    id: string;
    date: string;
    time: string;
    description: string;
    diaryId: string;
}

// Function to fetch all diaries
export async function fetchDiaries() {
    try {
        const data = await apiRequest("/diaries");
        console.log("Diaries:", data);
        return data;
    } catch (error) {
        console.error("Error fetching diaries:", error);
        throw error;
    }
}

// Function to create a new diary
export async function createDiary(diaryData: Diary) {
    try {
        const data = await apiRequest("/diaries", {
            method: "POST",
            body: JSON.stringify(diaryData),
        });
        console.log("Created Diary:", data);
        return data;
    } catch (error) {
        console.error("Error creating diary:", error);
        throw error;
    }
}

export async function deleteDiary(diaryId: string): Promise<void> {
    try {
        const data = await apiRequest(`/diaries/${diaryId}`, {
            method: "DELETE",
        });
        console.log(`Deleted Diary with Diary ID ${diaryId}`);
        return data;
    } catch (error) {
        console.error(`Error deleting diary with Diary ID ${diaryId}`, error);
        throw error;
    }
}

export async function updateDiary(diaryId: string, diaryData: Diary): Promise<Diary> {
    try {
        const data = await apiRequest(`/diaries/${diaryId}`, {
            method: "PUT",
            body: JSON.stringify(diaryData)
        });
        console.log(`Updated Diary with Diary ID ${diaryId}`);
        return data;
    } catch (error) {
        console.error(`Error updating diary with Diary ID ${diaryId}`, error);
        throw error;
    }
}