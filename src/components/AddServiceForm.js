import React, { useRef } from 'react'
import { connect,  useSelector} from 'react-redux'
import { addService } from '../store/actions'
import { nanoid } from 'nanoid'

function AddServiceForm(props) {
  const name = useRef(null)
  const price = useRef(null)
  const items = useSelector(state => state.services)

  //name.current.value = editName || ""
  //price.current.value = editPrice || ""
  

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.current.value || !price.current.value) return null
    props.addService({id: nanoid(), name: name.current.value, price: price.current.value})
    name.current.value = ""
    price.current.value = ""
    name.current.focus()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add name" 
        ref={name} />
        <input type="number" 
        placeholder="Add price" 
        ref={price} />
      <button type="submit">Save</button>
    </form>
  );
}

const mapDipatchToProps = {
  addService
}

export default connect(null, mapDipatchToProps)(AddServiceForm)