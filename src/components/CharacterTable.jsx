import "../css/CharacterTable.css";
import CharacterList from "./CharacterList";

const CharacterTable = ({ data }) => {
  return (
    <div className="CharacterContainer">
      {data.characters[0].voiceActors.length > 0 && 
      <div className="CharacterTable">
        <h1>Japanese VoiceActors</h1> 
        <CharacterList data={data} isEnglish={false}/>
      </div>
}
{data.characters[0].voiceActors.length > 1 && 
      <div className="CharacterTable">
        <h1>English VoiceActors</h1> 
        <CharacterList data={data} isEnglish={true}/>
      </div>
}
    </div>
  );
};

export default CharacterTable;
