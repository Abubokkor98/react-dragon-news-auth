import React from "react";
import Header from "../Components/Header";
import RightNavbar from "../Components/layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

export default function NewsDetails() {
  const data = useLoaderData();
  const news = data.data[0];
  const {image_url, title, details,category_id} = news;
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto border border-red-400 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold mb-3">Dragon News</h1>
          <div className="card card-compact bg-base-100 ">
            <figure>
              <img
                src={news&& image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions justify-start">
                <Link to={`/category/${category_id}`}><button className="btn hover:btn-secondary bg-[#D72050] text-white rounded-none">All news in this category</button></Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
}
