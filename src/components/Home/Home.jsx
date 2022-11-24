import React, { useEffect, useState } from "react";
import HeaderConmponent from "../Header";
import MainBanner from "../MainBanner";
import ContainerPods from "../ContainerPods";
import { Main, Container } from "./styles";
import FooterContainer from "../Footer";
import { getItems } from "../../serveces/api";

const contentType = "slide";

const Home = () => {
  const [podList, setPodList] = useState([]);

  const getPods = async () => {
    const { items } = await getItems();
    setPodList(items);
  };

  useEffect(() => {
    getPods();
  }, []);

  const defaultProps = {
    podList,
    contentType,
  };

  return (
    <Main>
      <Container>
        <HeaderConmponent />
        <MainBanner {...defaultProps} />
        <ContainerPods {...defaultProps} />
        <FooterContainer />
      </Container>
    </Main>
  );
};

export default Home;
