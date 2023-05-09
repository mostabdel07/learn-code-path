import Head from "next/head";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import SidebarLayout from "@/components/SidebarLayout";

export default function DefaultLayout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarLayout title={title}>{children}</SidebarLayout>
    </>
  );
}
