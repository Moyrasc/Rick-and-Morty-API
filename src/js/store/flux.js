const getState = ({ getStore, setStore }) => {
  return {
    store: {
      characters: [],
      location: [],
      person: [],
      planet: [],
      favorites: [],
      filterItem:[],
      info_page: [],
    },
    actions: {
      getPersons: () => {
        fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((data) => setStore({ characters: data.results, info_page: data.info}));
      },
      getLocations: () => {
        fetch("https://rickandmortyapi.com/api/location")
          .then((response) => response.json())
          .then((data) => setStore({ location: data.results}));
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
        setStore({ favorites: [...store.favorites, newItem] })
      
      },
      deleteFavorites: (character) => {
        const store = getStore(); 
          let newArray = store.favorites.filter((fav)=> fav.name !== character)
          setStore({favorites : newArray})
          

			},
      handleFilter: (name) => {
        const store = getStore();
        const search = store.characters.filter(
          (item) =>
            item.name.toLowerCase().includes(name.toLowerCase()) ||
            item.origin.name.toLowerCase().includes(name.toLowerCase())
        );
        setStore({filterItem: search});

      },
      clearInput: () =>{
        setStore({filterItem: []})
      },

      // funciones para la paginacion como es algo que no pide el ejercicio aún no esta terminado 
      onPrevious: () =>{
        fetch("https://rickandmortyapi.com/api/character?page=1")
          .then((res) => res.json())
          .then((data) => setStore({info_page: data.next }))
      },
      handlePagination: () =>{
        onPrevius()
        setStore({info_page:[...store.next]})

      },
     
	}
}
  };


export default getState;
