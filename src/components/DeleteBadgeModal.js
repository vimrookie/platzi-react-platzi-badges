import React from 'react';
import Modal from './Modal';
import './styles/DeleteBadgeModal.css';

const DeleteBadgeModal = (props) => {
    return (<Modal
        isOpen={props.modalIsOpen}
        onClose={props.onCloseModal}>
        <div className="DeleteBadgeModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete this badge.</p>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-3">Delete</button>
                <button onClick={props.onCloseModal} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>)
}

export default DeleteBadgeModal;