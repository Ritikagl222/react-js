import React from 'react'

export default function ItemComp(props) {

  return (
    <tr >
      <td div className='itemO'> {props.edit===props.item.id ? <input type="number"autoFocus="autofocus" style={{textAlign:"center",color:"green",fontWeight:"bold"}} value={props.editId} onChange={(e)=>props.setEditId(e.target.value.toUpperCase())} ></input> : props.item.id} </td>
      <td div className='itemO'>{props.edit==props.item.id ? <input type="text"  style={{textAlign:"center",color:"green",fontWeight:"bold"}} value={props.editName} onChange={(e)=>props.setEditName(e.target.value.toUpperCase())}></input> : props.item.name}</td>
      <td div className='itemO'>{props.edit==props.item.id ? <input type="text"  style={{textAlign:"center",color:"green",fontWeight:"bold"}} value={props.editSalary} onChange={(e)=>props.setEditSalary(e.target.value.toUpperCase())}></input> : props.item.salary}</td>
     
      <td div className='itemO' >
        {props===props.item.id ? <button className='btnClass2' onClick={()=>{}}>Cancel</button>:<button className="btnClass2" onClick={() => { props.onDelete(props.item) }}> DELETE</button>}
       {props===props.item.id ? <button className="btnClass2" onClick={() => {props.onEdit(props.item) }}> Done</button>: <button className="btnClass2" onClick={() => {props.setEditId(props.item.id) ;props.setEditName(props.item.name) ;props.setEditSalary(props.item.salary) ; props.setEdit(props.item.id) }}> EDIT</button>}
      </td>
     

    </tr>
  )
}
