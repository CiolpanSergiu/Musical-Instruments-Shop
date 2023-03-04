import { useContext, useState } from "react";
import AuthentificationProvider from "../../context/AuthentificationContext";
import styled from "styled-components";
import ShowInfoBtn from "../miscellaneous/ShowInfoBtn";
import { useNavigate } from "react-router-dom";
import PasswordDotsContainer from "../miscellaneous/account-page/PasswordDotsContainer";
import editUserData from "../../functions/account-related-functions/editUserData";
import validateNewAccountProperty from "../../functions/account-related-functions/validateNewAccountProperty";
import FormErrorMsg from "../miscellaneous/FormErrorMsg";
import deleteUserAccount from "../../functions/account-related-functions/deleteUserAccount";
import GrayButton from "../miscellaneous/account-page/GrayButton";
import ConfirmModal from "../miscellaneous/account-page/ConfirmModal";
import Overlay from "../miscellaneous/Overlay";
import ShoppingCartContext from "../../context/ShoppingCartContext";

const Container = styled.div`
  height: 100%;
  width: 100%;
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

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  margin-right: 5rem;
`;

const PasswordText = styled.span`
  margin-left: 1rem;
`;

const EditBtn = styled.button`
  background-color: gray;
  padding: 0.65rem 2rem;
  font-size: 1.1rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: #555555;
  }
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
  const { currentUser, setCurrentUser, setIsLoggedIn }: any = useContext(
    AuthentificationProvider
  );
  const { setCartItems, setCartItemsQuantity, setItemsInCart }: any =
    useContext(ShoppingCartContext);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [toEdit, setToEdit] = useState<string>(defaultToEdit);
  const [showEditInput, setShowEditInput] = useState<boolean>(false);
  const [editInputContent, setEditInputContent] = useState<string>("");
  const [editError, setEditError] = useState<string>("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<boolean>(false);
  const navigate = useNavigate();

  function handleLogout() {
    setCurrentUser(undefined);
    setIsLoggedIn(false);
    setCartItems([]);
    setCartItemsQuantity(0);
    setItemsInCart([]);
  }

  function toggleModal() {
    setShowDeleteConfirmation((prevState: boolean) => !prevState);
  }

  function handleDelete() {
    handleLogout();
    deleteUserAccount(currentUser);
  }

  function toggleShowPass() {
    setShowPassword((prevState) => !prevState);
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
    const validationResult: ValidationResult = validateNewAccountProperty(
      editInputContent,
      toEdit
    ) || { isValid: false, errorMsg: "Something went wrong" };

    if (validationResult.isValid) {
      setCurrentUser((prevState: any) => ({
        ...prevState,
        [toEdit]: editInputContent,
      }));
      editUserData({
        ...currentUser,
        [toEdit]: editInputContent,
      });
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
      {showDeleteConfirmation && (
        <>
          <Overlay handleClose={toggleModal} />
          <ConfirmModal handleClose={toggleModal} handleDelete={handleDelete} />
        </>
      )}

      <MainHeader>Hello, {currentUser.fullName}</MainHeader>
      <div>
        <UserImg alt="You profile image" src="/default_user_img.png" />
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
          {showPassword ? (
            <FlexRowContainer>
              <PasswordText>{currentUser.password}</PasswordText>
              <ShowInfoBtn
                handleClick={toggleShowPass}
                isShowing={showPassword}
              />
            </FlexRowContainer>
          ) : (
            <FlexRowContainer>
              <PasswordDotsContainer length={currentUser.password.length} />
              <ShowInfoBtn
                handleClick={toggleShowPass}
                isShowing={showPassword}
              />
            </FlexRowContainer>
          )}
        </InfoRow>
        <InfoRow>
          <></>
          <BoldSpan>Change Password: </BoldSpan>
          <GrayButton
            contentText="Change"
            handleClick={() => toggleEditMode("password")}
          />
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
          <GrayButton
            contentText="Change"
            handleClick={() => toggleEditMode("phoneNumber")}
          />
        </InfoRow>
        <InfoRow>
          <BoldSpan>Change Country: </BoldSpan>
          <GrayButton
            contentText="Change"
            handleClick={() => toggleEditMode("country")}
          />
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

              <EditBtn onClick={handleEdit}>Edit</EditBtn>
            </InputContainer>
            {editError !== "" && (
              <FormErrorMsg errorMsg={editError}></FormErrorMsg>
            )}
          </div>
        )}
        <DetailsCategoryHeader>Other: </DetailsCategoryHeader>
        <StyledHr />
        <TwoColumnGrid>
          <BoldSpan>Log Out: </BoldSpan>
          <GrayButton
            contentText="Log Out"
            padding=".5rem 2rem"
            width="100%"
            handleClick={handleLogout}
          />
        </TwoColumnGrid>
        <TwoColumnGrid>
          <BoldSpan>Delete this Account: </BoldSpan>
          <GrayButton
            contentText="Delete Account"
            padding=".5rem 2rem"
            width="100%"
            handleClick={toggleModal}
          />
        </TwoColumnGrid>
        <TwoColumnGrid>
          <BoldSpan>Your Shopping Cart: </BoldSpan>
          <GrayButton
            contentText="Shopping Cart"
            padding=".5rem 2rem"
            width="100%"
            handleClick={() => navigate("/shopping-cart")}
          />
        </TwoColumnGrid>
        <TwoColumnGrid>
          <BoldSpan>Your Orders History: </BoldSpan>
          <GrayButton
            contentText="History"
            padding=".5rem 2rem"
            width="100%"
            handleClick={() => navigate("/orders-history")}
          />
        </TwoColumnGrid>
      </div>
    </Container>
  );
}
