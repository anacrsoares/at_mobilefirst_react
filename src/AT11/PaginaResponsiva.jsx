import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";

const ContainerPage = styled.div`
  height: 100vh;
  padding: 10px;
  border: 1px solid white;
`;

const ContainerGrid = styled.div`
  position: relative;
  display: grid;
  height: 100%;

  text-align: center;
  grid-template-rows: auto auto 3fr 1fr auto;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "menu menu header"
    "context context context"
    "main main main"
    "ads ads ads"
    "footer footer footer";

  @media (min-width: 768px) {
    grid-template-areas:
      "header header header"
      "menu menu ads"
      "context main ads"
      "context main ads"
      "footer footer footer";
  }
`;

const ContainerMenu = styled.div`
  border: 1px solid red;
  grid-area: menu;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MenuIcon = styled(IoIosMenu)`
  border: 1px solid red;
  height: 100%;
  width: 25px;
  display: flex;
  position: absolute;
  left: 0;
  /* flex: 1; */
  align-self: flex-start;
  cursor: pointer;
  z-index: 2;
`;

const ContainerHeader = styled.div`
  border: 1px solid blue;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerContext = styled.div`
  border: 1px solid rebeccapurple;
  grid-area: context;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerMain = styled.div`
  border: 1px solid green;
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerAds = styled.div`
  border: 1px solid pink;
  grid-area: ads;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerFooter = styled.div`
  border: 1px solid orange;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerMenuExpanded = styled.ul`
  position: absolute;
  list-style: none;
  height: 100%;
  width: 30vw;
  border: 1px solid greenyellow;
  left: ${({ seeMenu }) => (seeMenu ? "0" : "-40vw")};
  transition: left 0.9s ease;
  background-color: #655e5e80;
  padding: 60px 0;
  margin-bottom: 10px;
`;

const Option = styled.li`
  border: 1px solid green;
`;

export default function PaginaResponsiva() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log("clicou");
  };

  useEffect(() => {
    console.log(menuVisible), [menuVisible];
  });

  return (
    <ContainerPage>
      <ContainerGrid>
        <ContainerMenuExpanded seeMenu={menuVisible}>
          <Option>Context Menu</Option>
          <Option>Main Content</Option>
          <Option>Ads</Option>
          <Option>Footer</Option>
        </ContainerMenuExpanded>
        <ContainerMenu>
          <MenuIcon onClick={toggleMenu} /> Global Menu
        </ContainerMenu>

        <ContainerHeader>Header</ContainerHeader>

        <ContainerContext>Context Menu</ContainerContext>

        <ContainerMain>Main Content</ContainerMain>

        <ContainerAds>Ads</ContainerAds>
        <ContainerFooter>Footer</ContainerFooter>
      </ContainerGrid>
    </ContainerPage>
  );
}
