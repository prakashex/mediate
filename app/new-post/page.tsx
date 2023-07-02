import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="px-6 pt-24 lg:px-8">
      <div className="mx-auto mx-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Create Your Post
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Share your "Knowledge" with the world.
        </p>
      </div>
      <form action="" className="mx-auto max-w-xl mt-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select required name="category">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Catergory" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input required type="text" name="title" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea required id="content" rows={10} name="content" />
        </div>
        <Button type="submit" className="w-full">
          Submit Post
        </Button>
      </form>
    </div>
  );
}
