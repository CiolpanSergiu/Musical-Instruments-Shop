import styled from "styled-components";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import SinginForm from "../../components/account-page-components/SinginForm";
import FormOverlay from "../../components/account-page-components/FormOverlay";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default function SinginPage() {
  return (
    <>
      <Navbar />
      <FormOverlay />
      <PageContainer>
        <SinginForm />
      </PageContainer>
      <Footer />
    </>
  );
}
