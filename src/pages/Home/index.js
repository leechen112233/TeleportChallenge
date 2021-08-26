import React,{createContext,useReducer} from 'react'
import { BrowserRouter } from 'react-router-dom'

import {flattenDirectory} from '../../sourceDate/directory'
import NavBar from '../../components/NavBar'
import Table from '../../components/Table'

export const FolderContext=createContext()

export const CHANGE_FOLDER = "change_folder"

const reducer = (state, action)=>{
  console.log("@@@@@@@@")
  switch (action.type) {
    case CHANGE_FOLDER:
      return action.targetFolder
    default:
      return state
  }
}

export function Home() {
  const [curFolder, dispatch] = useReducer(reducer, flattenDirectory[6])
  console.log(flattenDirectory)
  return (
    <BrowserRouter>
      <FolderContext.Provider value={{curFolder,dispatch}}>
        <NavBar />
        <Table />
      </FolderContext.Provider>
    </BrowserRouter>
  )
}
