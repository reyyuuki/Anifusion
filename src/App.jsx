import AnimeContainer from "./components/AnimeContainer";
import Header from "./components/header";
import Slider from "./components/slider";
import AnimeTable from "./components/AnimeTable";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <Slider/>
      <AnimeContainer/>
      <AnimeTable />
    </>
  );
}

export default App;
