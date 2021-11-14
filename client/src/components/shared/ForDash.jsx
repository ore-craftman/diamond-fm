import AirProgrammes from "./AirProgrammes";
import Posts from "./Posts";

const ForDash = () => {
  return (
    <>
      <Posts postLimit={4} />
      <AirProgrammes postLimit={2} />
    </>
  );
};

export default ForDash;
