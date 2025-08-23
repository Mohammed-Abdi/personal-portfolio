import type React from "react";
import Arrow from "../../assets/icons/Arrow";
import Reload from "../../assets/icons/Reload";
import User from "../../assets/icons/User";
import More from "../../assets/icons/More";
import Plus from "../../assets/icons/Plus";
import Spinner from "../../assets/animations/Spinner";
import { useImageLoader } from "../../hooks/useImageLoader";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import TabOne from "../../assets/icons/TabOne";
import Adjust from "../../assets/icons/Adjust";
import NavArrow from "../../assets/icons/NavArrow";

const ProjectCard: React.FC = () => {
  // src place holder
  const src =
    "https://dwehtquozaiqybsigtpb.supabase.co/storage/v1/object/public/projects/ddustack-desktop-preview.webp";
  const loaded = useImageLoader(src);
  const isMobile = useMediaQuery("mobile");

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
        className="absolute inset-0 -top-0.5 left-0 -z-10 opacity-50"
        style={{
          background:
            "linear-gradient(to right, transparent, white, transparent)",
        }}
      ></div>

      <NavArrow className="absolute right-5 top-7 md:right-10 md:top-12 rotate-90 opacity-70" />

      {/* Project Header */}
      <div>
        <h1 className="text-xl font-medium">Project name</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Project Description goes here
        </p>
      </div>

      {/* Mac Tab */}
      <div className="border border-b-0 border-[var(--color-border)] rounded-t-xl overflow-hidden">
        <div className="flex flex-col">
          <div
            className={`h-1.5 w-full bg-[var(--color-bg-${
              isMobile ? "tertiary" : "secondary"
            })]`}
          ></div>
          {!isMobile && (
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
          )}
        </div>

        <div className="flex gap-5 items-center bg-[var(--color-bg-tertiary)] h-10 px-2.5 py-1.5">
          {!isMobile && (
            <div className="flex gap-2.5 items-center opacity-70">
              <Arrow className="w-4 h-4" />
              <Arrow className="w-4 h-4 rotate-180" />
              <Reload className="w-4 h-4" />
            </div>
          )}

          <div className="flex gap-2.5 items-center px-2.5 h-full w-full rounded-full bg-[var(--color-bg-secondary)]">
            <Adjust className="w-4 h-4 opacity-70" />
            <span className="text-xs text-[var(--color-text-muted)]">
              vercel.com
            </span>
          </div>

          <div
            className={`flex gap-${isMobile ? 5 : 2.5} items-center opacity-70`}
          >
            {isMobile && <Plus className="w-4 h-4" />}
            {isMobile ? (
              <TabOne className="w-4 h-4" />
            ) : (
              <User className="w-4 h-4" />
            )}
            <More className="w-4 h-4 " />
          </div>
        </div>
        {isMobile && (
          <div className="h-1.5 w-full bg-[var(--color-bg-tertiary)]"></div>
        )}
        <div
          className="flex justify-center items-center bg-[var(--color-bg-primary)]"
          style={{ aspectRatio: "16 / 9" }}
        >
          {loaded ? (
            // incase i want live demo
            // <iframe
            //   src="https://ddustack.vercel.app/"
            //   className="w-full h-full"
            //   loading="lazy"
            //   title="Embedded Website"
            // />

            <img src={src} alt="preview" loading="lazy" className="w-full" />
          ) : (
            <div className="flex flex-col items-center gap-2.5">
              <Spinner />
              <p className="text-sm text-[var(--color-text-muted)]">
                One moment please...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
