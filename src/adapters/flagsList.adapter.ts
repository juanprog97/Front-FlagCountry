import {numberWithCommas,listSeparatorComma} from "../utilities/"
import {FlagResume} from "../models"

export const createListFlagAdapter: any = (listFlag:any[]) => {
    

    const listFlagsDetail:FlagResume[]  = listFlag.map((flag: any) => {

        const adaptFlag: FlagResume = {
            titleName: flag.name.common,
            population: numberWithCommas(flag.population),
            region: flag.region,
            capital: flag.capital ? flag.capital : "N/A" ,
            srcImage: flag.flags["png"],
            
        
        } 
       
       
        return adaptFlag;
        
    })

    return listFlagsDetail;
    
}