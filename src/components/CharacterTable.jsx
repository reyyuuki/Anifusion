import "../css/CharacterTable.css";
import CharacterList from "./CharacterList";

const CharacterTable = ({ data }) => {
    console.log(data);
  return (
    <div className="CharacterContainer">
      <div className="CharacterTable">
        <h1>Japanese Voice Actors</h1> 
        <CharacterList data={data} isEnglish={false}/>
      </div>
      <div className="CharacterTable">
        <h1>English Voice Actors</h1> 
        <CharacterList data={data} isEnglish={true}/>
      </div>
    </div>
  );
};

export default CharacterTable;
