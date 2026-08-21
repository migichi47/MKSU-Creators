import { useContext } from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { AddCreatorContext } from "../AdminContextProvider";
import { contentCategories, ContentCategory } from "./ContentCategory";
import { UploadImage } from "./UploadImage";

export function AddCreatorForm() {
  const { handleChange, formData, discardForm, finishUpload } =
    useContext(AddCreatorContext);

  return (
    <div className="border border-tertiary/30 dark:border-neutral/30 px-5 rounded-xl">
      <div className="space-y-4 border-b border-tertiary/30 dark:border-neutral/30 py-10">
        <UploadImage />

        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-4">
          <div className="space-y-2">
            <h2 className="text-xs">Full Name</h2>
            <input
              className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
              type="text"
              placeholder="eg. John Doe"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xs">Username / handle</h2>
            <input
              className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
              type="text"
              placeholder="@johndoe25"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xs">Admission Number</h2>
            <input
              className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
              type="text"
              placeholder="eg. J17-0458-2025"
              name="admission"
              onChange={handleChange}
              value={formData.admission}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xs">Phone Number</h2>
            <input
              className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
              type="text"
              placeholder="07XXXXXXXX"
              name="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs">Academic year</p>
            <div className="border border-tertiary/30 bg-primary/5 w-full px-5 rounded-md sm:w-60 sm:min-w-60 h-10 dark:border-neutral/30">
              <select
                className="text-sm w-[90%] h-full outline-0 dark:bg-tertiary/5"
                onChange={handleChange}
                name="year"
                value={formData.year}
              >
                <option className="dark:bg-tertiary/80" value="1">
                  Year 1
                </option>
                <option className="dark:bg-tertiary/80" value="2">
                  Year 2
                </option>
                <option className="dark:bg-tertiary/80" value="3">
                  Year 3
                </option>
                <option className="dark:bg-tertiary/80" value="4">
                  Year 4
                </option>
                <option className="dark:bg-tertiary/80" value="5">
                  Year 5
                </option>
                <option className="dark:bg-tertiary/80" value="other">
                  other
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs">Platform</p>
            <div className="border border-tertiary/30 bg-primary/5 w-full px-5 rounded-md sm:w-60 sm:min-w-60 h-10 dark:border-neutral/30">
              <select
                className="text-sm w-[90%] h-full outline-0"
                onChange={handleChange}
                name="platform"
                value={formData.platform}
              >
                <option className="dark:bg-tertiary/80" value="tiktok">
                  TikTok
                </option>
                <option className="dark:bg-tertiary/80" value="instagram">
                  Instagram
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs">Followers</h2>
            <input
              className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
              type="text"
              placeholder="Followers eg. 6723"
              name="followers"
              onChange={handleChange}
              value={formData.followers}
            />
          </div>
        </div>

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

      <div className="[&>button]:border-0 text-sm flex justify-end items-center gap-5 p-5">
        <button
          className="hover:text-secondary bg-red-50/0 h-fit"
          onClick={discardForm}
        >
          Cancel
        </button>
        <button
          className="bg-secondary hover:bg-secondary/50 transition-colors text-neutral w-35 flex justify-center items-center gap-2 py-2"
          onClick={() => finishUpload()}
        >
          <span>
            <TiUserAddOutline />
          </span>
          Register Creator
        </button>
      </div>
    </div>
  );
}
