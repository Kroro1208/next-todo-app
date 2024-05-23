"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { ListVideo } from "lucide-react";
  

const PlayList = () => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size="icon" variant="ghost">
                <ListVideo size={26} />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80"></PopoverContent>
    </Popover>
  )
}

export default PlayList
