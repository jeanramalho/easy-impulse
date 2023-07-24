import Styles from './SwitchRequest.module.scss'

const SwitchRequest = () => {
    return (
        <div className="container">
            <form>
                <select name="selectedApi">
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