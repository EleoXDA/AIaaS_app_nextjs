"use client"

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";

const MobileSidebar = () => {
  return (
    <Sheet>
      <Button asChild variant="ghost" size="icon" className="md:hidden">
        <SheetTrigger>
          <Menu className="md:hidden" />
        </SheetTrigger>
      </Button>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar;