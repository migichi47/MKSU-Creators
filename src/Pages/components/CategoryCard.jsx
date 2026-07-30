
export function CategoryCard(props) {
  const { name, image, setClickedCategory } = props;
  return (
    <div
      className="category-card js-category-card"
      onClick={() => {
        setClickedCategory("true");
        localStorage.setItem("clickedCategory", JSON.stringify("true"));
      }}
    >
      <img src={image} alt="image" />
      <div>{name}</div>
    </div>
  );
}
