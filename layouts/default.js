import Header from "components/layouts/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
