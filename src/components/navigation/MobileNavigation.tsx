import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { MenuItems } from "./MenuItems";
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.25 5C9.25 4.58579 9.58579 4.25 10 4.25H20C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41421 20.4142 5.75 20 5.75H10C9.58579 5.75 9.25 5.41421 9.25 5Z" fill="#B14B57" />
    <path d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z" fill="#B14B57" />
    <path d="M4 18.25C3.58579 18.25 3.25 18.5858 3.25 19C3.25 19.4142 3.58579 19.75 4 19.75H14C14.4142 19.75 14.75 19.4142 14.75 19C14.75 18.5858 14.4142 18.25 14 18.25H4Z" fill="#B14B57" />
  </svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z" fill="#B14B57" />
  </svg>;
export const MobileNavigation = () => {
  return <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-[#B14B57] p-0 w-fit">
            <span className="font-[Merriweather] mr-2">MENU</span>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#FAF7F1] border-none py-[50px]">
          <nav className="flex flex-col gap-4 font-[Merriweather] text-[#B14B57] font-bold text-[14px]">
            <MenuItems onNavigate={() => {}} variant="mobile" />
          </nav>
          <SheetClose asChild className="absolute right-6 top-[15px] text-[#B14B57] hover:opacity-80">
            <button>
              <CloseIcon />
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>;
};