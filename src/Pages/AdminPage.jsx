import { Header } from "./components/Header";
import { AdminSidebar } from "./utils/AdminSidebar";
import "./AdminPage.css/general.css";

export function AdminPage(props) {
  const { creators } = props;

  return (
    <>
      <Header />
      <AdminSidebar />

      <div className="creator-table-container">
        <p className="creator-table-title">Creators</p>
        <hr />
        <table className="creator-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>handle</th>
              <th>Category</th>
              <th>platform</th>
              <th>followers</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((user) => {
              const { name, username, category, followers, platform } = user;
              return (
                <tr key={username}>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{category}</td>
                  <td>{platform}</td>
                  <td>{followers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
