
import axios from 'axios';

import {loadAbort} from '../utilities';

export const fetchAllFlag = () =>{
    const controller = loadAbort();
    return {
        call: axios.get<any>("https://restcountries.com/v3.1/all",{ signal: controller.signal }),
        controller
    }

}
