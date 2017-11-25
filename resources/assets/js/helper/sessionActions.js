export function setSession(token){
    return {
      type: 'SET_SESSION',
      payload: token
    }
  }
  
  export function destroySession(){
    return {
      type: 'DESTROY_SESSION'
    }
  }
  