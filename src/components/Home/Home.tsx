import "./home.css";
// mui
import { Button, Rating } from "@mui/material";
// components
import { Watches } from "../../components";
// assets
import watch_icon from "/watches-border.png";
import arrow_logo from "/chevron-right-solid.svg";

export default function Home() {
  return (
    <>
      <div className="text-white mt-[4rem] mx-auto px-[2rem] max-w-[88rem] grid grid-cols-3 items-center place-items-center">
        <Intro />
        <Watches />
        <Details />
      </div>
    </>
  );
}

let Intro = () => {
  return (
    <>
      <article className="flex flex-col justify-between h-[27rem]">
        {/* rating */}
        <section className="space-y-[1rem]">
          <Rating
            name="simple-controlled"
            sx={{ color: "gray" }}
            defaultValue={4.5}
            precision={0.5}
            readOnly
            className="space-x-[0.4rem] "
            size="medium"
          />
          {/* title */}
          <h1 className="text-[2.4rem] leading-[3.3rem] pl-2 font-bold">
            Baume Custom Timepiece Small Second
          </h1>
          <h5 className="font-bold text-textColor text-[1.3rem]">$620</h5>
        </section>
        <section>
          <Button
            sx={{
              color: "white",
              px: "1rem",
              py: "0.8rem",
              border: "2px solid gray",
              fontSize: "0.8rem",
              fontWeight: "700",
              letterSpacing: "0.3rem",
            }}
            endIcon={
              <img src={arrow_logo} alt="" className="h-[1rem] mx-[0.7rem] " />
            }
          >
            ADD TO CART
          </Button>
        </section>
      </article>
    </>
  );
};

let Details = () => {
  return (
    <>
      <article className="w-[24rem] h-[27rem] flex flex-col justify-between items-start font-bold">
        <section>
          <img src={watch_icon} alt="logo" className="h-[9.5rem] mb-[2rem]" />
          <p className="text-textColor ">
            Personalized watches are a job of quality and commitment. Each piece
            is the result of a work of co-creation of innovation and responsible
            sensitivity for users.
          </p>
        </section>
        <Button
          sx={{ fontSize: "1.2rem", py: "0.8rem", fontWeight: "700" }}
          className="!text-textColor"
        >
          LEARN MORE
        </Button>
      </article>
    </>
  );
};
