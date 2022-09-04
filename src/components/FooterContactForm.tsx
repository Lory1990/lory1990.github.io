import { Formik, FormikProps, useFormikContext } from "formik";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import * as Yup from 'yup'

const validationSchema = Yup.object({
    text: Yup.string().email().required(),
    email: Yup.string().required(),
})
export interface IFormatData {
  text: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const context = useFormikContext<IFormatData>();

  return (
    <>
      <TextField
        variant="outlined"
        value={context.values.email}
        onChange={e =>  context.setFieldValue("email",e.target.value)}
        error={Boolean(context.errors.email)}
      />
      <TextField
        variant="outlined"
        multiline={true}
        onChange={e =>  context.setFieldValue("text",e.target.value)}
        rows={5}
        value={context.values.text}
        error={Boolean(context.errors.text)}
      />
      <Box>
        {context.isSubmitting ?
            <CircularProgress />
        :
            <Button type="submit">Contact me</Button>
        }
      </Box>
    </>
  );
};

export interface IFooterContactFormProps{
    title?: string,
    subtitle?: string,
}

const FooterContactForm: React.FC<IFooterContactFormProps> = ({title, subtitle}) => {
  const router = useRouter();

  const onSubmit = async (
    value: IFormatData,
    formikProps: FormikProps<IFormatData>
  ) => {
    try {
      const data = {
        ...value,
        path: router.pathname,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_APIKEY
      );
    } catch (exception) {
        console.error(exception)
      formikProps.setSubmitting(false);
    }
  };

  return (
    <Formik validateOnBlur={false} validateOnChange={false} validationSchema={validationSchema} initialValues={{ email: "", text: "" }} onSubmit={onSubmit}>
        <Box>
            {title && <Typography>{title}</Typography>}
            {subtitle && <Typography>{subtitle}</Typography>}
            <ContactForm />
      </Box>
    </Formik>
  );
};

export default FooterContactForm;
