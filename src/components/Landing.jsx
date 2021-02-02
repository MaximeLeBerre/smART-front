import Artists from "./Artists";
import Works from "./Works";

function Landing() {
  return (
    <>
      <div class="container">
          <div class="blocHorizontal">
            <div class="slide ">
            <Artists />
            </div>
            <div class="slide ">
              <Works />
            </div>
          </div>
        </div>
    </>
  );
}

export default Landing;