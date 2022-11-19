import React, { useRef } from 'react'
import { connect,  useSelector} from 'react-redux'
import { addService, seekService } from '../store/actions'
import { nanoid } from 'nanoid'

function AddServiceForm(props) {
  const name = useRef(null)
  const price = useRef(null)
  const inputName = useSelector(state => state.inputName)
  const inputPrice = useSelector(state => state.inputPrice)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.current.value || !price.current.value) return null
    props.addService({id: nanoid(), name: name.current.value, price: price.current.value})
    name.current.value = ""
    price.current.value = ""
    name.current.focus()
  }

  function seek(e){
    e.preventDefault()
    props.seekService(e.target.value)
  }

  return (
    <div className="add-service">
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder ="Add name"
          value = {inputName}
          ref={name} />
          <input type="number" 
          placeholder="Add price" 
          value = {inputPrice}
          ref={price} />
        <button type="submit">Save</button>
      </form>
      <input className="seek"
          type="text" 
          placeholder="Поиск"
          onChange={seek} />
    </div>
  )
}

const mapDipatchToProps = {
  addService,
  seekService
}

export default connect(null, mapDipatchToProps)(AddServiceForm)