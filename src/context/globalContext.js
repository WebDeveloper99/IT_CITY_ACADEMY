

import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
 
//   useEffect(() => {
//     fetch('https://api.uracashback.uz/companies', {
//       headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('token'),
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         console.log(data, 'nu dada');
//         setCompanies(data)
//       })
//       .catch((err) => alert(err))
//   }, [])

  return (
    <CompaniesContext.Provider value={''}>
      {children}
    </CompaniesContext.Provider>
  )
}
