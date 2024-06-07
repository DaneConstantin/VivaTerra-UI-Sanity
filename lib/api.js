export async function fetcher(url, option = {}) {
    let response;
    if (!option) {
        response = await fetch(url);
    } else {
        response = await fetch(url, option);
    }
    if (!response.ok) {
        console.error('Error fetching data:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
