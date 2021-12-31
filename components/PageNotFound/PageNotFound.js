import Link from "next/link";
import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.page}>
      <div className={classes["page-block"]}>
        <div className={classes["page-content"]}>
          <p className={classes["page-404"]}>404</p>
          <div className={classes["page-message"]}>
            <p className={classes["page-message-text"]}>
              This page is not found
            </p>
            <p className={classes["page-message-link"]}>
              <Link href="/">
                <a>
                  <span className={classes["page-message-link-arrow"]}></span>GO
                  TO HOME
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
