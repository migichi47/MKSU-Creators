export function CategoryCard(props) {
  const { name, image, setClickedCategory, setFormData, formData } = props;
  return (
    <div
      className="category-card js-category-card"
      onClick={() => {
        setClickedCategory("true");
        localStorage.setItem("clickedCategory", JSON.stringify("true"));

        setFormData({ ...formData, category: name });
        localStorage.setItem(
          "formData",
          JSON.stringify({ ...formData, category: name }),
        );
      }}
    >
      <img src={image} alt="image" />
      <div>{name}</div>
    </div>
  );
}
