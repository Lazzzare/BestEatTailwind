import Category from "./components/Category";
import Food from "./components/Food";
import HeadLineCard from "./components/HeadLineCard";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCard />
      <Food />
      <Category />
    </div>
  );
};

export default App;
