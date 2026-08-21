import { useContext } from "react";
import { AddCreatorContext } from "../AdminContextProvider";

export function FormInputs() {
  const { handleChange, formData } = useContext(AddCreatorContext);

  return (
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
  );
}
