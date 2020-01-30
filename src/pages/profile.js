import React from 'react'
import { Details } from './details/details'

export const Profile = ({formData, setFormData }) =>
    <Details title='Profile' buttonTitle='Update Details' formData={formData} setFormData={setFormData} />