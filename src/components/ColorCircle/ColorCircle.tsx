import React from 'react';

function ColorCircle(props: { color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: props.color,
          boxSizing: 'border-box',
          marginLeft: '16px',
        }}
      />
    </div>
  );
}

export default ColorCircle;