interface HeadingProps {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
}

export function Heading({ children, className, as = 'h1' }: HeadingProps) {
  const As = as;
  return <As className={'text-5xl ' + className}>{children}</As>;
}
