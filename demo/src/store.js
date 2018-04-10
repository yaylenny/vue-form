
import mock from "Lib/mock2.json";
import mock3 from "Lib/mock3.json";
const state={
  mock,
  movies: mock3,
  people:[ 'Steve', 'Jan', 'David', 'Frank', 'Jessica', 'Angela', 'Mike', 'Jim', 'Kim'],
  colors:[ 'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'black', 'silver'],
  cities:[ 'Reno', 'Buffalo', 'Brentwood', 'Chatanooga', 'Talahassee', 'Chicago', 'Columbus', 'Boston']
};
const modules={

};

const getters={
  cities:state=>state.cities,
  people:state=>state.people,
  movies:state=>state.movies,
  mock:state=>state.mock
};

const actions={
  init({ commit }){

  }
}

const mutations={

};

export default{ state, modules, getters, actions, mutations };
