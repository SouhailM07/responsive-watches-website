import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import facebook_logo from "/facebook-f.svg";
import twitter_logo from "/x-twitter.svg";
import instagram_logo from "/instagram.svg";

export default function Navbar() {
  const navLinks: string[] = ["HOME", " ABOUT", "FEATURES", "NEW"];
  const socialLinks: string[] = [facebook_logo, instagram_logo, twitter_logo];
  return (
    <>
      <AppBar
        sx={{
          display: "block",
          bgcolor: "transparent",
          px: "2rem",
          position: "sticky",
        }}
        className="border-textColor border-b-[0.5px]"
      >
        <Toolbar
          component="nav"
          sx={{ py: "1.6rem" }}
          className="mx-auto max-w-[85rem] justify-between tracking-[0.4rem] text-textColor font-bold text-[1.1rem] select-none"
        >
          <div className="text-titleColor">WATCHES</div>
          <div className="flex space-x-[4rem] items-center">
            <Stack direction="row" spacing="4rem" component="ul">
              {navLinks.map((e, i) => {
                return (
                  <li key={i} className="cursor-pointer">
                    {e}
                  </li>
                );
              })}
            </Stack>
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
        </Toolbar>
      </AppBar>
    </>
  );
}
