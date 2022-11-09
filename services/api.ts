import { fake_getAllCountries, fake_getCountryByCode } from "./api-fake";
import {NuxtAxiosInstance} from '@nuxtjs/axios'

const url = "https://restcountries.com/v2"

type Country = {
    name: String
}

export async function getAllCountries(axios: NuxtAxiosInstance){
    console.log("environment: ", process.env.NODE_ENV)
    if(process.env.NODE_ENV=='development'){
        return await fake_getAllCountries()
    }
    var res = await axios.get(url + "/all")
    return res.data
}

export async function getCountryByCode(axios: NuxtAxiosInstance, code: String){
    console.log(code)
    if(process.env.NODE_ENV=='development'){
        return await fake_getCountryByCode()
    }
    var res = await axios.get(url + "/alpha/"+code)
    return res.data
}

export async function getCountriesByCodes(axios: NuxtAxiosInstance, codes: Array<String>){
    console.log(codes)
    if(process.env.NODE_ENV=="development"){
        var data: Array<Country> = []
        for(var i in codes){
            data[i] = (await fake_getCountryByCode() as Country)
        }
        return data
    }
    var res = await axios.get(url +'/alpha?codes='+codes.join(','))
    return res.data
}