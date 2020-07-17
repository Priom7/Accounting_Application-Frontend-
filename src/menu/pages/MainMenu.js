import React, { Component } from "react";

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <h1 className='center'>Master</h1>
        <ul className='center'>
          <li>
            <button inverse to='/groups'>
              Groups
            </button>
          </li>
          <li>
            <button inverse to='/ledgers'>
              Ledgers
            </button>
          </li>
        </ul>
        <h1 className='center'>Transactions</h1>
        <ul className='center'>
          <li>
            <button inverse to='/payment'>
              Payment
            </button>
          </li>
          <li>
            <button inverse to='/receipt'>
              Receipt
            </button>
          </li>
          <li>
            <button inverse to='/journal'>
              Journal
            </button>
          </li>
        </ul>
        <h1 className='center'>Reports</h1>
        <ul className='center'>
          <li>
            <button inverse to='/groups'>
              Account Books
            </button>
          </li>
          <li>
            <button inverse to='/groups'>
              Trial Balance
            </button>
          </li>
          <li>
            <button inverse to='/groups'>
              Receipt & Payment
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
