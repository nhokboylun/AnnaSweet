import Button from "../ui/Button";

function Intro() {
  return (
    <div className="px-8 text-center text-white">
      <h1 className="py-8 text-3xl font-semibold text-red-500 md:text-4xl">
        Happiness is knowing there is dessert in the fridge and a refreshing
        drink waiting to be poured
      </h1>
      <p className="pb-8 text-xl">
        Panna cotta, which translates to "cooked cream" in Italian, is a
        delectable Italian dessert made by thickening sweetened cream with
        gelatin and then shaping it. The cream can be infused with coffee,
        vanilla, or various other flavorings. However, we've taken the essence
        of our beautiful country (Vietnam) to create a reimagined version,
        promising you the finest flavor and an affordable cost. Order at
        <strong> Anna's sweet</strong>, where Italy's elegance intertwines with
        Vietnam's soul, offering a gourmet experience that remains kind to your
        pocket.
      </p>
      <Button to="/Home" type="callToAction">
        Order Now!
      </Button>
    </div>
  );
}

export default Intro;
