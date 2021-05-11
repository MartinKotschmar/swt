import classes from "./flavourList.module.css";

const FlavourList = () => {
  const flavours = [
    "Leicht/Erfrischend",
    "Spritzig/Erfrischend",
    "Bluming/Fruchtig",
    "Hopfig/Bitter",
    "Karamell/Honig",
    "Würzig/Kräuteraroma",
    "Start/Herzhaft",
    "Dunkel/Vollmundig",
    "im Fass gereift",
    "Experimentell",
  ];

  return (
    <div>
      <div>
        <h2>Geschmack</h2>
        <div className={classes.container}>
          {flavours.map((x, value) => {
            return (
              <label>
                <input
                  key={x}
                  type="radio"
                  name="flavourPanelInput"
                  value={value}
                ></input>
                {flavours[value]}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlavourList;
