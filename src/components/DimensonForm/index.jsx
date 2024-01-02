import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomPopover from "../CustomPopover";
import "./style.css";

const initialValues = {
  productName: "",
  color: "",
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
  quantity: 0,
};

const validationSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  color: Yup.string().required("Color is required"),
  length: Yup.number().min(0).required("Length is required"),
  width: Yup.number().min(0).required("Width is required"),
  height: Yup.number().min(0).required("Height is required"),
  weight: Yup.number().min(0).required("Weight is required"),
  quantity: Yup.number().min(0).required("Quantity is required"),
});

const standart20 = 5880 * 2330 * 2380
const standart40 = 12024 * 2330 * 2380
const highCube40 = 12024 * 2330 * 2690

function DimensionForm() {
  const [capacityValues, setCapacityValues] = useState([
    {
      name: "20 Standart",
      value: 0,
    },
    {
      name: "40 Standart",
      value: 0,
    },
    {
      name: "40 High Cube",
      value: 0,
    },
  ]);

  const onSubmit = (event) => {
    let width = event.width;
    let height = event.height;
    let length = event.length;
    let quantity = event.quantity === 0 ? 1 : event.quantity

    let cargoCapacity = (width * height * length) * quantity

    calculateCapasity(cargoCapacity)

  };

  const calculateCapasity = (cargoCapasity) => {
    let standart20Capasity = Math.floor(standart20 / cargoCapasity)
    let standart40Capasity = Math.floor(standart40 / cargoCapasity)
    let highCube40Capasity = Math.floor(highCube40 / cargoCapasity)

    const newValues = [
      {
        name: "20 Standart",
        value: parseFloat(standart20Capasity),
      },
      {
        name: "40 Standart",
        value: parseFloat(standart40Capasity),
      },
      {
        name: "40 High Cube",
        value: parseFloat(highCube40Capasity),
      },
    ]

    setCapacityValues(newValues)
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="dimension-form">
          <div className="dimension-form-item">
            <label htmlFor="productName">Product name:</label>
            <Field type="text" id="productName" name="productName" />
            <ErrorMessage
              className="error"
              name="productName"
              component="div"
            />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="color">Color:</label>
            <Field type="color" id="color" name="color" />
            <ErrorMessage className="error" name="color" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="length">Length:</label>
            <div className="dimension-form-item-input-with-unit">
              <Field type="number" id="length" name="length" />
              <span>mm</span>
            </div>
            <ErrorMessage className="error" name="length" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="width">Width:</label>
            <div className="dimension-form-item-input-with-unit">
              <Field type="number" id="width" name="width" />
              <span>mm</span>
            </div>
            <ErrorMessage className="error" name="width" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="height">Height:</label>
            <div className="dimension-form-item-input-with-unit">
              <Field type="number" id="height" name="height" />
              <span>mm</span>
            </div>
            <ErrorMessage className="error" name="height" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="weight">Weight:</label>
            <div className="dimension-form-item-input-with-unit">
              <Field type="number" id="weight" name="weight" />
              <span>kg</span>
            </div>
            <ErrorMessage className="error" name="weight" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="quantity">Quantity:</label>
            <Field type="text" id="quantity" name="quantity" />
            <ErrorMessage className="error" name="quantity" component="div" />
          </div>

          <div className="dimension-form-button-area">
            <CustomPopover capacityValues={capacityValues} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default DimensionForm;
