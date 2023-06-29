import Banner from "@/components/Banner";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full">
          <Navbar />
          <Banner />
        </div>
      </div>
    </main>
  );
}