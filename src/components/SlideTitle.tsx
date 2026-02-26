interface SlideTitleProps {
  children: React.ReactNode;
}

const SlideTitle = ({ children }: SlideTitleProps) => (
  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
    {children}
  </h2>
);

export default SlideTitle;
