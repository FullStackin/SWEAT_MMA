export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2271182148msh649728d0796455ep17e823jsn0dd054fb73c4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "e6503bb7b7msh06cf7f77f3f4d6ep1573b8jsn6014e0fab73a",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return { response, data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { response: null, data: [] };
  }
};
