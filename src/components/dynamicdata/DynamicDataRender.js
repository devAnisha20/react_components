import React from 'react'
import ClientData from './ClientData'

function DynamicDataRender() {
    const student=["Anisha","BCA",21,"Female","Pathankot",145001]
  return (
    <div>
        <ul>
        {student.map((value,index,array)=><ClientData data={value}/>)}
        </ul>
    </div>
  )
}

export default DynamicDataRender