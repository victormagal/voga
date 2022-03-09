export function Container({ children, newClasses }) {
  return (
    <div className={`${newClasses && newClasses} container grid grid-cols-12 gap-4 mx-auto`}>
      {children}
    </div>
  );
}
