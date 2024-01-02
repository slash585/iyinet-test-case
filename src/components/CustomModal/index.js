import { React } from 'react'
import { Modal } from 'react-bootstrap'
import CargoType from '../CargoType'
import CargoDimension from '../CargoDimension'

const CustomModal = ({ show, closeModalHandler }) => {

    const handleClose = () => {
        closeModalHandler()
    }

    return (
        <div className='modal'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>
                    <CargoType />
                    <CargoDimension />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CustomModal