import React from 'react';

export default function PageHero({ bgImage, label, title, subtitle }) {
  return (
    <div className="ph">
      <div className="ph-bg" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="ph-ov" />
      <div className="ph-c">
        <div className="sec-label">{label}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
