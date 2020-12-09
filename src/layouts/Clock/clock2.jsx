import React, { useEffect, useState } from 'react';
 
function formatTime(date) {
  if(!date) return '';
  const hrs = date.getHours();
  const mts = date.getMinutes();
  const scs = date.getSeconds();
  return `${hrs}: ${mts}: ${scs}`;
}

function Clock2() {
  const [timeControl, setTimeControl] = useState('');

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const newTimeControl = formatTime(now);
      setTimeControl(newTimeControl)
    }, 1000);
  }, []);
  
  return (
    <p style={{fontSize: '20px', color: 'deeppink'}}>
      {timeControl}
    </p>
  );
}
export default Clock2;
