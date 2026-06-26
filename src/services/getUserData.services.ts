export async function getUserData() {
  try {
    const token = JSON.parse(localStorage.getItem('accessToken') ?? "null")

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}auth/me`, {
      headers: {
       Authorization: `Bearer ${token}`,
      }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
  } catch (error) {
    console.error(error.message);
  }
}