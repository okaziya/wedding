
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItems } from "./MenuItems";

export const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-[#B14B57]">
            <span className="font-[Merriweather] mr-2">MENU</span>
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#FAF7F1] border-none">
          <nav className="flex flex-col gap-4 font-[Merriweather] text-[#B14B57] font-bold text-[14px] uppercase">
            <MenuItems onNavigate={() => {}} variant="mobile" />
          </nav>
          <SheetTrigger className="absolute right-4 top-4">
            <X className="h-6 w-6 text-[#B14B57]" />
          </SheetTrigger>
        </SheetContent>
      </Sheet>
    </div>
  );
};
