export function CategoryCard(props) {
  const { name, image, setFormData, formData, setStep } = props;
  return (
    <div
      className="category-card js-category-card"
      onClick={() => {
        setFormData({ ...formData, category: name });
        setStep(3);
      }}
    >
      <img src={image} alt="image" />
      <div>{name}</div>
    </div>
  );
}
