export function DevTools(props) {
  const { setSelectedCategories } = props;
  return (
    <button
      className="dev-tools dev-tools-join2"
      onClick={() => {
        localStorage.clear();
        setSelectedCategories && setSelectedCategories([]);
      }}
    >
      Dev tools
    </button>
  );
}
