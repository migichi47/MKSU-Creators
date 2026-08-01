import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

export function AdminAddCreator() {
  return (
    <>
      <AdminSidebar />
      <Header />

      <div className="join-tile join-tile-admin">
        <h1 className="join-tile-title">Add Creator details</h1>

        <div className="name-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Full Name"
            name="fullName"
            // onChange={handleChange}
          />
        </div>

        <div className="handle-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="username eg. mutiso123"
            name="username"
            // onChange={handleChange}
          />
        </div>

        <div className="admission-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Adm. eg. J17-0458-2025"
            name="admission"
            // onChange={handleChange}
          />
        </div>

        <div className="contact-section">
          {"\u2022"}
          <input
            className="join-tile-input "
            type="text"
            placeholder="Phone no."
            name="phoneNumber"
            // onChange={handleChange}
          />
        </div>

        <div className="academic-year-section">
          <p className="join-tile-text">Academic year</p>
          <select
            title="year"
            className="join-tile-select"
            // onChange={handleChange}
            name="year"
            // value={formData.year}
          >
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
            <option value="5">Year 5</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="platform-section">
          <p className="join-tile-text">Platform</p>
          <select
            title="platform"
            className="join-tile-select"
            // onChange={handleChange}
            name="platform"
            // value={formData.platform}
          >
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>

        <div className="followers-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Followers eg. 6700"
            name="followers"
            // onChange={handleChange}
          />
        </div>

        <div className="followers-section">
          <p className="join-tile-text">category</p>
          <select name="category" title="category" className="join-tile-select">
            <option value="dancer">dancer</option>
            <option value="vlogger">vlogger</option>
            <option value="musician">musician</option>
            <option value="influencer">influencer</option>
            <option value="comedian">comedian</option>
          </select>
        </div>

        <input type="file" accept="image/*" className="upload-image" />

        <button
          className="lets-go-btn"
          // onClick={() => submitCreatorDetails()}
        >
          Let's Go
        </button>
      </div>
    </>
  );
}
