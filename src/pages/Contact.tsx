import ContactForm from "../components/ContactForm"
import GoogleMap from "../components/GoogleMap"
import { Wrapper as GoogleMapsWrapper, Status } from "@googlemaps/react-wrapper";
import { useState } from "react";
import { Theme, useMediaQuery } from "@mui/material";


function Contact({ contactFormRules }) {
  const [mapsStatus, setMapsStatus] = useState<Status>(Status.LOADING)
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "40px 0px" }}>
      <div style={{ width: matches ? "50%" : "90%" }}>
        <ContactForm rules={contactFormRules} />
      </div>

      {matches && <GoogleMapsWrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
        callback={(status, loader) => setMapsStatus(status)}>
        {mapsStatus === Status.SUCCESS &&
          <div style={{ width: "30%" }}>
            <GoogleMap />
          </div>
        }
      </GoogleMapsWrapper>}
    </div>
  )
}

export default Contact