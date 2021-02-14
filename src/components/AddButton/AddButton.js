import React from 'react';

function AddButton({onOpenModal}) {
    return (
        <button className="btn btn_add" onClick={onOpenModal}>
            <i className="fa fa-plus ico_min"></i>
        </button>    
    )
}

export default AddButton;