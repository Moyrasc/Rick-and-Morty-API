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
      getLocation: () => {
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
      deletefavorites: (person) => {
        const store = getStore();
        const people = store.favorites;

        let newArrPerson = people.filter((item) => item !== person);
        setStore({
          favorites: newArrPerson,
        });
      },
    },
  };
};

export default getState;
