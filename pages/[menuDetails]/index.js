// thedolcevita.com/menu/menuDetails

import { Fragment } from "react";
import Head from "next/head";
import DishItem from "../../components/DishItem/DishItem";

function MenuDetails({ menu }) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      {menu.items.map((item, index) => (
        <div
          className={classes["slider-items-child"]}
          ref={slide}
          key={`${item.title}-${index}`}
        >
          <DishItem item={item} icon={menu.icon} />
        </div>
      ))}
    </Fragment>
  );
}
