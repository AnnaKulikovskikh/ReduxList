import React from 'react';
import { connect, useSelector } from 'react-redux'
import { delService } from '../store/actions'
//import { editService } from '../store/actions'

function ServiceList(props) {

  //const items = useSelector(state => state.services)
  //console.log(items)

  function edit(id){
    //editService(id)
    delService(id)
  }

  const listItems = props.services.map((val) =>
      <li key={val.id}>
        {val.name} - {val.price}
        <div>
          <button onClick={() => edit(val.id)}>Edit</button>
          <button onClick={() => props.delService(val.id)}>Del</button>
        </div>
    </li>
  )
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
    return {
      services: state.services
    }
}

const mapDipatchToProps = {
  delService
}

export default connect(mapStateToProps, mapDipatchToProps)(ServiceList)
