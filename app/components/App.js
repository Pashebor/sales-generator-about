import React from 'react';
import Acquaintance from './Acquaintance';
import Instruments from './Instruments';
import WhyGenerator from './WhyGenerator';
import ClientsCases from './ClientsCases';
import OurServices from './OurServices';

const App = () => {
    return(
        <div>
           <Acquaintance/>
           <Instruments/>
           <WhyGenerator/>
           <ClientsCases/>
           <OurServices/>
        </div>
    )
};

export default App;
