function HeaderLink(props) {
  return (
    <span style={{ display: "flex" }} className={"pl-5 pr-5 pb-5 pt-5"}>
      {props.children}
    </span>
  );
}
export default HeaderLink;
