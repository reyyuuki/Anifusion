import "../css/CharacterTable.css";
import CharacterList from "./CharacterList";

const CharacterTable = ({ data }) => {
    console.log(data);
  return (
    <div className="CharacterContainer">
      <div className="CharacterTable">
        <h1>Japanese</h1> 
        <CharacterList data={data} isEnglish={false}/>
      </div>
      <div className="CharacterTable">
        <h1>English</h1> 
        <CharacterList data={data} isEnglish={true}/>
      </div>
    </div>
  );
};

export default CharacterTable;
