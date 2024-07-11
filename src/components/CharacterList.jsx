const CharacterList = ({ data, isEnglish }) => {
  return (
    <>
      {data.characters.map((item, index) => {
        const voiceActorIndex = isEnglish ? 1 : 0;
        const voiceActor = item.voiceActors[voiceActorIndex];
        if (!voiceActor) return null;

        return (
          <div className="CharacterRow" key={index}>
            <img
              src={item.image}
              alt={item.name.full}
              className="CharacterImage"
            />
            <div className="CharacterInfo">
              <div className="CharacterName">
                <h3>{item.name.full}</h3>
              </div>
              {voiceActor.image && (
                <div className="CharacterName">
                  <h3 className="Voice-Actors">{"~"}{voiceActor.name.full}</h3>
                </div>
              )}
            </div>
            {voiceActor.image && (
              <img
                src={voiceActor.image}
                alt="Voice Actor"
                className="CharacterImage"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default CharacterList;
