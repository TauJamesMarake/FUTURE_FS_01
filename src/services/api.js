const BASE_URL = 'http://localhost:5000/api';

// Save contact form message to backend
export async function saveContact(formData) {
    const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error('Failed to save contact');
    return response.json();
}