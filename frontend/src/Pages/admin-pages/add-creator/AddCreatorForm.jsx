import { useContext } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { TiTickOutline, TiUserAddOutline } from "react-icons/ti";
import { AddCreatorContext } from "../AdminContextProvider";

export function AddCreatorForm() {
  const {
    upload,
    setUpload,
    handleChange,
    formData,
    discardForm,
    finishUpload,
  } = useContext(AddCreatorContext);

  return (
    <div className="border border-tertiary/30 dark:border-neutral/30 px-5 rounded-xl">
      <div className="space-y-4 border-b border-tertiary/30 dark:border-neutral/30 py-10">
        <label
          className="bg-secondary/20 hover:bg-secondary/15 transition-colors cursor-pointer flex items-center gap-5 px-8 py-4 border border-dashed border-tertiary/30 rounded-xl mx-auto"
          for="ImageUpload"
        >
          <h2 className="border cursor-pointer border-secondary/50 rounded-xl min-w-20 h-20 flex items-center justify-center">
            <RiImageAddFill className="text-2xl text-secondary" />
          </h2>
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Upload Photo</h2>
            <p className="text-xs flex flex-col md:flex-row gap-1">
              {upload ? (
                <span className="flex items-center gap-1">
                  File uploaded{" "}
                  <TiTickOutline className="text-lg fill-secondary" />
                </span>
              ) : (
                "Choose an image"
              )}
              <span className="opacity-60">(recommended JPG & PNG)</span>
            </p>
            <input
              id="ImageUpload"
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => {
                setUpload(e.target.files[0]);
              }}
              hidden
            />
          </div>
        </label>

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
            <label>
              <input
                className="w-2 opacity-80"
                type="radio"
                name="category"
                value="dancer"
                onChange={handleChange}
              />
              <span className="ml-2 text-xs">Dancer</span>
            </label>

            <label>
              <input
                className="w-2 opacity-80"
                type="radio"
                name="category"
                onChange={handleChange}
                value="vlogger"
              />
              <span className="ml-2 text-xs">vlogger</span>
            </label>

            <label>
              <input
                className="w-2 opacity-80"
                type="radio"
                name="category"
                onChange={handleChange}
                value="influencer"
              />
              <span className="ml-2 text-xs">Influencer</span>
            </label>

            <label>
              <input
                className="w-2 opacity-80"
                type="radio"
                name="category"
                onChange={handleChange}
                value="musician"
              />
              <span className="ml-2 text-xs">Musician</span>
            </label>

            <label>
              <input
                className="w-2 opacity-80"
                type="radio"
                name="category"
                onChange={handleChange}
                value="comedian"
              />
              <span className="ml-2 text-xs">Comedian</span>
            </label>
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
