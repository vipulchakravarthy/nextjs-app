import Style from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={Style.main}>{children}</main>
    </>
  );
}
