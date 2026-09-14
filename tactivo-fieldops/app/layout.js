import "../src/styles.css";
import "../src/accessibility.css";
import "../src/evidence.css";
import "../src/departments.css";

export const metadata = {
  title: "Tactivo FieldOps",
  description: "Tactivo Technologies service operations dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
