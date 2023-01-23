import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const SearchBox = () => {
    const formik = useFormik({
        initialValues{ price_range, zip_code, home_type
        },
        onSubmit: values => {
            alert(Json.stringify(values, null, 2));
        },

    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="price_range">Price Range></label>
            <label htmlFor="zip_code">Zip Code</label>
            <label htmlFor="home_type">Home Type</label>
            <input
            id="price_range"
            name="price_range"
            type="price_range"
            onChange={formik.handleChange}
            value={formik.values.price_range}
            />
             <input
            id="zip_code"
            name="zip_code"
            type="zip_code"
            onChange={formik.handleChange}
            value={formik.values.zip_code}
            />
              <input
            id="home_type"
            name="home_type"
            type="home_type"
            onChange={formik.handleChange}
            value={formik.values.home_type}
            />

            <button type="submit">Submit</button>

        </form>


    )
};