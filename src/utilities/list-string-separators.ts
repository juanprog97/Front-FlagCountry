export const listSeparatorComma = (text: any,key:string | any =  "") => {
    const listData = Object.keys(text).map(data => {
        if(key!== "")
            console.log(data)
        return key == "" ? text[data] : text[data][key]     
    })
    return listData.join(", ");
}