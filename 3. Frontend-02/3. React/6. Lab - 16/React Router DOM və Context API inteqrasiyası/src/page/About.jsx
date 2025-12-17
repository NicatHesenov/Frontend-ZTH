import { useSettings } from "../context/useSetting";

function About() {
  const { words } = useSettings();
  return (
    <div>
      <h1>{words.about}</h1>
      <h1>{words.title}</h1>
    </div>
  );
}

export default About;
