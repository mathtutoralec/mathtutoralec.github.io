import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGoogleMaps } from 'store/env/selectors';
import axios from 'axios';

const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

export const useGoogleMap = (address, { lat=51.503038, lng=0.0031543, zoom=14 }) => {
  const googleMapsKey = useSelector(selectGoogleMaps);
  const [center, setCenter] = useState({ lat, lng });

  useEffect(() => {
    const getGeocoding = async () => {
      const url = `${BASE_URL}?address=${address}&key=${googleMapsKey}`;
      const data = await axios.get(url);
      if (data?.data?.results?.length > 0) {
        setCenter(data?.data?.results[0]?.geometry?.location);
      }
    }
    getGeocoding();
  }, [address, googleMapsKey]);

  return {
    center,
    zoom,
    googleMapsKey
  };
}

export default useGoogleMap;