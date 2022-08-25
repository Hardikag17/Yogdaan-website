import type { NextPage } from 'next';

// file imports
import Navbar from '../components/navbar/Navbar';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

const Home: NextPage = () => {
  return (
    <div className=' font-regular text-body p-5 '>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
