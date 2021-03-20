import { useState } from 'react'
import style from './ContactForm.module.scss'
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { interpolate, interpolateTransformSvg } from 'd3-interpolate'
// import { range } from 'd3-array'
import { easeExpInOut } from 'd3-ease'
import { Animate } from 'react-move'

function ConnectedTextField({name, control, textFieldProps} : any){
    return <Controller
        name={name}
        control={control}
        render={({ onChange, value }) => <TextField {...textFieldProps} onChange={onChange} value={value} />}
      />
}

export default function ContactForm(){

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [success, setSuccess] = useState<boolean>(false)

    const { register, handleSubmit, control } = useForm();
    const onSubmit = async (data : any) => {
        try{
            setLoading(true)
            setSuccess(false)
            console.log("[ContactForm][onSubmit] - ", data)
            //await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, data, process.env.NEXT_PUBLIC_EMAILJS_USER_ID!)
            console.log("[ContactForm][onSubmit] - SUCCESS")
            setSuccess(true)
        }catch(e){
            console.log("[ContactForm][onSubmit] - ERROR", e)
            setError(e.message)
        }finally{
            //setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)} className={style.contactForm}>

        <Animate
          show={!loading}
          start={{
            opacity: 0,
            width: 100,
          }}

          enter={{
            opacity: [1],
            width: [100],
            timing: { duration: 1000 },
          }}

          leave={{
              opacity: [0],
              width: [0],
              timing: { duration: 1500,  ease: easeExpInOut },
            }}

        interpolation={(begValue, endValue, attr) => interpolate(begValue, endValue)}
        >
            {({opacity, width}) => {
                
            return <div style={{opacity, height: width+"%"}}>
            <ConnectedTextField
                name="from"
                control={control}
                textFieldProps={{
                    label: "Name"
                }}
            />
            <ConnectedTextField
                name="reply_to"
                ref={register}
                control={control}
                textFieldProps={{
                    label: "Email"
                }}
            />
            <ConnectedTextField
                name="message"
                control={control}
                textFieldProps={{
                    label: "Message",
                    multiline: true,
                    rows: 4
                }}
            />

            <Button type='submit'>
                Send Message
            </Button>
            </div>
            }}
            </Animate>
    </form>
}