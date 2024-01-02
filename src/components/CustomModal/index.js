import { React } from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = ({ show, closeModalHandler }) => {

    const handleClose = () => {
        closeModalHandler()
    }

    return (
        <div className='modal'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>
                    im here !
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CustomModal