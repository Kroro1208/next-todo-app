"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Avatar, AvatarImage } from "@/components/ui/avatar"
import useLocalStorageState from "use-local-storage";
import { PomodoroSettings } from "@/lib/settings";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";


const defaultValue: PomodoroSettings = {
    name: "User",
    volume: 0.2,
    avatarURL: "",
    playList: 'https://www.youtube.com/watch?v=2iIIzVfNlRk',
};

const UserMenu = () => {
    const [ settings, setSettings ] = useLocalStorageState<PomodoroSettings>('pomodoro-music', defaultValue );
    const form = useForm<PomodoroSettings>({
        defaultValues: settings || defaultValue
    });

    const [ message, setMessage ] = useState<string>("");

    useEffect(() => {
        form.reset(settings);
      }, [settings, form]);

    const onSubmit = (data: PomodoroSettings) => {
        setSettings(data);
        setMessage("保存されました");
        setTimeout(() => setMessage(""), 3000);
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
                                <Input type="number" step="0.1" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <Button type="submit">保存</Button>
                </form>
            </Form>
            {message && <p className="mt-2 text-green-600">{message}</p>}
        </PopoverContent>
    </Popover>
  )
}

export default UserMenu
