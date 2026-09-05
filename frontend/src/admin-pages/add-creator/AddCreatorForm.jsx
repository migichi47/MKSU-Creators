import { contentCategories, ContentCategory } from "./ContentCategory";
import { UploadImage } from "./UploadImage";
import { FormInputs } from "./FormInputs";

export function AddCreatorForm() {
  return (
    <div className="border border-tertiary/30 dark:border-neutral/30 px-5 rounded-xl">
      <div className="space-y-4 border-b border-tertiary/30 dark:border-neutral/30 py-10">
        <UploadImage />
        <FormInputs />
        <div className="space-y-2">
          <p className="text-xs">Content Category</p>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 [&>label]:border [&>label]:border-tertiary/30 [&>label]:dark:border-neutral/30 [&>label]:px-2 [&>label]:py-2 [&>label]:rounded-sm [&>label]:hover:bg-primary/5 [&>label]:flex [&>label]:max-w-40 space-x-2 mx-auto">
            {contentCategories.map((category) => (
              <ContentCategory
                key={category.value}
                value={category.value}
                name={category.name}
              />
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
