
interface country{
    label: String,
    name: String
}

export interface FlagResume { 
    titleName: String,
    nativeName: String,
    population: String,
    region: String,
    subRegion: String,
    capital: String,
    topLevelDomain: String,
    currencies: String,
    languages: String,
    borderCountries: Array<country>
}
