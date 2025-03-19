import HeroSection from './components/HeroSection';
import SuccessMetricSection from './components/SuccessMetricSection';
import MeetTheTeamSection from './components/MeetTheTeamSection'; 
import MidImageSection from './components/MidImageSection';
import AboutSection from './components/IntoSection';
import SideImageSection from './components/SideImageSection';
import ContactFormSection from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import CombinedSection from './components/CombinedSection';



export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
     
      <MeetTheTeamSection /> 
      
      <SuccessMetricSection />
     
      <CombinedSection />
       
    </>
  );
}
