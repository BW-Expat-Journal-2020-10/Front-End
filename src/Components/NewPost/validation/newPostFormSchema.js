import * as yup from 'yup'

export default yup.object().shape({
    img_url: yup
        .string()
        .required("image url is required.")
        .url()
})