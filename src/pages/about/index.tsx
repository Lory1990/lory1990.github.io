
//https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import CareerTimeline from "../../components/CareerTimeline";
import Hero from "../../components/Hero";
import { timelineEvents } from "./timelineEvents";

const About: React.FC = () => {
  return <div>
    <Hero title="Hi, I am Lorenzo" />
    <CareerTimeline
      timelineEvents={timelineEvents}
    />
  </div>;
};

export default About;