import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useAos = (options = {}) => {
  useEffect(() => {
    Aos.init(options);
  }, [options]);
};

export default useAos;
