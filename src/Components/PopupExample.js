//Component for popup 

import React from 'react'
import Popup from 'reactjs-popup'
import Table from './Table';

const PopupExample = () => (
    <Popup 
        trigger = {<button>Trade</button>}
        position = "center center"
        >
        <div>
            <Table />
        </div>
    </Popup>
)
    
export default PopupExample