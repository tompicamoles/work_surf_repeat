import React, { useRef, useEffect, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

export const GoogleMapsIdFinder = () => {
  const [predictions, setPredictions] = useState([]);
  const inputRef = useRef(null);
  const [selectedResult, setSelectedResult] = useState('');

  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.AutocompleteService();

    const handleInput = () => {
      const query = inputRef.current.value;
      if (!query) {
        setPredictions([]);
        return;
      }

      const request = {
        input: query,
        types: ['establishment'],
        componentRestrictions: {country: ["FR"]},
        fields: ["geometry", "name", "formatted_address"],
      };

      autocomplete.getPlacePredictions(request, (results, status) => {
        if (status === 'OK' && results) {
          setPredictions(results);
        } else {
          setPredictions([]);
        }
      });
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('input', handleInput);

    return () => {
      inputElement.removeEventListener('input', handleInput);
    };
  }, [places]);

  const handleSelectChange = (event) => {
    const placeId = event.target.value;
    setSelectedResult(placeId);}

  return (
    <div className="autocomplete-container">
    <input ref={inputRef} />
    {predictions.length > 0 && (
      <select onChange={handleSelectChange} value={selectedResult}>
        <option value="" disabled>Select a place</option>
        {predictions.map((prediction) => (
          <option key={prediction.place_id} value={prediction.place_id}>
            {prediction.description} (Place ID: {prediction.place_id})
          </option>
        ))}
      </select>
    )}
    {selectedResult && (
      <div>
        <h2>Selected Place ID</h2>
        <p>{selectedResult}</p>
      </div>
    )}
  </div>
  );
};
