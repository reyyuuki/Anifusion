import "../css/CharacterTable.css";
import CharacterList from "./CharacterList";

const CharacterTable = ({ data }) => {
  return (
    <div className="CharacterContainer">
      <div className="CharacterTable">
        <h1>Japanese Voice Actors</h1> 
        <CharacterList data={data} i={0} />
      </div>
      <div className="CharacterTable">
        <h1>English Voice Actors</h1> 
        <CharacterList data={data} i={1} />
      </div>
    </div>
  );
};

export default CharacterTable;
