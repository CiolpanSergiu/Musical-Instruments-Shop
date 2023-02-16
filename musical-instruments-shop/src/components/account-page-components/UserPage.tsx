import { useContext, useState } from "react";
import AuthentificationProvider from "../../context/AuthentificationContext";
import styled from "styled-components";
import PasswordDotsContainer from "../miscellaneous/account-page/PasswordDotsContainer";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 5rem 1.5rem;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    padding: 2rem 4rem 5rem 4rem;
  }
`;

const FlexRowContainer = styled.div`
  display: flex;
`;

const MainHeader = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto 3rem auto;
  grid-area: 1 / 1 / auto / span 2;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const DetailsCategoryHeader = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const InfoRow = styled.div`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  margin-right: 5rem;
`;

const TogglePassBtn = styled.button`
  background-color: gray;
  color: white;
  border: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: 0.3s all ease;

  &:hover {
    background-color: #555555;
  }
`;

const ChangeUserDataBtn = styled(TogglePassBtn)`
  padding: 0.25rem 1.25rem;
`;

const StyledHr = styled.hr`
  margin: 0.5rem 0;
`;

const UserImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5%;

  @media only screen and (min-width: 992px) {
    width: 400px;
    height: 400px;
  }
`;

export default function UserPage() {
  const { currentUser }: any = useContext(AuthentificationProvider);
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  function toggleShowPass() {
    setShowPasswords((prevState) => !prevState);
  }

  return (
    <Container>
      <MainHeader>Account</MainHeader>
      <div>
        <UserImg
          alt="You profile image"
          src="https://i.ibb.co/C2xphkV/9a66138bddb3f4da07b5536990312e88-902566822471233268.jpg"
        />
      </div>
      <div>
        <DetailsCategoryHeader>General Information: </DetailsCategoryHeader>
        <StyledHr />
        <InfoRow>
          <BoldSpan>Full Name: </BoldSpan>
          {currentUser.fullName}
        </InfoRow>
        <InfoRow>
          <BoldSpan>Email: </BoldSpan>
          {currentUser.email}
        </InfoRow>
        <InfoRow>
          <BoldSpan>Phone Number: </BoldSpan>
          {currentUser.phoneNumber}
        </InfoRow>
        <InfoRow>
          <BoldSpan>Country: </BoldSpan>
          {currentUser.country}
        </InfoRow>
        <DetailsCategoryHeader>Security: </DetailsCategoryHeader>
        <StyledHr />
        <InfoRow>
          <BoldSpan>Password: </BoldSpan>
          {showPasswords ? (
            <FlexRowContainer>
              <TogglePassBtn onClick={toggleShowPass}>Show</TogglePassBtn>
              {currentUser.password}
            </FlexRowContainer>
          ) : (
            <FlexRowContainer>
              <TogglePassBtn onClick={toggleShowPass}>Show</TogglePassBtn>
              <PasswordDotsContainer length={currentUser.password.length} />
            </FlexRowContainer>
          )}
        </InfoRow>
        <InfoRow>
          <></>
          <BoldSpan>Change Password: </BoldSpan>
          <ChangeUserDataBtn> Change </ChangeUserDataBtn>
        </InfoRow>
        <InfoRow>
          <BoldSpan>Change Email: </BoldSpan>
          <ChangeUserDataBtn> Change </ChangeUserDataBtn>
        </InfoRow>
        <InfoRow>
          <BoldSpan>Change Phone: </BoldSpan>
          <ChangeUserDataBtn> Change </ChangeUserDataBtn>
        </InfoRow>
      </div>
    </Container>
  );
}
