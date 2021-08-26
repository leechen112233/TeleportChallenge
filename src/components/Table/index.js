import React,{useContext} from 'react'
import {FileOutlined,FolderOutlined} from '@ant-design/icons'

import {FolderContext,CHANGE_FOLDER} from '../../pages/Home'
import "./index.scss"

export default function Table() {
  const {curFolder,dispatch} = useContext(FolderContext)
  return (
    <>
      <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
        {/* 1.0 table header start */}
        <div className="row" style={{paddingLeft:"15px",backgroundColor:"#f7f8fa"}}>
          <div className="fileName">Name</div>
          <div className="fileSize">Size</div>
          <div className="fileType">Type</div>
        </div>
        {/* 1.0 table header end */}
        {/* 2.0 table body start */}
        {
          curFolder.items?curFolder.items.map((v,i)=>(
            <div key={i} className="row"  onDoubleClick={()=>dispatch({type:CHANGE_FOLDER,targetFolder:v})}>
              {v.type==="dir"?<FolderOutlined />:<FileOutlined/>}
              <div className="fileName">{v.name}</div>
              <div className="fileSize">{v.sizeKb}</div>
              <div className="fileType">{v.type}</div>
            </div>
          )):<div>this file's content</div>
        }
        {/* 2.0 table body end */}
      </div>
    </>
  )
}
