import "./globals.css";

import { fetchLayout, fetchMenu } from "../lib/functions";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Menu from "@/components/layout/Menu";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchForm from "@/components/forms/SearchForm";
import SearchModal from "@/components/layout/SearchModal";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const Myriad = localFont({ src: "../fonts/MyriadPro-Regular.otf" });

export default async function RootLayout({ children }) {
  const { data } = await fetchLayout();
  // console.log("LAYOUT", data);
  return (
    <html lang="el" className="overflow-x-hidden">
      <body className={Myriad.className + " relative overflow-x-hidden"}>
        <Header
          header={data.headerSection.header}
          menu={data.headerMenu.menuItems.nodes}
          socials={data.socialsSection.socials}
        />
        <main>{children}</main>
        <Footer
          footer={data.footerSection.footer}
          socials={data.socialsSection.socials}
          menu={data.headerMenu.menuItems.nodes}
        />
              <MobileMenu >
                <Menu menu={data.headerMenu.menuItems.nodes} socials={data.socialsSection.socials}/>
              </MobileMenu>
              <SearchModal>
                <SearchForm/>
              </SearchModal>
      </body>
    </html>
  );
}
