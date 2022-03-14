export function Container({ children, newClasses }) {
  return (
    <div className={`container grid lg:grid-cols-12 grid-cols-4 gap-4 mx-auto px-4 ${newClasses ? newClasses : ''}`}>
      {children}
    </div>
  );
}
