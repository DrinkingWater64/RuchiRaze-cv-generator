import React, { useEffect, useState } from "react";

export default BulletPoint = ({ points }) => {
  return (
    <>
      {points.map((point) => (
        <div>{point}</div>
      ))}
    </>
  );
};
