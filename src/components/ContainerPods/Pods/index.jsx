import React from "react";
import { Pod, ImgPod, TextPod } from "./styles";

const PodContainer = (props) => {
  return (
    <Pod>
      <ImgPod src={props.elements.imagen.value[0].url} />
      <TextPod>{props.elements.texto.value}</TextPod>
      <TextPod>{props.elements.bajada.value}</TextPod>
    </Pod>
  );
};

export default PodContainer;
