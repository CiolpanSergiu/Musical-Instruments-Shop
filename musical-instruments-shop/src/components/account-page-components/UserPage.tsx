import { useContext, useState, useEffect } from "react";
import AuthentificationProvider from "../../context/AuthentificationContext";
import styled from "styled-components";
import PasswordDotsContainer from "../miscellaneous/account-page/PasswordDotsContainer";
import editUserData from "../../functions/account-related-functions/editUserData";
import validateNewAccountProperty from "../../functions/account-related-functions/validateNewAccountProperty";
import FormErrorMsg from "../miscellaneous/FormErrorMsg";

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

const TogglePasswordBtn = styled.button`
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

const ChangeUserDataBtn = styled(TogglePasswordBtn)`
  padding: 0.25rem 1.25rem;
`;

const EditBtn = styled(TogglePasswordBtn)`
  font-size: 1.2rem;
  padding: 0.6rem 2rem;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-conetent: center;
`;

const InputBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-conetent: center;
  width: 100%;
`;

const EditInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const CloseInputBtn = styled.span`
  font-size: 1.2rem;
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;

export default function UserPage() {
  const defaultToEdit = "nothing";
  const { currentUser, setCurrentUser }: any = useContext(
    AuthentificationProvider
  );
  const [showPasswords, setShowPasswords] = useState<boolean>(false);
  const [toEdit, setToEdit] = useState<string>(defaultToEdit);
  const [showEditInput, setShowEditInput] = useState<boolean>(false);
  const [editInputContent, setEditInputContent] = useState<string>("");
  const [editError, setEditError] = useState<string>("");

  useEffect(() => {
    editUserData(currentUser);
  }, [currentUser]);

  function toggleShowPass() {
    setShowPasswords((prevState) => !prevState);
  }

  function toggleEditMode(propertyToEdit: string) {
    setToEdit(propertyToEdit);
    setEditInputContent("");
    setShowEditInput(true);
  }

  type ValidationResult = {
    isValid: boolean;
    errorMsg: string;
  };

  function handleEdit() {
    console.log(editInputContent, toEdit);
    const validationResult: ValidationResult = validateNewAccountProperty(
      editInputContent,
      toEdit
    ) || { isValid: false, errorMsg: "Something went wrong" };

    if (validationResult.isValid) {
      setCurrentUser((prevState: any) => ({
        ...prevState,
        [toEdit]: editInputContent,
      }));
      setEditError("");
      setShowEditInput(false);
      setToEdit(defaultToEdit);
      setEditInputContent("");
    } else {
      setEditError(validationResult.errorMsg);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditInputContent(event.target.value);
  }

  function emptyInputBox() {
    setEditInputContent("");
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
              <TogglePasswordBtn onClick={toggleShowPass}>
                Show
              </TogglePasswordBtn>
              {currentUser.password}
            </FlexRowContainer>
          ) : (
            <FlexRowContainer>
              <TogglePasswordBtn onClick={toggleShowPass}>
                Show
              </TogglePasswordBtn>
              <PasswordDotsContainer length={currentUser.password.length} />
            </FlexRowContainer>
          )}
        </InfoRow>
        <InfoRow>
          <></>
          <BoldSpan>Change Password: </BoldSpan>
          <ChangeUserDataBtn onClick={() => toggleEditMode("password")}>
            Change
          </ChangeUserDataBtn>
        </InfoRow>
        {
          // until i find how to check if the email is not already used by someone else
          /* <InfoRow>
          <BoldSpan>Change Email: </BoldSpan>
          <ChangeUserDataBtn onClick={() => toggleEditMode("email")}>
            Change
          </ChangeUserDataBtn>
        </InfoRow> */
        }
        <InfoRow>
          <BoldSpan>Change Phone: </BoldSpan>
          <ChangeUserDataBtn onClick={() => toggleEditMode("phoneNumber")}>
            Change
          </ChangeUserDataBtn>
        </InfoRow>
        <InfoRow>
          <BoldSpan>Change Country: </BoldSpan>
          <ChangeUserDataBtn onClick={() => toggleEditMode("country")}>
            Change
          </ChangeUserDataBtn>
        </InfoRow>
        {showEditInput && (
          <div style={{ marginTop: "2rem" }}>
            <InputContainer>
              <InputBox>
                <EditInput
                  onChange={handleChange}
                  type={toEdit === "password" ? "password" : "text"}
                  name="editProperty"
                  value={editInputContent}
                  placeholder={`Edit ${toEdit} here`}
                />
                {toEdit !== "password" && (
                  <CloseInputBtn onClick={emptyInputBox}>X</CloseInputBtn>
                )}
              </InputBox>

              <EditBtn onClick={handleEdit}> Edit </EditBtn>
            </InputContainer>
            {editError !== "" && (
              <FormErrorMsg errorMsg={editError}></FormErrorMsg>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
