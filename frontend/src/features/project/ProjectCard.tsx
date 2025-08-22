import type React from "react";
import Arrow from "../../assets/icons/Arrow";
import Reload from "../../assets/icons/Reload";
import User from "../../assets/icons/User";
import More from "../../assets/icons/More";
import Plus from "../../assets/icons/Plus";
import Spinner from "../../assets/animations/Spinner";
import { useImageLoader } from "../../hooks/useImageLoader";

const ProjectCard: React.FC = () => {
  // src place holder
  const src =
    "https://api.microlink.io/?url=https://vercel.com&screenshot=true&embed=screenshot.url&colorScheme=dark";
  const loaded = useImageLoader(src);
  return (
    <div
      className="flex flex-col gap-5 w-full max-w-4xl relative p-5 pb-0 md:pb-0 md:p-10 rounded-xl md:rounded-2xl outline outline-[var(--color-bg-overlay-20)]"
      style={{
        aspectRatio: "13 / 9",
        background:
          "linear-gradient(var(--color-bg-secondary), var(--color-bg-primary))",
      }}
    >
      {/* glowing border */}
      <div
        className="absolute w-full h-full -top-0.5 left-0 -z-10 opacity-50"
        style={{
          background:
            "linear-gradient(to right, transparent, white, transparent)",
        }}
      ></div>

      {/* Project Header */}
      <div>
        <h1 className="text-xl font-medium">Project name</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Project Description goes here
        </p>
      </div>

      {/* Mac Tab */}
      <div className="border border-b-0 border-[var(--color-border)] h-full rounded-t-xl overflow-hidden">
        <div className="flex flex-col">
          <div className="h-1.5 w-full bg-[var(--color-bg-secondary)]"></div>
          <div
            className="flex justify-between items-stretch"
            style={{
              background:
                "linear-gradient(to top, var(--color-bg-tertiary) ,var(--color-bg-secondary))",
            }}
          >
            <div className="flex items-center justify-center gap-2 w-fit py-2.5 px-5 bg-[var(--color-bg-secondary)] rounded-br-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F45D5C]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEB82B]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#26C540]"></div>
            </div>

            <div className="flex items-center w-50 rounded-lg px-2 bg-[var(--color-bg-tertiary)] rounded-bl-lg"></div>

            <div className="flex items-center w-full px-2 bg-[var(--color-bg-secondary)] rounded-bl-lg">
              <Plus className="w-4 h-4 opacity-70" />
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center bg-[var(--color-bg-tertiary)] h-10 px-2.5 py-1.5">
          <div className="flex gap-2.5 items-center opacity-70">
            <Arrow className="w-4 h-4" />
            <Arrow className="w-4 h-4 rotate-180" />
            <Reload className="w-4 h-4" />
          </div>
          <div className="h-full w-full rounded-full bg-[var(--color-bg-secondary)]"></div>
          <div className="flex gap-2.5 items-center opacity-70">
            <User className="w-4 h-4" />
            <More className="w-4 h-4 " />
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          {loaded ? (
            <img
              src={src}
              alt="preview"
              loading="lazy"
              className="w-full h-full"
            />
          ) : (
            <div className="flex flex-col items-center gap-2.5 -translate-y-10">
              <Spinner />
              <p>One moment please...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
