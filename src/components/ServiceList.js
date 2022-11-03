import React from 'react';
import { connect } from 'react-redux'
import { delService } from '../actions'
//import { editService } from '../actions'

function ServiceList(props) {

  function edit(id){
    //editService(id)
    delService(id)
  }

  const listItems = props.contacts.map((val) =>
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
      contacts: state.contacts
    }
}

const mapDipatchToProps = {
  delService
}

export default connect(mapStateToProps, mapDipatchToProps)(ServiceList)




//export default connect(null, mapDipatchToProps)(AddServiceForm)