interface RenderIfProps {
  children: React.ReactNode;
  when: boolean;
}

export const RenderIf: React.FC<RenderIfProps> = ({ children, when }) => (when ? children : null);
