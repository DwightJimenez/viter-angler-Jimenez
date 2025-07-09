import React from "react";
import Cardtips from "../../../partials/Cardtips";

const Tips = () => {
  return (
    <>
      {" "}
      {/* Tips Section */}
      <section id='tips' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-4 text-gray-800'>
            Fishing Tips & Techniques
          </h2>
          <p className='text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Learn from the experts to improve your fishing skills
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Cardtips
              title={"Time Your Fishing"}
              description={
                "Fish are most active during dawn and dusk. Plan your trips around these times for better results."
              }
              emoji={"⏱️"}
              time={"Best times: 1 hour before/after sunrise/sunset"}
            />
            <Cardtips
              title={"Match the Hatch"}
              description={
                "Use lures and flies that resemble the natural food sources in the water you're fishing."
              }
              emoji={"👀"}
              time={"Observe insects and baitfish in the area"}
            />

            <Cardtips
              title={"Proper Knot Tying"}
              description={
                "Learn essential fishing knots like the improved clinch knot and palomar knot to prevent losing fish."
              }
              emoji={"🎀"}
              time={"Practice at home before your trip"}
            />
            <Cardtips
              title={"Weather Awareness"}
              description={
                "Fish behavior changes with weather patterns. Overcast days often produce better results than bright sunny days."
              }
              emoji={"⛅"}
              time={"Check forecasts and barometric pressure"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tips;
