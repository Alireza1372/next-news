export default function NewsDetailPageLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
