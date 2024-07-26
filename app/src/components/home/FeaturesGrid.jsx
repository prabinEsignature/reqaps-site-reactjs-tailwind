import { useEffect, useRef } from "react";
import { FEATURES_GRID_DATA } from "../../data/mockData";

const FeaturesGrid = () => {
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

  const featuredGridSettings = [
    {
      cardView: "",
      cardImgPadding: "px-5 pt-5",
      cardContentPadding: "px-6 pb-10",
      cardColSpan: "col-span-1",
      cardFlexCol: "flex-col",
    },
    {
      cardView: "",
      cardImgPadding: "px-12 pt-6",
      cardContentPadding: "px-6 pb-10",
      cardColSpan: "col-span-2",
      cardFlexCol: "flex-col",
    },
    {
      cardView: "",
      cardImgPadding: "pt-5 px-7",
      cardContentPadding: "px-4 pb-9",
      cardColSpan: "col-span-1",
      cardFlexCol: "flex-col",
    },
    {
      cardView: "",
      cardImgPadding: "",
      cardContentPadding: "px-4 pt-7",
      cardColSpan: "col-span-1",
      cardFlexCol: "flex-col-reverse",
    },
    {
      cardView: "",
      cardImgPadding: "pt-8 px-12",
      cardContentPadding: "px-4 pb-9",
      cardColSpan: "col-span-1",
      cardFlexCol: "flex-col",
    },
  ];

  return (
    <section className="py-[65px] text-white">
      <h2 className="text-center text-3xl font-semibold font-montserrat max-w-[986px] mx-auto">
        Never waste more than a day handing over design requirements with these
        features:
      </h2>
      <div className="max-w-[1200px] px-4 mx-auto mt-[65px]">
        <div className="grid grid-cols-3 gap-10 mt-[65px]">
          {FEATURES_GRID_DATA?.map(
            ({ id, title, description, image }, index) => {
              return (
                <div
                  key={id}
                  className={`bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] min-h-[444px] ${featuredGridSettings[index].cardColSpan}`}
                  ref={(el) => (gradientRefs.current[index] = el)}
                >
                  <div
                    className={`rounded-3xl overflow-hidden bg-jet flex ${featuredGridSettings[index].cardFlexCol} justify-between items-center h-full gap-y-[26px]`}
                  >
                    <img
                      className={`${featuredGridSettings[index].cardImgPadding}`}
                      src={image}
                      alt=""
                    />
                    <div
                      className={`gap-y-2 flex flex-col items-center text-center ${featuredGridSettings[index].cardContentPadding}`}
                    >
                      <h4 className="text-2xl text-white font-montserrat text-center font-semibold">
                        {title}
                      </h4>
                      <p className="text-white text-base">{description}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
