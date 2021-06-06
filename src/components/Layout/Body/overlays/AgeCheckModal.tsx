import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const AgeCheckModal = (props: any) => {
  const [active, setActive] = useState(props.active);

  const backdropPortalRoot = document.getElementById("backdrop-root");
  const modalPortalRoot = document.getElementById("overlay-root");

  const leaveWebsite = () => {
    window.history.back();
  };

  const onClick = (userInput: string) => {
    userInput === "confirm"
      ? setActive(false)
      : (window.location.href =
          "https://de.wikipedia.org/wiki/Alkoholersterwerbsalter");
  };

  return backdropPortalRoot && modalPortalRoot ? (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop active={active} />, backdropPortalRoot)}
      {ReactDOM.createPortal(
        <ModalOverlay
          active={active}
          className="show"
          title="Alterskontrolle"
          description="Die Kreativ-Bier GmbH, eine der führenden Premium-Brauereien Deutschlands, setzt sich seit Jahren für einen verantwortungsvollen Umgang mit alkoholischen Getränken ein. Daher richtet sich die Internetpräsenz von Kreativ-Bier nur an Personen über 16 Jahren."
          confirm="Ja"
          cancel="Nein"
          onClick={onClick}
        />,
        modalPortalRoot
      )}
    </Fragment>
  ) : null;
};

export default AgeCheckModal;
