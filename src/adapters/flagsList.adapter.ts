import {numberWithCommas,listSeparatorComma} from "../utilities/"
import {FlagDetails} from "../models"

export const createListFlagAdapter: any = (listFlag:any[]) => {
    

    const listFlagsDetail:FlagDetails[]  = listFlag.map((flag: any) => {

        const adaptFlag: FlagDetails = {
            titleName: flag.name.common,
            nativeName: flag.name.hasOwnProperty("nativeName") ? flag.name.nativeName.common : flag.name.common  ,
            population: numberWithCommas(flag.population),
            region: flag.region,
            subRegion: flag.subregion,
            capital: flag.capital ? flag.capital : "N/A" ,
            srcImage: flag.flags["png"],
            topLevelDomain: flag.topLevelDomain,
            currencies: flag.currencies ? listSeparatorComma(flag.currencies,"name"): "",
            languages: flag.languages ? listSeparatorComma(flag.languages): "",
            borderCountries: flag.hasOwnProperty("border") ? flag.border: [] ,
        
        } 
       
       
        return adaptFlag;
        
    })

    return listFlagsDetail;
    
}