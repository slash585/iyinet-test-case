import { React } from 'react'
import { Modal } from 'react-bootstrap'
import CargoType from '../CargoType'

const CustomModal = ({ show, closeModalHandler }) => {

    const handleClose = () => {
        closeModalHandler()
    }

    return (
        <div className='modal'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>
                    <CargoType />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CustomModal