import {combineReducers} from 'redux'

function xxx(state=0 ,action) {

  return state
}


function yyy(state={} ,action) {

  return state
}

//合并一起暴露
export default combineReducers({
  xxx,
  yyy
})