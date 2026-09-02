"use client";

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@base-ui/react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const{
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });
  const onSubmit = async (data: SignInFormData) => {
    console.log(data);
  }
  return (
    <>
    <h1 className="form-title">
      login to your account
    </h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
        name="email"
        label="Email"
        placeholder="john.doe@gmail.com"
        register={register}
        error={errors.email}
        validation={{required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' }}}
      />
      <InputField
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        register={register}
        error={errors.password}
        validation={{required: 'Password is required', minLength: 8}}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full yellow-btn mt-5">
        {isSubmitting ? "Signing In" : "Sign In"}
      </Button>
      <FooterLink
        text="Don't have an account?"
        linkText="Sign up"
        href="/sign-up"
      />
    </form>
    </>
  )
}

export default SignIn
