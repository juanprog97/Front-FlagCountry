import {numberWithCommas,listSeparatorComma} from "../utilities/"
import {FlagDetails} from "../models"

export const createListFlagAdapter: any = (listFlag:any[]) => {
    
    const listAlphaCountry: any = {}
    const listFlagsDetail:FlagDetails[]  = listFlag.map((flag: any) => {
   
        const adaptFlag: FlagDetails = {
            titleName: flag.name.common,
            nativeName: flag.demonym,
            population: numberWithCommas(flag.population),
            region: flag.region,
            subRegion: flag.subregion,
            capital: flag.capital ? flag.capital : "N/A" ,
            srcImage: flag.flags["svg"],
            topLevelDomain: flag.topLevelDomain,
            currencies: flag.currencies ? listSeparatorComma(flag.currencies,"name"): "",
            languages: flag.languages ? listSeparatorComma(flag.languages): "",
            borderCountries: flag.hasOwnProperty("border") ? flag.border: [] ,
        
        } 
       
        listAlphaCountry[flag["alpha3Code"]] = flag.name
        return adaptFlag;
        
    })
    listFlagsDetail.forEach(flag => {
        flag.borderCountries = flag.borderCountries.map(code => {
            return listAlphaCountry[code]
        })
    })
    return listFlagsDetail;
    
}