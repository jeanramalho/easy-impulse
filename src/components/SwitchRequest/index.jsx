import Styles from './SwitchRequest.module.scss'
import { useState } from 'react'

const SwitchRequest = () => {

    const [selectedValue, setValue] = useState("")

    const handleSetValue = (event) => {
        setValue(event.target.value)
    }
    

    return (
        <div className={Styles.container}>
            <form>
                <select name="selectedApi" className={Styles.switch} value={selectedValue} oncChange={handleSetValue}>
                    <option value=""> Escolha uma API para request </option>
                    <option value="Hotsite"> Hotsite </option>
                    <option value="Search"> Search </option>
                    <option value="Navigates"> Navigates </option>
                    <option value="Onsite"> Onsite </option>
                </select>
            </form>
        </div>
    )
}

export default SwitchRequest