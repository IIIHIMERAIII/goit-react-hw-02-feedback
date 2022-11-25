import { Statistic } from "./feedback/statistic";
import { Buttons } from "./feedback/buttons";

export const App = () => {
  return (
    <div >
      <h1>Please leave feedback</h1>
      <Buttons/>
      <h2>Statistic</h2>
      <Statistic />
    </div>
  );
};
