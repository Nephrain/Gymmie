import { redirect } from "next/navigation";

function Page({ params } : { params: { id: string } }) {
  redirect(`/user/${params.id}/profile`); 
}

export default Page;