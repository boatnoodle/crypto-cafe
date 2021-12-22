import { LandingPageScreen } from "../containers/lading-page-screen";
import { LandingPageLayout } from "../layout/LandingPageLayout";

const Home = () => {
  return <LandingPageScreen />;
};

Home.Layout = LandingPageLayout as any;

export default Home;
