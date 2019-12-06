import React from "react";

const DisplayData = ({ city, ok, country, sunrise, sunset }) => (
  <>
    {city && !ok && (
      <p className="DisplayData__error">Please enter a valid city name.</p>
    )}

    {city && ok && (
      <div className="DisplayData__info">
        <p className="DisplayData__key">
          City: <span className="value">{city}</span>
        </p>
        <p className="DisplayData__key">
          Country: <span className="value">{country}</span>
        </p>
        <p className="DisplayData__key">
          Sunrise: <span className="value">{Date(sunrise)}</span>
        </p>
        <p className="DisplayData__key">
          Sunset: <span className="value">{Date(sunset)}</span>
        </p>
      </div>
    )}
  </>
);

export default DisplayData;
