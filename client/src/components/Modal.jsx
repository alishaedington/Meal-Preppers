import React, { useContext } from 'react';
import Context from '../context';

export default function Modal() {
  const {
    setUsername, showModal, setShowModal, fetchUserRecipes,
  } = useContext(Context);

  function handleSubmit(event) {
    event.preventDefault();
    const transformedUsername = (event.target[0].value).toLowerCase();
    setShowModal(false);
    fetchUserRecipes(transformedUsername);
    setUsername(transformedUsername);
  }

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: showModal ? null : 'translateY(-100vh)',
        opacity: showModal ? '1' : '0',
        zIndex: showModal ? '1' : '-1',
        position: 'absolute',
      }}
    >
      <div className="modal-header">
        <b><h2>Welcome to Meal Preppers!</h2></b>
      </div>
      <div className="modal-content">
        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="modal-top-info">
            <h3>Please Choose a Username</h3>
          </div>
          <div className="modal-nickname-email">
            <input type="text" placeholder="Example: octopod1813" />
          </div>
          <div className="modal-footer">
            <button className="btn-add" type="submit"><b>Submit</b></button>
          </div>
        </form>
      </div>
    </div>
  );
}
