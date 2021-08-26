import React,{useContext} from 'react'
import {RightOutlined} from '@ant-design/icons'

import './index.scss'
import {FolderContext,CHANGE_FOLDER} from '../../pages/Home'
import {flattenDirectory} from '../../sourceDate/directory'

export default function NavBar() {
  // console.log(useContext(FolderContext))
  const {curFolder,dispatch} = useContext(FolderContext)
  console.log(curFolder)
  var fullPathArr = []
  fullPathArr = curFolder.path.split('/').slice(1)
  const len = fullPathArr.length
  console.log(fullPathArr)

  const changeFolder=(index)=>{
    console.log(index,len)
    var targetPath=''
    console.log(fullPathArr)
    if(len===index+1){
      targetPath='/'+fullPathArr.join('/')
    }else{
      fullPathArr.splice(index+1, len-1)
      targetPath='/'+fullPathArr.join("/")
    }
    console.log(targetPath)
    // console.log(flattenDirectory.filter(v=> v.path===targetPath ))
    const targetFolder=flattenDirectory.filter(v=> v.path===targetPath )[0]
    dispatch({type:CHANGE_FOLDER,targetFolder:targetFolder})
  }
  return (
      <div className='navBar'>
        {
          fullPathArr.map((v,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center"}}>
              <a href="javascript:;" onClick={()=>changeFolder(i)}>{v}</a>
              <RightOutlined style={{fontSize:"8px"}}/>
            </div>
          ))
        }
      </div>
  )
}
