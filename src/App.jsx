import { Analytics } from '@vercel/analytics/react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Helmet } from 'react-helmet-async';


const App = () => {
  return (
    <div>
      <Helmet>
        <title>Rizal Haryaputra | Fullstack Web Developer & AI Enthusiast</title>
        <meta name="description" content="Portfolio of Rizal Haryaputra, a Fullstack Developer specializing in Laravel, React, and AI integration. Winner of National Abdidaya Award 2025." />
        <meta name="keywords" content="Rizal Haryaputra, Fullstack Developer, Laravel Developer, Web Developer Indonesia, AI Integration" />
        <meta name="author" content="Rizal Haryaputra" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizalharyaputra.my.id" />
        <meta property="og:title" content="Rizal Haryaputra - Fullstack Developer Portfolio" />
        <meta property="og:description" content="Check out my latest projects in Web Development and AI." />
        <meta property="og:image" content="https://rizalharyaputra.my.id/my_logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Rizal Haryaputra - Fullstack Developer" />
        <meta property="twitter:description" content="Specializing in Laravel ecosystem and AI integration." />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App;