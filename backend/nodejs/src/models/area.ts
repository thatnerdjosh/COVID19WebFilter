import axios from "axios"
import Fuse from "fuse.js"

export interface Area {
    ConfirmDate: string
    Age: number
    Gender: string
    GenderEn: string
    Nation: string
    NationEn: string
    Province: string
    ProvinceEn: string
    District: string
}

export async function FetchAreas(): Promise<Area[]> {
    var areas:Area[]
    return axios.get('https://covid19.th-stat.com/api/open/cases')
    .then(function (response) {
        if(response.data["Data"].length > 0) {
            areas = response.data["Data"]
        } else {
            areas = []
        }
        return areas
    })
    .catch(function (error) {
        return Promise.reject(error) 
    })
    .finally(function () {
    });
}

export function FilterArea(areas: Area[], filter: string): Fuse.FuseResult<Area>[] {
    const options = {
        keys: ['Province', 'ProvinceEn']
    }
      
    const fuse = new Fuse(areas, options)
    return fuse.search(filter)
}