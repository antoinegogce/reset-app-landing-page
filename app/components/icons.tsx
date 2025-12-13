import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Title({ title }: { title?: string }) {
  if (!title) return null;
  return <title>{title}</title>;
}

export function IconLock(props: IconProps) {
  const { title = "Lock", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <Title title={title} />
      <path d="M7.5 11V8.6A4.5 4.5 0 0 1 12 4.1a4.5 4.5 0 0 1 4.5 4.5V11" />
      <path d="M6.8 11h10.4c.9 0 1.6.7 1.6 1.6v6.6c0 .9-.7 1.6-1.6 1.6H6.8c-.9 0-1.6-.7-1.6-1.6v-6.6c0-.9.7-1.6 1.6-1.6Z" />
    </svg>
  );
}

export function IconNfc(props: IconProps) {
  const { title = "NFC", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <Title title={title} />
      <path d="M8 7.2v9.6" />
      <path d="M12 6.3c2.6 1.2 4.4 3.8 4.4 6.7S14.6 18.5 12 19.7" />
      <path d="M10.8 8.3c1.7.8 2.9 2.5 2.9 4.7s-1.2 3.9-2.9 4.7" />
      <path d="M6.3 9.4c-1 .9-1.7 2.2-1.7 3.6s.6 2.7 1.7 3.6" />
    </svg>
  );
}

export function IconChart(props: IconProps) {
  const { title = "Chart", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <Title title={title} />
      <path d="M4.5 19.5V4.5" />
      <path d="M4.5 19.5h15" />
      <path d="M7.5 16.5v-5" />
      <path d="M11 16.5V8.8" />
      <path d="M14.5 16.5v-3.8" />
      <path d="M18 16.5V6.8" />
    </svg>
  );
}

export function IconQr(props: IconProps) {
  const { title = "QR", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <Title title={title} />
      <path d="M4.8 4.8h5.2v5.2H4.8z" />
      <path d="M14 4.8h5.2v5.2H14z" />
      <path d="M4.8 14h5.2v5.2H4.8z" />
      <path d="M14 14h2.6v2.6H14z" />
      <path d="M16.6 16.6h2.6v2.6h-2.6z" />
      <path d="M14 19.2h2.6" />
      <path d="M19.2 14v2.6" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  const { title = "Users", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <Title title={title} />
      <path d="M16.8 19.2c-.8-2.2-2.5-3.3-4.8-3.3s-4 .9-4.8 3.3" />
      <path d="M12 12.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M18.8 19.2c-.5-1.5-1.5-2.4-3-2.8" />
      <path d="M16.5 7.1a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}


