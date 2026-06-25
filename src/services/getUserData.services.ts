export async function getUserData() {
  try {
    const token = JSON.parse(localStorage.getItem('accessToken') ?? "")

    const response = await fetch("https://xhkrpfff-5000.inc1.devtunnels.ms/auth/me", {
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