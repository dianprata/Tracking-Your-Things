import localStorage from 'localStorage'

let sessionStorage = localStorage.getItem('sessionStorage');

if(sessionStorage == null){
  sessionStorage = {
    token: "",
    user: {}
  }
} else {
  sessionStorage = JSON.parse(sessionStorage)
}

export default function (state = sessionStorage,action){

  switch(action.type){
    case 'SET_SESSION': {
      localStorage.setItem('sessionStorage',JSON.stringify(action.payload));
      return Object.assign({},state,action.payload)
    }
    case 'DESTROY_SESSION': {
      localStorage.removeItem('sessionStorage');
      delete state.session
      return Object.assign({},state)
    }
    default :
      return state
  }

}
