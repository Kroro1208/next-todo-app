import SideMenu from "@/components/SideMenu/ SideMenu";

const Mainlayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-200">
        <SideMenu />
      </div>
      <main className="bg-slate-50 flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default Mainlayout
