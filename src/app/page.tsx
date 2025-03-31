import {GET} from "@/app/api/articles/route";


export default async function Home() {

    const data = await GET()

  return (
    <div>
        It works now
    </div>
  );
}
