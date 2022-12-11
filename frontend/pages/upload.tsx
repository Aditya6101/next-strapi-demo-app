import { getSession } from "next-auth/react";
import UploadForum from "../componets/UploadForum";

export default function Upload() {
  return (
    <div>
      <UploadForum />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
