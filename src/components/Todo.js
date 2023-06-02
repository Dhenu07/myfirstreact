import { useState } from 'react';
import Modal from './Modal.js';
import Backdrop from './Backdrop.js';
function Todo(props) {
    const[modalIsOpen,setModalIsOpen]=useState(false);
    function deleteHandeler(){
        setModalIsOpen(true);
    }
    return(
        <div className='card'>
        <h2>{props.text}</h2>
      <div className='actions'> 
        <button className='btn' onClick={deleteHandeler()}>Delete</button>
        </div>  
        { modalIsOpen&&<Modal />}
        { modalIsOpen&&<Backdrop />}
      </div>
    ); 
}
export default Todo;