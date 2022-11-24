import { PodsBlock } from "./styles";
import PodContainer from "./Pods";

const ContainerPods = ({ podList, contentType }) => {
  const pods = podList.filter((pod) => pod.system.type !== contentType);

  return (
    <PodsBlock>
      {pods
        .sort((a, b) => {
          const aTostring = a.system.name.toLowerCase();
          const bTostring = b.system.name.toLowerCase();

          if (aTostring < bTostring) return -1;
          if (aTostring > bTostring) return 1;
          return 0;
        })
        .map((pod, index) => {
          return <PodContainer key={index} {...pod} />;
        })}
    </PodsBlock>
  );
};

export default ContainerPods;
