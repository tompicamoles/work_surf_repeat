export const generateImage = async (name) => {
    // Generate image URL based on name and country
    const query = ` ${name}  surfing `;
    const url = `https://api.unsplash.com/photos/random?query=${query}`;
    const token = process.env.REACT_APP_UNSPLASH_TOKEN;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: token,
          Params: {
            query: "surf",
          },
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const data = await response.json();
      const imgUrl = data.urls.regular;
      return imgUrl;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // You can handle or propagate the error as needed
    }
  };