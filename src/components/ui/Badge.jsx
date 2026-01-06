export function Badge({ children, variant, className }) {
  return (
    <span className={`${variant === "outline" ? "border" : ""} ${className}`}>
      {children}
    </span>
  );
}
