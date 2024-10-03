import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/logo-stage.png";
import { useEffect, useState } from "react";

const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContainerNavbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: 1px solid #e9e8d4;
  display: flex;
  background-color: #e9e8d4;
  padding: 5px 10px;
  justify-content: space-between;
`;

const IconMenu = styled(IoIosMenu)`
  font-size: 1.8rem;
  color: #333;
  align-self: center;
`;

const IconProfile = styled(CgProfile)`
  font-size: 1.8rem;
  color: #333;
  align-self: center;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const MainLogo = styled.img`
  height: 40px;
  max-width: 100%;
  display: flex;
  align-self: center;
`;

const Menu = styled.ul`
  list-style: none;
  overflow: hidden;
  height: 0;
  height: ${({ isOpen }) => (isOpen ? "125px" : "0")};
  transition: height 1s ease;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  background-color: #666;
  border: 1px solid #333;
  height: 30px;
  /* overflow: hidden; */
  /* visibility: hidden; */
`;

export default function MenuExpansivel() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    console.log(isMenu), [];
  });

  return (
    <ContainerApp>
      <ContainerNavbar>
        <IconMenu onClick={handleMenu} />
        <ImageWrapper>
          <MainLogo src={logo} alt="main-logo" />
        </ImageWrapper>
        <IconProfile />
      </ContainerNavbar>

      <Menu isOpen={isMenu}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
      </Menu>
    </ContainerApp>
  );
}
