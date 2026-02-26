import SlideTopBar from "./SlideTopBar";

interface SlideLayoutProps {
  children: React.ReactNode;
  id?: string;
}

const SlideLayout = ({ children, id }: SlideLayoutProps) => (
  <section
    id={id}
    className="min-h-screen w-full flex flex-col bg-background relative"
  >
    <SlideTopBar />
    <div className="flex-1 flex flex-col px-8 md:px-16 py-10">
      {children}
    </div>
    <div className="absolute bottom-4 right-6 text-sm tracking-wide">
      <span className="text-foreground font-semibold">edu</span>
      <span className="text-destructive font-semibold">net</span>
      <span className="text-muted-foreground text-xs ml-0.5">foundation</span>
    </div>
  </section>
);

export default SlideLayout;
