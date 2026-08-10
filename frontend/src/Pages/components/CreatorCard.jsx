export function CreatorCard({ creator }) {
  const { name, image, followers, year, category } = creator;

  return (
    <div key={`${name}-${category}`}>
      <img
        src={image ? image : "default.png"}
        alt="creator image"
        className="h-100 w-80"
      />
      <div>
        <span>{name}</span>
        <span>{followers}</span>
        <span>Year {year}</span>
      </div>
    </div>
  );
}
