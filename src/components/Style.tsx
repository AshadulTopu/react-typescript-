import React from "react";

type h1StyleProps = {
  h1Style: React.CSSProperties;
};

type pStyleProps = {
  pStyle: React.CSSProperties;
};
type pStyleProps2 = {
  pStyle2: React.CSSProperties;
};

// type StyleProps = h1StyleProps & pStyleProps;

// method 01

export default function Style({
  h1Style,
  pStyle,
  pStyle2,
}: h1StyleProps & pStyleProps & pStyleProps2) {
  return (
    <div>
      <h1 style={h1Style}>Hello, World!</h1>
      <p style={pStyle}>This is a paragraph.</p>
      <p style={pStyle2}>This is another paragraph.</p>
    </div>
  );
}
