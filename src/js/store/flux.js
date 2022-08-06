const getState = ({ getStore, setStore }) => {
  return {
    store: {
      characters: [],
      location: [],
      person: [],
      planet: [],
      favorites: [],
    },
    actions: {
      getPersons: () => {
        fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((data) => setStore({ characters: data.results }));
      },
      getLocations: () => {
        fetch("https://rickandmortyapi.com/api/location")
          .then((response) => response.json())
          .then((data) => setStore({ location: data.results }));
      },
      getPerson: (id) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ person: data }));
      },
      getPlanet: (id) => {
        fetch(`https://rickandmortyapi.com/api/location/${id}`)
          .then((res) => res.json())
          .then((data) => setStore({ planet: data }));
      },
      addFavorites: (newItem) => {
        const store = getStore();
        if (!store.favorites.includes(newItem)) {
          setStore({
            ...store.favorites,
            favorites: store.favorites.concat(newItem),
          });
        }
      },
      deleteFavorites: (name) => {
        const store = getStore();
					setStore({...store, favorites:[store.favorites.filter((fav) => fav != name)]})
			},
      searchCharacter: (name)=>{
        const store = getStore();
        setStore({...store, characters:[store.characters.filter((character)=> character == name)]})

        }

      },
	}
  };


export default getState;
