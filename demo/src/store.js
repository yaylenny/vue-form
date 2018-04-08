
const state={
  people:[ 'Steve', 'Jan', 'David', 'Frank', 'Jessica', 'Angela', 'Mike', 'Jim', 'Kim'],
  colors:[ 'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'black', 'silver'],
  cities:[ 'Reno', 'Buffalo', 'Brentwood', 'Chatanooga', 'Talahassee', 'Chicago', 'Columbus', 'Boston']
};
const modules={

};

const getters={
  cities:state=>state.cities,
  people:state=>state.people
};

const actions={
  init({ commit }){

  }
}

const mutations={

};

export default{ state, modules, getters, actions, mutations };
