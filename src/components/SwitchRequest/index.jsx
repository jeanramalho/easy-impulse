import Styles from './SwitchRequest.module.scss';
import { useState } from 'react';

const SwitchRequest = ({clientApikey, clientSecretKey}) => {
  const [selectedValue, setValue] = useState('');

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const hotsite = `https://api.linximpulse.com/engage/search/v3/hotsites/apikey=${clientApikey}/secretkey=${clientSecretKey}`

  return (
    <div className={Styles.container}>
      <form>
        <select name="selectedApi" className={Styles.switch} value={selectedValue} onChange={handleSetValue}>
          <option value=""> Escolha uma API para request </option>
          <option value={hotsite}> Hotsite </option>
          <option value="Search"> Search </option>
          <option value="Navigates"> Navigates </option>
          <option value="Onsite"> Onsite </option>
        </select>
      </form>

      <p>{selectedValue}</p>
    </div>
  );
};

export default SwitchRequest;
