import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchRooms } from '../redux/action';
// import 'bootstrap/dist/css/bootstrap.min.css';

const RoomSchema = Yup.object().shape({
    room_type: Yup.string().required('Required'),
    no_of_rooms: Yup.number().required('Required').positive().integer(),
    check_in_date: Yup.date().required('Required'),
    check_out_date: Yup.date().required('Required'),
    number_of_days: Yup.number().required('Required').positive().integer(),
    payable_amount: Yup.number().required('Required').positive()
});

const RoomForm = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ rooms: [{ room_type: '', no_of_rooms: '', check_in_date: '', check_out_date: '', number_of_days: '', payable_amount: '' }] }}
            validationSchema={Yup.object().shape({
                rooms: Yup.array().of(RoomSchema)
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    await axios.post('http://localhost:5000/api/rooms', values.rooms);
                    dispatch(fetchRooms());
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
                setSubmitting(false);
            }}
        >
            {({ values }) => (
                <Form>
                    <FieldArray name="rooms">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.rooms.length > 0 &&
                                    values.rooms.map((room, index) => (
                                        <div className="card mb-3" key={index}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.room_type`}>Room Type</label>
                                                    <Field name={`rooms.${index}.room_type`} as="select" className="form-control">
                                                        <option value="">Select Room Type</option>
                                                        <option value="1">Single</option>
                                                        <option value="2">Double</option>
                                                    </Field>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.no_of_rooms`}>Number of Rooms</label>
                                                    <Field name={`rooms.${index}.no_of_rooms`} type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.check_in_date`}>Check-in Date</label>
                                                    <Field name={`rooms.${index}.check_in_date`} type="date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.check_out_date`}>Check-out Date</label>
                                                    <Field name={`rooms.${index}.check_out_date`} type="date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.number_of_days`}>Number of Days</label>
                                                    <Field name={`rooms.${index}.number_of_days`} type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`rooms.${index}.payable_amount`}>Payable Amount</label>
                                                    <Field name={`rooms.${index}.payable_amount`} type="text" className="form-control" />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => remove(index)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => push({ room_type: '', no_of_rooms: '', check_in_date: '', check_out_date: '', number_of_days: '', payable_amount: '' })}
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit" className="btn btn-success">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default RoomForm;
