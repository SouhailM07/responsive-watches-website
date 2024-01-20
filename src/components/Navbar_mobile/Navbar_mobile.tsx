import "./navbar_mobile.css";
// mui
import { Drawer, Stack } from "@mui/material";
// hooks
import { useContext } from "react";
import { PanelContext } from "../Navbar/Navbar";
// assets
import facebook_logo from "/facebook-f.svg";
import twitter_logo from "/x-twitter.svg";
import instagram_logo from "/instagram.svg";
import xmark from "/xmark-solid.svg";
export default function Navbar_mobile() {
  let arrOfLinks: string[] = ["HOME", "ABOUT", "FEATURED", "NEW"];
  let { openPanel, setOpenPanel }: any = useContext(PanelContext);
  const socialLinks: string[] = [facebook_logo, instagram_logo, twitter_logo];
  return (
    <>
      <Drawer anchor="top" open={openPanel} onClose={() => setOpenPanel(false)}>
        <div className="w-full tracking-[0.3rem] text-center bg-bodyColor text-white flex flex-col border-b-[0.5px] border-textColor items-center justify-between pb-[3rem] pt-[1rem]">
          <div className="flex justify-end px-[1rem] w-full my-[1rem]">
            <button onClick={() => setOpenPanel(false)}>
              <img src={xmark} alt="" className="h-[2rem]" />
            </button>
          </div>
          <ul className="flex flex-col space-y-[1.5rem] justify-evenly mb-[3rem]">
            {arrOfLinks.map((e, i) => {
              return (
                <li key={i} onClick={() => setOpenPanel(false)}>
                  {e}
                </li>
              );
            })}
          </ul>
          <Stack direction="row" spacing="2rem" component="ul">
            {socialLinks.map((e, i) => {
              return (
                <li key={i} className="cursor-pointer">
                  <img src={e} alt="logo" className="h-[1.3rem] opacity-70" />
                </li>
              );
            })}
          </Stack>
        </div>
      </Drawer>
    </>
  );
}
