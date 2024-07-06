

const CharacterList = ({ data, isEnglish }) => {
    return (
        <>
            {data.characters.map((item, index) => {
                const voiceActorIndex = isEnglish ? 1 : 0;
                const voiceActor = item.voiceActors[voiceActorIndex];
                if (!voiceActor) return null; 

                return (
                    <div className="CharacterRow" key={index}>
                        <img src={item.image} alt={item.name.full} className="CharacterImage" />
                        <div className="CharacterInfo">
                            <div className="CharacterName">
                                <h4>Character</h4>
                                <h3>{item.name.full}</h3>
                            </div>
                            <div className="CharacterName">
                                <h4>Voice Actor</h4>
                                <h3>{voiceActor.name.full}</h3>
                            </div>
                        </div>
                        <img src={voiceActor.image} alt="Voice Actor" className="CharacterImage" />
                    </div>
                );
            })}
        </>
    );
}

export default CharacterList;
