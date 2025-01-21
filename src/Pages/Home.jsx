import About from '../Components/About';
import Profile from '../Components/Profile';
import Projects from '../Components/Projects';
import Services from '../Components/Services';

const Home = () => {
  return (
    <div>
      <Profile />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
