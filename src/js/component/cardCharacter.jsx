import React, { useState } from "react";

const CardCharacter = () =>{
    const [character, setCharacter] = useState()
    useEffect(() => {
        const getPerson = async () => {
          try {
            await fetch("https://rickandmortyapi.com/api/character")
              .then((res) => res.json())
              .then((data) => setCharacter(data.results));
          } catch {
            (err) => console.error(err);
          }
        };
        getPerson();
      }, []);

      return (
        character.map((characters)=>{
            return (
                <>
                
                </>
            )
        })
      )
}