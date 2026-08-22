import { useContext } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { JoinContext } from "./JoinContextProvider";

export function UploadImage() {
  const { upload, setUpload } = useContext(JoinContext);

  return (
    <label
      className="bg-secondary/20 hover:bg-secondary/15 transition-colors cursor-pointer flex items-center gap-5 px-8 py-4 border border-dashed border-tertiary/30 rounded-xl mx-auto"
      htmlFor="ImageUpload"
    >
      <h2 className="border cursor-pointer border-secondary/50 rounded-xl min-w-20 h-20 flex items-center justify-center">
        <RiImageAddFill className="text-2xl text-secondary" />
      </h2>
      <div className="space-y-2">
        <h2 className="font-semibold text-xl">Upload Photo</h2>
        <p className="text-xs flex flex-col md:flex-row gap-1">
          {upload ? (
            <span className="flex items-center gap-1">
              File uploaded <TiTickOutline className="text-lg fill-secondary" />
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
  );
}
