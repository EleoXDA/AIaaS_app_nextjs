"use client"

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({
  apiLimitCount
}: MobileSidebarProps) => {
  return (
    <Sheet>
      <Button asChild variant="ghost" size="icon" className="md:hidden">
        <SheetTrigger>
          <Menu className="md:hidden" />
        </SheetTrigger>
      </Button>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar;