import { useEffect, useRef } from "react"
interface IGoogleMapProps {}

const GoogleMap: React.FC<IGoogleMapProps> = ({}) => {
  const ref = useRef()
  const milan = { lat: 45.4641013, lng: 9.1897325 }
  useEffect(() => {
    const googleMap = new window.google.maps.Map(ref.current, {
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoom: 12,
      center: milan
    })

    // const marker = new google.maps.Marker({
    //   position: milan,
    //   map: googleMap
    // });
  }, [])

  return <div style={{ width: "100%", height: "100%" }} ref={ref} id="map" />
}

export default GoogleMap
