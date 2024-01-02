import { React, useState } from 'react'
import { Button } from 'react-bootstrap'
import CustomModal from '../../components/CustomModal'
import './style.css'

const Home = () => {

    const [openModal, setOpenModal] = useState(false)
    
    const handleClickOpenModal = () => { setOpenModal(true) }
    const closeModalHandler = () => { setOpenModal(false) }

    return (
        <div className='home'>
            <Button onClick={() => {handleClickOpenModal()}}>Open Modal</Button>
            <CustomModal show={openModal} closeModalHandler={closeModalHandler} />
        </div>
    )
}

export default Home