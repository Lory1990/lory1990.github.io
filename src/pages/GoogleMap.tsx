import { useEffect, useRef } from "react";
interface IGoogleMapProps {

}


const GoogleMap: React.FC<IGoogleMapProps> = ({ }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, { zoom: 3, center: { lng: 10, lat: 20 } })
  }, [])

  return (
    <div style={{ width: "100%", height: "100%" }} ref={ref} id="map" />
  )
}

export default GoogleMap