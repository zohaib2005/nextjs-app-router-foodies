import Image from "next/image";
import classes from "./../../page.module.css";

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
        </div>
      </header>
      <main>
        <p></p>
      </main>
    </>
  );
}
