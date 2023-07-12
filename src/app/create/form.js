'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const InvoiceForm = () => {
  const initialValues = {
    invoiceNumber: '',
    clientName: '',
    amount: '',
    dueDate: '',
  };

  const validationSchema = Yup.object({
    invoiceNumber: Yup.string().required('Invoice number is required'),
    clientName: Yup.string().required('Client name is required'),
    amount: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required'),
    dueDate: Yup.date().required('Due date is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <Field type="text" id="invoiceNumber" name="invoiceNumber" />
            <ErrorMessage name="invoiceNumber" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="clientName">Client Name</label>
            <Field type="text" id="clientName" name="clientName" />
            <ErrorMessage name="clientName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <Field type="text" id="amount" name="amount" />
            <ErrorMessage name="amount" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="dueDate">Due Date</label>
            <Field type="date" id="dueDate" name="dueDate" />
            <ErrorMessage name="dueDate" component="div" className="error" />
          </div>

          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;