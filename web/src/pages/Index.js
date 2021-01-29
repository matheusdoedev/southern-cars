import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

import CarsHead from "../components/CarsHead/CarsHead";
import CarsResults from "../components/CarsResults/CarsResults";
import Modal from "../components/Modal/Modal";
import ModalForm from "../components/ModalForm/ModalForm";
import Button from "../components/Button/Button";
import CarsModalForm from "../components/CarsModalForm/CarsModalForm";
import Seo from "../components/Seo/Seo";

import { ModalContext } from "../hooks/modalContext";
import { CarsContext } from "../hooks/carsContext";
import useRefreshCars from "../hooks/useRefreshCars";

import resetDataStates from "../utils/resetDataStates";

import "../styles/objects/input-group.scss";
import "../styles/objects/button-group.scss";

const Index = () => {
  const modalContext = useContext(ModalContext);
  const carsContext = useContext(CarsContext);

  const history = useHistory();
  const { id } = useParams();

  const { setRefreshCars } = useRefreshCars();

  return (
    <>
      <Seo title="Cars" />

      <DashboardLayout>
        <CarsHead />
        <CarsResults cars={carsContext?.cars} />
      </DashboardLayout>

      <Modal title="Add car" name="add-car">
        <ModalForm
          name="add-car"
          onSubmit={(event) => {
            event.preventDefault();

            carsContext.handlePostCars(() => {
              resetDataStates([
                carsContext.setName,
                carsContext.setPrice,
                carsContext.setManufacturer,
                carsContext.setQTY,
                carsContext.setColor,
              ]);
              modalContext.handleInactive();
              history.push("/");
              setRefreshCars(true);
            });
          }}
        >
          <CarsModalForm />
        </ModalForm>

        <div className="button-group">
          <Button
            content="Close"
            secondary
            onClick={() => {
              modalContext.handleInactive();
              history.push("/");
            }}
          />
          <Button
            content="Save and continue"
            secondary
            onClick={() => {
              carsContext.handlePostCars(() => {
                resetDataStates([
                  carsContext.setName,
                  carsContext.setPrice,
                  carsContext.setManufacturer,
                  carsContext.setQTY,
                  carsContext.setColor,
                ]);
                setRefreshCars(true);
              });
            }}
          />
          <Button type="submit" content="Save" form="add-car" />
        </div>
      </Modal>

      <Modal title="Edit car" name="update-car">
        <ModalForm
          name="update-car"
          onSubmit={(event) => {
            event.preventDefault();

            carsContext.handlePutUpdateCar(id, () => {
              resetDataStates([
                carsContext.setName,
                carsContext.setPrice,
                carsContext.setManufacturer,
                carsContext.setQTY,
                carsContext.setColor,
              ]);
              modalContext.handleInactive();
              history.push("/");
              setRefreshCars(true);
            });
          }}
        >
          <CarsModalForm />
        </ModalForm>

        <div className="button-group">
          <Button
            content="Close"
            secondary
            onClick={() => {
              modalContext.handleInactive();
              history.push("/");
            }}
          />
          <Button type="submit" content="Save" form="update-car" />
        </div>
      </Modal>

      <Modal
        title="Delete car"
        name="delete-car"
        style={{ alignItems: "flex-start", textAlign: "left" }}
      >
        <p
          style={{
            width: `100%`,
            padding: `var(--gap-md) 0`,
            textAlign: `left`,
          }}
        >
          Are you sure that you want to delete?
        </p>

        <div className="button-group">
          <Button
            content="Close"
            secondary
            onClick={() => {
              modalContext.handleInactive();
              history.push("/");
            }}
          />
          <Button
            content="Delete"
            onClick={() => {
              carsContext.handleDeleteCar(id, () => {
                modalContext.handleInactive();
                history.push("/");
                setRefreshCars(true);
              });
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default Index;
