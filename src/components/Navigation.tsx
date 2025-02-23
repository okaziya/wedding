import { MobileNavigation } from "./navigation/MobileNavigation";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
export const Navigation = () => {
  return <div className="w-full bg-[#FAF7F1] fixed top-0 z-50 border-b">
      <div className="mx-auto max-w-screen-xl p-4 px-[25px] py-[15px]">
        <MobileNavigation />
        <DesktopNavigation />
      </div>
    </div>;
};