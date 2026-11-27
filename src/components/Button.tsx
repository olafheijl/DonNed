import type { ComponentPropsWithRef } from 'react';

type ButtonProps = { variant?: 'primary' | 'secondary' } & (
  | (ComponentPropsWithRef<'a'> & { href: string })
  | (ComponentPropsWithRef<'button'> & { href?: never })
);

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = ['button', variant, className].filter(Boolean).join(' ');
  const content = (
    <span className="button-label">
      <svg className="button-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path d="M3.5 3v6.5h8.75m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );

  if (props.href !== undefined) {
    return <a {...props} className={classes}>{content}</a>;
  }

  return <button type="button" {...props} className={classes}>{content}</button>;
}
