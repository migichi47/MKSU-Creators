export function DevTools(props) {
  const { setSelectedCategories } = props;
  return (
    <button
      className="dev-tools"
      onClick={() => {
        localStorage.clear();
        setSelectedCategories && setSelectedCategories([]);
      }}
    >
      Dev tools
    </button>
  );
}
