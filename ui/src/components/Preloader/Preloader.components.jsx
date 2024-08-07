import {
  LoaderContainer,
  LoaderDot,
  LoaderItem,
  LoaderText,
} from "./Preloader.styles";

export default function Preloader() {
  const dots = [1, 2, 3, 4, 5, 6];
  return (
    <LoaderContainer>
      <LoaderItem>
        {dots.map((i) => <LoaderDot key={i} />)}
        <LoaderText />
      </LoaderItem>
    </LoaderContainer>
  );
}
