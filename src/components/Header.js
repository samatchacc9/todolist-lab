import Menu from "./Menu";
function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src="https://picsum.photos/id/237/30/30" alt="My logo" />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
