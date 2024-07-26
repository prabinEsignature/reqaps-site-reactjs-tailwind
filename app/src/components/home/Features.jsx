import { useEffect, useRef } from "react";
import { FEATURES_DATA } from "../../data/mockData";

const Features = () => {
  const gradientRefs = useRef([]);

  useEffect(() => {
    const updateGradients = () => {
      gradientRefs.current.forEach((html, index) => {
        if (html) {
          const angle = (performance.now() / 10 + index * 120) % 360;
          html.style.backgroundImage = `linear-gradient(${angle}deg, rgba(241,178,168,1) 0%, rgba(236,87,168,1) 49%, rgba(91,90,247,1) 100%)`;
        }
      });
      requestAnimationFrame(updateGradients);
    };

    requestAnimationFrame(updateGradients);

    return () => {};
  }, []);

  return (
    <section className="max-w-[1200px] px-4 mx-auto py-[65px]">
      <div>
        <h3 className="text-center text-white font-montserrat text-xl font-semibold">
          Say goodbye to manual requirement building. Let Reqops speed things
          up.
        </h3>
        <div className="grid grid-cols-3 gap-10 mt-[65px]">
          {FEATURES_DATA?.map(({ id, title, image }, index) => {
            return (
              <div
                key={id}
                className="bg-grad-theme-135 rounded-3xl p-[3px] min-h-[444px]"
                ref={(el) => (gradientRefs.current[index] = el)}
              >
                <div className="rounded-3xl bg-jet flex flex-col justify-between items-center h-full">
                  <h4 className="mt-8 mb-4 text-2xl text-white font-montserrat text-center font-semibold">
                    {title}
                  </h4>
                  <img className={`px-4 ${index === 1 && "mb-5"} ${index === 2 && "mb-8"}`} src={image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
