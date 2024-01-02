import { React, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CargoType from '../CargoType'
import CargoDimension from '../CargoDimension'

const CustomModal = ({ show, closeModalHandler }) => {

    const [cargoImage, setCargoImage] = useState("https://packer.searates.com/images/box.png")

    const handleClose = () => {
        closeModalHandler()
    }

    const changeCargoImage = (imageUrl) => {
        setCargoImage(imageUrl)
    }

    return (
        <div className='modal'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>
                    <CargoType changeCargoImage={changeCargoImage} />
                    <CargoDimension cargoImage={cargoImage} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CustomModal