import { React } from 'react'
import './style.css'

const Title = ({ text }) => {

    const firstTwoLetters = () => {
        const [firstLetter, secondLetter] = text
        return firstLetter + secondLetter
    }

    const lastLetters = () => {
        return text.substring(2)
    }

    return (
        <div className='title'>
            <div className='firstTwoLetters'>{firstTwoLetters()}</div>{" "}
            <div>{lastLetters()}</div>
        </div>
    )
}

export default Title