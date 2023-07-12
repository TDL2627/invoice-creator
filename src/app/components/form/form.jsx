"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInvoiceStore } from "../../store/client";
import Link from 'next/link'

const InvoiceForm = () => {
  const { setInvoiceData } = useInvoiceStore();
  const initialValues = {
    invoiceNumber: "",
    clientName: "",
    amount: "",
    dueDate: "",
  };

  const validationSchema = Yup.object({
    invoiceNumber: Yup.string().required("Invoice number is required"),
    clientName: Yup.string().required("Client name is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required"),
    dueDate: Yup.date().required("Due date is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    setInvoiceData(values)
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Create Invoice</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="invoiceNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Invoice Number
            </label>
            <Field
              type="text"
              id="invoiceNumber"
              name="invoiceNumber"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="invoiceNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="clientName"
              className="block text-sm font-medium text-gray-700"
            >
              Client Name
            </label>
            <Field
              type="text"
              id="clientName"
              name="clientName"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="clientName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <Field
              type="text"
              id="amount"
              name="amount"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <Field
              type="date"
              id="dueDate"
              name="dueDate"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="dueDate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Create
          </button>
        </Form>
      </Formik>
      <Link
            href="/download"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Download
          </Link>
    </div>
  );
};

export default InvoiceForm;
