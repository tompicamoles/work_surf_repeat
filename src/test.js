const generateImage = async () => {
    // Generate image URL based on name and country
    const url = "https://api.unsplash.com/photos/random";
    const token = "Client-ID NqJL9YuQCoBadK9v4WV5LPmiitfKvc2CHPLYbUI6e-Y";
  
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: token,
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

  const image = await generateImage();

  console.log(image); // You can log the URL here