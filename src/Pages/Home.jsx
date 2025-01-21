import About from '../Components/About';
import Profile from '../Components/Profile';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div>
      <Profile />
      <About />
      <Services />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
