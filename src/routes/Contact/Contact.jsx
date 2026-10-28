import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar/NavBar.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Contact = () => (
  <div className="bg-[#080b14] min-h-screen">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Contact - Sid-Ahmed Moussi</title>
    </Helmet>
    <NavBar />
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;
