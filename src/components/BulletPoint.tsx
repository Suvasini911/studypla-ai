interface BulletPointProps {
  children: React.ReactNode;
}

const BulletPoint = ({ children }: BulletPointProps) => (
  <li className="flex items-start gap-3 text-foreground text-lg leading-relaxed">
    <span className="mt-2 h-2.5 w-2.5 rounded-sm bg-primary flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export default BulletPoint;
