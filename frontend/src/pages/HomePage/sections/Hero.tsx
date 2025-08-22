import type React from "react";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-5 text-center pt-20">
      <h1 className="text-3xl md:text-6xl max-w-3xl font-medium">
        Crafting Ideas into Scalable Web Experiences
      </h1>
      <p className="max-w-2xl">
        I’m Mohammed, a software engineer who loves blending design, code, and
        problem-solving to build digital products that solve real-world problems
      </p>
      {/* TODO: ADD CTA Button Here */}
      <PrimaryButton label="Get in Touch" />
    </section>
  );
};

export default Hero;
