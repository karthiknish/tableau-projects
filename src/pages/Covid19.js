import { useRef, useEffect } from "react";
const { tableau } = window;
function Covid19() {
  const ref = useRef(null);
  useEffect(() => {
    initViz();
  }, []);
  const url = "https://public.tableau.com/views/WhoCovid19Analysis/Dashboard1";
  function initViz() {
    new tableau.Viz(ref.current, url);
  }
  return (
    <div>
      Covid 19
      <div ref={ref}></div>
    </div>
  );
}

export default Covid19;
