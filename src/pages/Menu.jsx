import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[600px] mx-28 flex flex-wrap">
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl  bg-beverages bg-cover bg-center"
        onClick={() => {
          navigate("/beverages");
        }}
      >
        Beverages
      </div>
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl  bg-breakfast bg-cover bg-center"
        onClick={() => navigate("/breakfast")}
      >
        Breakfast
      </div>
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl  bg-snacks bg-cover bg-center"
        onClick={() => {
          navigate("/snacks");
        }}
      >
        Snacks
      </div>
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl bg-lunch bg-cover bg-center"
        onClick={() => {
          navigate("/lunchdinner");
        }}
      >
        lunchdinner
      </div>
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl  bg-dessert bg-cover bg-center"
        onClick={() => {
          navigate("/desserts");
        }}
      >
        Desserts
      </div>
      <div
        className="h-[270px] w-[400px] rounded-xl m-4 p-4 text-yellow-400 text-6xl bg-special bg-cover bg-center"
        onClick={() => {
          navigate("/special");
        }}
      >
        Special
      </div>
    </div>
  );
};

export default Menu;
