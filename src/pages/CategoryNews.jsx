import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

export default function CategoryNews() {
  const { data: news } = useLoaderData();
  // data named as news
  

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p>{news.length} news found</p>
      {/* card */}
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
}
