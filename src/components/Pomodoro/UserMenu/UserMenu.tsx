"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  

const UserMenu = () => {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
                <Avatar>
                    < AvatarImage src="/hacker.png" />
                </Avatar>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80"></PopoverContent>
    </Popover>
  )
}

export default UserMenu
