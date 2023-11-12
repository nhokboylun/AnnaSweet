import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "./menuSlice";
import { useEffect } from "react";

function Menu() {
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length === 0) {
      dispatch(fetchMenus());
    }
  }, [dispatch, menu]);

  return (
    <ul className="md: space-4 divide-y divide-stone-200 px-2 md:grid md:grid-cols-2 md:gap-4 md:text-lg xl:grid-cols-3">
      {menu.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Menu;
