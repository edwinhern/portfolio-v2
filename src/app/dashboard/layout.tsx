import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return <main className="flex-1 overflow-hidden">{children}</main>;
}
