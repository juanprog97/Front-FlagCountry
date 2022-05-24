import { FlagDetails } from "../models"
import {numberWithCommas,listSeparatorComma} from "../utilities/"

export const createItemFlagAdapter:any = (flag: any) => ({
    titleName: flag.name,
    nativeName: flag.nativeName,
    population: numberWithCommas(flag.population),
    region: flag.region,
    subRegion: flag.subregion,
    capital: flag.capital ? flag.capital : "N/A" ,
    srcImage: flag.flags["svg"],
    topLevelDomain: flag.topLevelDomain,
    currencies: flag.currencies ? listSeparatorComma(flag.currencies,"name"): "",
    languages: flag.languages ? listSeparatorComma(flag.languages,"name"): "",
    borderCountries: flag.hasOwnProperty("border") ? flag.border: [] ,
})