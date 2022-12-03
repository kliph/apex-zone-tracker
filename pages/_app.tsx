import styled from "styled-components";
import "../public/assets/reset.css";

const Layout = styled.div`
  margin: 0;
  color: #eee;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.25;
  background-color: #223;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
