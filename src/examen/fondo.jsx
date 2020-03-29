import React from 'react';
import '../assets/style/Footer.scss';
import Jlcr from '../components/JLCR';
import Vacaciones from '../components/vacaciones';
import Clase from '../components/clasedigital';


const App = () =>(
    <div className="App">
        <Jlcr />
            <Vacaciones />
                <Clase />
    </div>
);
export default App;
