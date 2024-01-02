import { React } from 'react'
import './style.css'
import Title from '../Title'
import DimensionForm from '../DimensonForm'

function CargoDimension({ cargoImage }) {

  return (
    <div className='cargo-dimension'>
      <Title text={"2.Select Cargo Dimension"} />
      <div className='dimension-area'>
        <div className='box-image'>
          <img src={cargoImage} alt='dimension' />
        </div>
        <div className='form-area'>
          <DimensionForm />
        </div>
      </div>
    </div>
  )
}

export default CargoDimension