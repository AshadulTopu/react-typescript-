type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}
