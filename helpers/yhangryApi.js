import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllSetMenus() {
  const apiUrl = process.env.YHANGRY_URL;
  let currentPage = 1;
  const allMenus = [];

  try {
    while (true) {
      const response = await axios.get(`${apiUrl}?page=${currentPage}`);
      const { data, meta } = response.data;

      allMenus.push(...data);

      if (meta.current_page === meta.last_page) break;
      currentPage++;
      await delay(1000);
    }

    return allMenus;
  } catch (error) {
    console.error("Error fetching or inserting data:", error);
  }
}
