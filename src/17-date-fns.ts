import {subDays, format} from 'date-fns'

const myDate = new Date(1998,2,29)
const rta = subDays(myDate, 30);

const str = format(rta, 'dd/MM/yyyy')

console.log(str);