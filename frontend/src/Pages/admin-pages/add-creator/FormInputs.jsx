import { useContext } from "react";
import { AddCreatorContext } from "../AdminContextProvider";

export function FormInputs() {
  const { handleChange, formData } = useContext(AddCreatorContext);
  const inputs = [
    { title: "Full Name", placeholder: "eg. John Doe", value: "fullName" },
    {
      title: "Username / handle",
      placeholder: "@johndoe25",
      value: "username",
    },
    {
      title: "Admission Number",
      placeholder: "@ J17-0458-2025",
      value: "admission",
    },
    { title: "Phone Number", placeholder: "07XXXXXXXX", value: "phoneNumber" },
    { title: "Followers", placeholder: "eg. 6723", value: "followers" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-4">
      {inputs.map((input) => (
        <div key={input.value} className="space-y-2">
          <h2 className="text-xs">{input.title}</h2>
          <input
            className="border border-tertiary/30 dark:border-neutral/30 bg-primary/5 px-5 py-1 rounded-md text-sm w-full sm:w-60 sm:min-w-60 h-10 outline-0 dark:placeholder:text-neutral/50 "
            type="text"
            placeholder={input.placeholder}
            name={input.value}
            onChange={handleChange}
            value={formData[input.value]}
          />
        </div>
      ))}

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
    </div>
  );
}
