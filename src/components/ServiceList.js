import React from 'react';
import { connect } from 'react-redux';
import { delService, editService, resetService } from '../store/actions';

function ServiceList(props) {

  function edit(id) {
    props.editService(id)
    props.delService(id)
    setTimeout(() => props.resetService(), 3000);
  }

  const listItems = props.filtred.map((val) => (
    <li key={val.id}>
      {val.name} - {val.price}
      <div>
        <button onClick={() => edit(val.id)}>Edit</button>
        <button onClick={() => props.delService(val.id)}>Del</button>
      </div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  return {
    services: state.services,
    filtred: state.filtred,
  };
}

const mapDipatchToProps = {
  delService,
  editService,
  resetService
};

export default connect(mapStateToProps, mapDipatchToProps)(ServiceList);
