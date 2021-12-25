import React from 'react'
import axios from 'axios'
var options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params: {day: 'today'},
    headers: {
      'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      'x-rapidapi-key': '63ea0acc1cmshd323dbe02cefba5p194081jsn7f6127ecf640'
    }
  };
export const haroscope=async ()=>{
    const {data}=await axios.request(options)
}



