import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className="flex-1">
      <section className="h-full flex flex-col">
        {/* <ExamplesNav /> */}
        <div className="flex-1 overflow-hidden rounded-[0.5rem] border bg-background shadow">
          {children}
        </div>
      </section>
    </div>
  );
}
