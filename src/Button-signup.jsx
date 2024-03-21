import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  Firstname: Yup.string().required('نام خود را به شکل درست وارد کنید!'),
  Lastname: Yup.string().required('نام خانوادگی خود را به شکل درست وارد کنید!'),
  email: Yup.string().email('فرم نادرست برای ایمیل').required('ایمیل خود را به شکل درست وارد کنید!'),
  phonenumber: Yup.string().required(),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'رمز کوتاه تر از ۸ حرف نمی تواند باشد.')
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'رمز ها باید با هم برابر باشند!')
    .required('لطفا رمز خود را تکرار کنید.'),
});

function Button() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        username: data.Firstname,
        first_name: data.Firstname,
        last_name: data.Lastname,
        email: data.email,
        phone_number: data.phonenumber,
        password: data.password,
        password2: data.confirmPassword,
        gender: null,
        birthdate: null
      };
  
      await axios.post('https://gheychi-api.comp-iust.ir/auth/signup/', formattedData);
      console.log('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  return (
    <div className="form_zone form_style font_style">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="center">ثبت نام</h3>
        نام:<br />
        <input placeholder="نام خود را وارد کنید .." type="text" {...register('Firstname')} />
        {errors.Firstname && <p className='Errors'> {"*"+errors.Firstname.message}</p>}
        <br />
        نام خانوادگی:<br />
        <input placeholder="نام خانوادگی خود را وارد کنید .." type="text" {...register('Lastname')} />
        {errors.Lastname && <p className='Errors'> {"*"+errors.Lastname.message}</p>}
        <br />
        ایمیل:<br />
        <input
          placeholder="ایمیل خود را وارد کنید .."
          type="email"
          {...register('email')}
        />
        {errors.email && <p className='Errors'> {"*"+errors.email.message}</p>}
        <br />
        شماره تلفن:<br />
        <input
          placeholder="شماره تلفن خود را وارد کنید .."
          type="text"
          {...register('phonenumber')}
        />
        {errors.phonenumber && <p className='Errors'> {"*"+errors.phonenumber.message}</p>}
        <br />
        رمز عبور:<br />
        <input
          placeholder="رمز عبور خود را وارد کنید .."
          type="password"
          {...register('password')}
        />
        {errors.password && <p className='Errors'> {"*"+errors.password.message}</p>}
        <br />
        تکرار رمز عبور:<br />
        <input
          placeholder="رمز عبور خود را مجددا وارد کنید .."
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p className='Errors'>{"*"+errors.confirmPassword.message}</p>}
        <br />
        <p>
          <a className="link_to_signin" href="#">
            قبلا ثبت نام کرده اید؟
          </a>
        </p>
        <p>
          <input className="button" type="submit" value="ثبت نام" />
        </p>
      </form>
    </div>
  );
}
export default Button;