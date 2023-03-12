import "../../styles/globals.css"
import Header from "./Header"

export const metadata = {
   title: "Imtiaj Websites",
   description: "Generated by Next.js",
 }
 

export default function adminLayout({
   children, // will be a page or nested layout
 }: {
   children: React.ReactNode,
 }) {
   return (
      <html lang="en">
      <body>
        {children}
      </body>
    </html>
   );
 }