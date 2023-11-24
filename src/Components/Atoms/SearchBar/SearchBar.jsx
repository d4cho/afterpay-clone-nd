import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({
  backgroundColor,
  borderRadius,
  padding,
  icon,
  placeHolder,
  width,
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      {icon}
      <input
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          padding: padding,
          paddingLeft: "35px",
          border: isShown ? "1px solid black" : null,
          width: width,
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        placeholder={placeHolder}
        className='search-field'
        type='text'
      />
    </>
  );
}

export default SearchBar;
