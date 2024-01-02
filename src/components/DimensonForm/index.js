import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
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

const onSubmit = (event) => {
  console.log(event);
};

function DimensionForm() {
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
            <Field type="number" id="length" name="length" />
            <ErrorMessage className="error" name="length" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="width">Width:</label>
            <Field type="number" id="width" name="width" />
            <ErrorMessage className="error" name="width" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="height">Height:</label>
            <Field type="number" id="height" name="height" />
            <ErrorMessage className="error" name="height" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="weight">Weight:</label>
            <Field type="number" id="weight" name="weight" />
            <ErrorMessage className="error" name="weight" component="div" />
          </div>

          <div className="dimension-form-item">
            <label htmlFor="quantity">Quantity:</label>
            <Field type="text" id="quantity" name="quantity" />
            <ErrorMessage className="error" name="quantity" component="div" />
          </div>

          <div className="dimension-form-button-area">
            <Button type="submit">Save</Button>
            <Button>Prediction</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default DimensionForm;
