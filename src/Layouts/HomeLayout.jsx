import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/layout-component/LeftNavbar";
import RightNavbar from "../Components/layout-component/RightNavbar";

export default function HomeLayout() {
  return (
    <div>
      {/* header */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* navbar */}
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      {/* main content */}
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
}
