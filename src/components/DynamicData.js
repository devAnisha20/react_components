import React, { Component } from 'react'

export class DynamicData extends Component {
  render() {
    const student=["Anisha",21,"Pathankot"]
    return (
      <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
           <tbody>
            <tr>
                {student.map((std,index)=><td key={index}>{std}</td>)}
            </tr>
           </tbody>
        </table>
      </div>
    )
  }
}

export default DynamicData