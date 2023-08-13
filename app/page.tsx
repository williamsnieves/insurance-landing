import Header from "./components/Header";
import Banner from "./components/Banner";
import MainInfo from "./components/MainInfo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section>
      <Header />
      <main>
        <Banner />
        <MainInfo />
      </main>
      <Footer />
    </section>
  );
}
