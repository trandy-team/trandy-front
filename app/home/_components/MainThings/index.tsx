"use client";

import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
};

const MainThings = ({ src, width, height }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (!imgRef.current) return;

    const fac = new FastAverageColor();
    fac
      .getColorAsync(imgRef.current)
      .then((result) => {
        setColor(result.hex);
      })
      .catch((error) => console.error("색상 추출 실패:", error));
  }, []);

  return (
    <div className="MainThings__box" style={{ backgroundColor: color }}>
      <div className="MainThings__img">
        <div style={{ width: `${width}px`, height: `${height}px` }}>
          <Image ref={imgRef} src={src} alt="사진" fill unoptimized />
        </div>
      </div>
    </div>
  );
};

export default MainThings;
