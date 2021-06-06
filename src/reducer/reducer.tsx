const Reducer = (state: any, action: any) => {
  switch (action.type) {
    //fetching movie and directors detail

    case 'FETCH_MOVIES':
      console.log(state, action);

      console.log('Fetch happened');
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload,
      };

    case 'FETCH_DIRECTORS':
      console.log(state, action);

      console.log('Fetch happened');
      console.log(action.payload);
      return {
        ...state,
        directors: action.payload,
      };

    case 'SEARCH':
      console.log(state, action);
      return {
        ...state,
        search: action.payload.search,
        select: action.payload.select,
      };

    case 'AGE_UPDATE':
      console.log(state, action);
      return {
        ...state,
        age: action.payload,
      };

    case 'SEARCH_MOVIES':
      console.log(state, action);
      return {
        ...state,
        search: action.payload,
      };
  }
};

export default Reducer;
