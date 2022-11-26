
//https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import CareerTimeline from "../../components/CareerTimeline";
import CTABand from "../../components/CTABand";
import Hero from "../../components/Hero";
import timelineEvents from "../../assets/timeline-carrer";

const About: React.FC = () => {
  return <div>
    <Hero title="Hi, I am Lorenzo" />
    <CTABand
      primaryText="Want to work together"
      secondaryText="Want to work together"
      buttonText="Contact Me"
    />
    <CareerTimeline
      timelineEvents={timelineEvents}
    />
  </div>;
};

export default About;