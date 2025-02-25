import ReferBenefits from "../components/benefits/ReferBenefits";
import Refer from "../components/refer/Refer";
import ReferHero from "../components/refer/ReferHero";
import Support from "./Support";
import FAQs from "./FAQs";

function Home() {
  return (
    <div className='App'>
      <ReferHero />
      <Refer />
      <ReferBenefits />
      <FAQs />
      <Support />
    </div>
  );
}

export default Home;
