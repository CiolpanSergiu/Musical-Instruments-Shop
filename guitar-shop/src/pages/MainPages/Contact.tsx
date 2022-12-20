import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactPageComponents/ContactForm";
import ContactPageDetails from "../../components/ContactPageComponents/ContactPageDescriptiono";
import styled from "styled-components";

const ContactPageContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export default function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactPageContent>
        <ContactForm></ContactForm>
        <ContactPageDetails></ContactPageDetails>
      </ContactPageContent>
      <Footer />
    </div>
  );
}
