/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import Context from '../context';

export default function ShoppingListModal() {
  const { showShoppingModal, setShowShoppingModal, shoppingList } = useContext(Context);

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: showShoppingModal ? null : 'translateY(-100vh)',
        opacity: showShoppingModal ? '1' : '0',
        zIndex: showShoppingModal ? '1' : '-1',
        position: 'absolute',
      }}
    >
      <div className="modal-header">
        <b><h2>This Week&apos;s Shopping List!</h2></b>
        <span
          onClick={() => setShowShoppingModal(false)}
          className="close-modal-btn"
        >
          <b>X</b>
        </span>
      </div>
      <div className="modal-content">
        <ul className="shopping-list">
          {shoppingList.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
