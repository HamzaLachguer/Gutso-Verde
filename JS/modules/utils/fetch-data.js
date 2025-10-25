export async function fetchDishes(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`)
    };

    const data = await response.json();
    return { data, error: null};
  }
  catch (error) {
    console.error(error);
    return { data: null, error: error.message };
  }
}