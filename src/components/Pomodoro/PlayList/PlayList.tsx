"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { PomodoroSettings } from "@/lib/settings";
import { ListVideo } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useLocalStorageState from 'use-local-storage-state';
import { Label } from "@/components/ui/label";

const defaultValue: PomodoroSettings = {
  name: "User",
  volume: 0.2,
  avatarURL: "",
  playList: 'https://www.youtube.com/watch?v=2iIIzVfNlRk',
};
  

const PlayList = () => {
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
            <Button size="icon" variant="ghost">
                <ListVideo size={26} />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
        <Form {...form}>
                <form className="space-y-3" action="" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                    name="playList"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <Label>プレイリスト</Label>
                            <FormControl>
                                <Textarea {...field}/>
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

export default PlayList
