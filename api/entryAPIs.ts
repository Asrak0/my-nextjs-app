import apiRequest from "../utils/api";
import { Entry } from '../api/diaryAPIs';
import { Diary } from '../api/diaryAPIs';


export async function fetchEntries(diaryId: string): Promise<Entry[]> {
    try {
        const response = await apiRequest(`/diaries/${diaryId}/entries`);
        return response;
    } catch (error) {
        console.error(`Error fetching entries for diary ID ${diaryId}:`, error);
        throw error;
    }
}

export async function createEntry(diaryId: string, entryData: Entry): Promise<Entry> {
    try {
        const response = await apiRequest(`/diaries/${diaryId}/entries`, {
            method: 'POST',
            body: JSON.stringify(entryData),
        });
        console.log("Created Entry:", response);
        return response;
    } catch (error) {
        console.error(`Error creating entry for diary ID ${diaryId}:`, error);
        throw error;
    }
}

export async function updateEntry(diaryId: string, entryId: string, entryData: Entry): Promise<Entry> {
    try {
        console.log("entry data:", entryData);

        const response = await apiRequest(`/diaries/${diaryId}/entries/${entryId}`, {
            method: 'PUT',
            body: JSON.stringify(entryData),
        });
        console.log("Updated Entry:", response);
        return response;
    } catch (error) {
        console.error(`Error updating entry with ID ${entryId} for diary ID ${diaryId}:`, error);
        throw error;
    }
}

export async function deleteEntry(diaryId: string, entryId: string): Promise<void> {
    try {
        await apiRequest(`/diaries/${diaryId}/entries/${entryId}`, {
            method: 'DELETE',
        });
        console.log(`Deleted entry with ID ${entryId} for diary ID ${diaryId}`);
    } catch (error) {
        console.error(`Error deleting entry with ID ${entryId} for diary ID ${diaryId}:`, error);
        throw error;
    }
}