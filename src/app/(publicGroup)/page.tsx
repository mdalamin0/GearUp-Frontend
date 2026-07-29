import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="container">
      <h2 className="heading">Hello world</h2>
      <Button variant={"outline"}>Click me</Button>
    </div>
  );
}
