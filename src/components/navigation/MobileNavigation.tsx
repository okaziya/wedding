import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItems } from "./MenuItems";

export const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        {({ open }) => (
          <>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <MenuItems onNavigate={() => open(false)} />
              </nav>
            </SheetContent>
          </>
        )}
      </Sheet>
    </div>
  );
};