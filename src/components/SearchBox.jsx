import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';


export const SearchBox = () => {
     let priceRange = "blue";
     let zipCode = 2
     let homeType = "single family house"
    const formik = useFormik({
        initialValues:{ priceRange, zipCode, homeType
        },
        onSubmit: values => {
            alert(Json.stringify(values, null, 2));
        },

    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="priceRange">Price Range</label>
            <label htmlFor="zipCode">Zip Code</label>
            <label htmlFor="homeType">Home Type</label>
            <input
            id="priceRange"
            name="priceRange"
            type="priceRange"
            onChange={formik.handleChange}
            value={formik.values.priceRange}
            />
             <input
            id="zipCode"
            name="zipCode"
            type="zipCode"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
            />
              <input
            id="homeType"
            name="homeType"
            type="homeType"
            onChange={formik.handleChange}
            value={formik.values.homeType}
            />

            <button type="submit">Submit</button>

        </form>


    )
};