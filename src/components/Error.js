import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export const Error = () => {
  const errMsg = useSelector((state) => state.weather.errMsg)
  return (
    <div>Error! {errMsg}</div>
  )
}
