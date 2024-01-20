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
      <div className="text-white mt-[4rem] mx-auto md:px-[2rem] md:max-w-[88rem] grid grid-cols-1 md:grid-cols-3 items-center place-items-center gap-y-[2rem]">
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
      <article className="flex flex-col  justify-between md:text-left text-center md:items-start items-center h-[20rem] md:h-[27rem]">
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
          <h1 className="md:text-[1.9rem] text-[1.5rem] lg:text-[2.4rem] md:leading-[3.3rem] pl-2 font-bold">
            Baume Custom <br /> Timepiece Small <br /> Second
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
      <article className="md:w-[24rem] md:h-[27rem] flex md:flex-col flex-row font-bold ">
        <section className=" min-w-[10rem] ">
          <img
            src={watch_icon}
            alt="logo"
            className="h-[9.5rem] mb-[2rem] w-full md:w-auto"
          />
        </section>
        <section className="flex flex-col justify-between items-start  md:h-[16rem] ">
          <p className="text-textColor text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] md:px-[1rem] max-w-[20rem] md:w-auto lg:px-[0rem]">
            Personalized watches are a job of quality and commitment. Each piece
            is the result of a work of co-creation of innovation and responsible
            sensitivity for users.
          </p>
          <Button
            sx={{ py: "0.8rem", fontWeight: "700" }}
            className="!text-textColor  md:!text-[1.2rem]"
          >
            LEARN MORE
          </Button>
        </section>
      </article>
    </>
  );
};
