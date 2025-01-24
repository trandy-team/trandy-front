import React from "react";

type ButtonTypes = "default" | "ghost" | "disabled" | "text";

type Props = {
  type?: ButtonTypes;
  text: string;
  fw?: number;
  fz?: number;
};

const Button = ({ type = "default", text, fw = 400, fz = 16 }: Props) => {
  const buttonClass = `button ${type}`;

  return (
    <button
      className={buttonClass}
      style={{ "--fw": fw, "--fz": `${fz}px` } as React.CSSProperties}
      disabled={type === "disabled"}
    >
      {text}
    </button>
  );
};

export default Button;
