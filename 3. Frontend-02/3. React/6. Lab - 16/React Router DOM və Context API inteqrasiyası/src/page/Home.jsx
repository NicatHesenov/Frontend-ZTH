import { useSettings } from "../context/useSetting";
function Home() {
  const { words } = useSettings();
  return (
    <div>
      <h1>{words?.home}</h1>
      <h1>{words?.title}</h1>
    </div>
  );
}

export default Home;
