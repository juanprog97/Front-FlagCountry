
import axios from 'axios';

import {loadAbort} from '../utilities';

export const fetchFlags = (value:string = "") =>{
    const controller = loadAbort();
        const url = value == "" ? "https://restcountries.com/v3.1/all" : `https://restcountries.com/v3.1/region/${value}`
    return {
        call: axios.get<any>(url,{ signal: controller.signal }),
        controller
    }

}
