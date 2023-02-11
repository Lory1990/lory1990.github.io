import { Formik, FormikProps, useFormikContext, Form } from "formik"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/router"
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"
import * as Yup from "yup"

const validationSchema = Yup.object({
  text: Yup.string().required(),
  email: Yup.string().email().required()
})
export interface IFormatData {
  text: string
  email: string
}

const ContactForm: React.FC = () => {
  const context = useFormikContext<IFormatData>()

  return (
    <>
      <TextField variant="outlined" value={context.values.email} onChange={e => context.setFieldValue("email", e.target.value)} error={Boolean(context.errors.email)} label="Your email address" />
      <TextField
        variant="outlined"
        multiline={true}
        label="Your messsage"
        onChange={e => context.setFieldValue("text", e.target.value)}
        rows={5}
        value={context.values.text}
        error={Boolean(context.errors.text)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {context.isSubmitting ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" color="primary" type="submit">
            Contact me
          </Button>
        )}
      </Box>
    </>
  )
}

export interface IFooterContactFormProps {
  title?: string
  subtitle?: string
}

const FooterContactForm: React.FC<IFooterContactFormProps> = ({ title, subtitle }) => {
  const router = useRouter()

  const onSubmit = async (value: IFormatData, formikProps: FormikProps<IFormatData>) => {
    try {
      const data = {
        ...value,
        path: router.pathname
      }

      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICEID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, data, process.env.NEXT_PUBLIC_EMAILJS_APIKEY)
    } catch (exception) {
      console.error(exception)
      formikProps.setSubmitting(false)
    }
  }

  return (
    <Formik validateOnBlur={false} validateOnChange={false} validationSchema={validationSchema} initialValues={{ email: "", text: "" }} onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px 0"
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            width: "100%",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          {title && <Typography sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5em" }}>{title}</Typography>}
          {subtitle && <Typography sx={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: subtitle }}></Typography>}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <ContactForm />
          </Box>
        </Form>
      </Box>
    </Formik>
  )
}

export default FooterContactForm
