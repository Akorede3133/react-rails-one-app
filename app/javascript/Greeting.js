import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetings } from './greetingsSlice';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings())
  }, [])
  return (
    <p>{greeting?.message}</p>
  )
}

export default Greeting