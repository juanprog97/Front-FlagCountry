export const codeFlagAdapter:any = (data: any) => {
    
    const listCode: any = {}
    
    data.forEach((flag: any) => {
  
        listCode[flag["cca3"]] = flag.name.common;
    })

    return listCode
}