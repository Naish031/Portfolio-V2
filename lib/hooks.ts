import { useActiveSectionContext } from "@/context/active-section-provider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectioName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectioName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectioName]);

  return { ref, inView };
}
