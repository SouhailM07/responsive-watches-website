import "./home.css";
// mui
import { Button, Rating } from "@mui/material";
// assets
import watch_icon from "/watches-border.png";
export default function Home() {
  return (
    <>
      <div className="text-white mt-[4rem] mx-auto max-w-[90rem] flex justify-between items-center">
        <Intro />
        <div className="h-[35rem] border-2 border-green-500"></div>
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
            sx={{ color: "gray" }}
            defaultValue={4.5}
            precision={0.5}
            readOnly
            className="space-x-[0.4rem] "
            size="medium"
          />
          {/* title */}
          <h1 className="w-[30rem] text-[2.7rem] leading-[3.3rem] pl-2 font-bold">
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
              fontSize: "1.1rem",
              fontWeight: "700",
              letterSpacing: "0.3rem",
            }}
            endIcon=">"
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
      <article className="w-[24rem] h-[27rem] flex flex-col justify-between items-start">
        <section>
          <img src={watch_icon} alt="logo" className="h-[10rem] mb-[2rem]" />
          <p className="text-textColor text-[1.1rem] font-bold">
            Personalized watches are a job of quality and commitment. Each piece
            is the result of a work of co-creation of innovation and responsible
            sensitivity for users.
          </p>
        </section>
        <button className="text-textColor font-bold text-[1.4rem] py-[0.8rem]">
          LEARN MORE
        </button>
      </article>
    </>
  );
};
