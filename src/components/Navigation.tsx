import { MobileNavigation } from "./navigation/MobileNavigation";
import { DesktopNavigation } from "./navigation/DesktopNavigation";

export const Navigation = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="mx-auto max-w-screen-xl p-4">
        <MobileNavigation />
        <DesktopNavigation />
      </div>
    </div>
  );
};
