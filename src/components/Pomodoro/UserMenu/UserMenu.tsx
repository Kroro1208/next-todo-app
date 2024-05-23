"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Avatar, AvatarImage } from "@/components/ui/avatar"
import useLocalStorage from "use-local-storage";
import { PomodoroSettings } from "@/lib/settings";
import { useForm, Controller } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { useEffect } from "react";


const defaultValue: PomodoroSettings = {
    name: "User",
    volume: 0.2,
    avatarURL: "",
    playList: 'https://www.youtube.com/watch?v=2iIIzVfNlRk',
};
  

const UserMenu = () => {
    const [ settings, setSettings ] = useLocalStorage<PomodoroSettings>('pomodoro-music', defaultValue );
    const form = useForm<PomodoroSettings>({
        defaultValues: settings || defaultValue
    });

    useEffect(() => {
        form.reset(settings);
      }, [settings, form]);

    const onSubmit = (data: PomodoroSettings) => {
        setSettings(data);
    }

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
                <Avatar>
                    < AvatarImage src="/hacker.png" />
                </Avatar>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
            <Form {...form}>
                <form className="space-y-3" action="" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                    name="name"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <Label>名前</Label>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <FormField
                    name="avatarURL"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <Label>アバター画像</Label>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <FormField
                    name="volume"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <Label>音量</Label>
                            <FormControl>
                                <Input type="number" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <Button>保存</Button>
                </form>
            </Form>
        </PopoverContent>
    </Popover>
  )
}

export default UserMenu
