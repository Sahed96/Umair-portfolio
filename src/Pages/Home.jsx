import About from '../Components/About';
import Newslater from '../Components/Newslater';
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
      <Newslater />
    </div>
  );
};

export default Home;
