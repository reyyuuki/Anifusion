import "../css/AnimeTable.css";
import Table from "./Table";
const AnimeTable = ({Popular, result, isManga}) => {

  return (
    <div className="TableContainer">
      <div className="Table">
        <h1 className="Top">Top-Airing</h1>
        <Table result={Popular} Manga={isManga}/>
      </div>
      <div className="Table">
        <h1 className="Top">Upcoming</h1>
        <Table result={result} Manga={isManga}/>
      </div>
    </div>
  );
};

export default AnimeTable;
