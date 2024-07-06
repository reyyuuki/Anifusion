

const CharacterList = ({data,i}) => {
    return (
        <>
        {data.characters.map((item,index) => {
            return(
            <div className="CharacterRow" key={index}>
            <img src={item.image} alt="name"  className="CharacterImage"/>
            <div className="CharacterInfo">
                <div className="CharacterName">
                <h4> Character</h4>
                <h3>{item.name.full}</h3>
                </div>
                <div className="CharacterName">
                    <h4> Voice Actor</h4>
                    <h3>{item.voiceActors[i].name.full}</h3>
                    </div>
            </div>
            <img src={item.voiceActors[i].image} alt="Voice Actor" className="CharacterImage"/>
        </div>
            );
        })}
        </>
        
    );
}


export default CharacterList;
