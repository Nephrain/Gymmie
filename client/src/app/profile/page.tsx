import { redirect } from "next/navigation";

function Page() {
  const id = 1;
  redirect(`/user/${id}/profile`);
}

export default Page;