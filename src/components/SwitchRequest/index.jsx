import Styles from './SwitchRequest.module.scss'
import { useState } from 'react'

const SwitchRequest = () => {

    const [selectedValue, setValue] = useState("")
    
    
    return (
        <div className={Styles.container}>
            <form>
                <select name="selectedApi" className={Styles.switch}>
                    <option value=""> Escolha uma API para request </option>
                    <option value="xbox"> Hotsite </option>
                    <option value="ps5"> Search </option>
                    <option value="nsw"> Navigates </option>
                    <option value="pcg"> Onsite </option>
                </select>
            </form>
        </div>
    )
}

export default SwitchRequest