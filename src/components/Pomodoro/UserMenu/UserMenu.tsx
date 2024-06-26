"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Avatar, AvatarImage } from "@/components/ui/avatar"
  import useLocalStorageState from 'use-local-storage-state'
  import { PomodoroSettings } from "@/lib/settings";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";


const defaultValue: PomodoroSettings = {
    name: "User",
    volume: 0.2,
    avatarURL: "avatarURL",
    playList: 'https://www.youtube.com/watch?v=2iIIzVfNlRk',
};

const UserMenu = () => {
    const [ settings, setSettings ] = useLocalStorageState<PomodoroSettings>('pomodoro-music', {defaultValue} );
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
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            form.setValue("avatarURL", reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full ring-offset-2 ring-2">
                <Avatar>
                    <AvatarImage src={settings.avatarURL || "/hacker.png"}/>
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
                                <Input type="file" onChange={handleFileChange}/>
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
