import React, { useEffect, useState } from "react";
import "./News.css";

// The News component now receives the 'country' as a prop
const News = ({ country }) => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = "pub_55ad6ee31eea4c7694d93f48d9393fab"; // Your API Key
      let response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${country}`
      );

      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();
      
      // NewsData.io returns articles in the 'results' array
      setMyNews(data.results); 
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  useEffect(() => {
    // The effect will re-run whenever the 'country' prop changes
    fetchData();
  }, [country]);

  return (
    <>
      <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>
      <div className="mainDiv">
        {mynews.length > 0 ? (
          mynews.map((ele, index) => {
            return (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  marginTop: "2rem", 
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}
              >
                <img 
                  src={ele.image_url || "https://placehold.co/1200x630/E5E7EB/4B5563?text=Image+Not+Available"} 
                  className="card-img-top" 
                  alt="..." 
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.creator || "Unknown Author"}</h5>
                  <p className="card-text">
                    {ele.title}
                  </p>
                  <a href={ele.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center w-full">Loading news...</p>
        )}
      </div>
    </>
  );
};

export default News;
