"use client";
import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full">
          <Navbar />
          <Banner />
          <Services />
        </div>
      </div>
    </main>
  );
}