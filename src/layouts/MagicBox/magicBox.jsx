import React from 'react'
import useRandomColor from '../../hooks/useRandomColor'

export default function MagicBox() {
  const {color} = useRandomColor();
  return (
    <div style={{width: '40px', height: '40px', backgroundColor: color}}> </div>
  )
}
