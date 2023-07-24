import Styles from './SwitchRequest.module.scss'

const SwitchRequest = () => {
    return (
        <div className="container">
            <form>
                <select name="selectedApi">
                    <option value=""> Escolha uma API para request </option>
                    <option value="xbox">Xbox Series</option>
                    <option value="ps5">PS5</option>
                    <option value="nsw">Nintendo Switch</option>
                    <option value="pcg">PC Gaming</option>
                </select>
            </form>
        </div>
    )
}

export default SwitchRequest