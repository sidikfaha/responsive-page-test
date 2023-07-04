"use client";

import waves from "@/assets/waves.svg";
import style from "./style.module.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Button,
  FormInput,
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  StepForm,
} from "@/components";

interface StepProps {
  formState: FormState;
}

function Step1({ formState }: StepProps) {
  return (
    <StepForm
      step={1}
      label="Your Profile"
      description="Enter the login information for your account. You will be able to create additional users after registering."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 self-stretch gap-y-2 gap-x-10 pb-10 px-32">
        <FormInput
          defaultValue={formState.firstName}
          label="First Name"
          name="firstName"
          required
        />
        <FormInput
          defaultValue={formState.lastName}
          label="Last Name"
          name="lastName"
          required
        />
        <FormInput
          defaultValue={formState.email}
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormInput
          defaultValue={formState.phone}
          label="Phone Number"
          name="phone"
          type="tel"
          required
        />
        <FormInput
          defaultValue={formState.password}
          label="Password"
          name="password"
          type="password"
          required
        />
        <FormInput
          defaultValue={formState.passwordConfirm}
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          required
        />
      </div>
    </StepForm>
  );
}

function Step2({ formState }: StepProps) {
  return (
    <StepForm
      step={2}
      label="Business Information"
      description="Please, enter information about your company."
    >
      <div className="pb-10 px-32 self-stretch">
        {/* General Informations */}
        <div className="flex flex-col gap-3">
          <h4 className="text-cyan-600">GENERAL INFORMATION</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 self-stretch gap-y-2 gap-x-10">
            <FormInput
              defaultValue={formState.brandName}
              label="Brand Name"
              name="brandName"
              required
            />
            <FormInput
              defaultValue={formState.brandType}
              label="Brand Type"
              name="brandType"
              required
            />
            <FormInput
              defaultValue={formState.streetAddress}
              label="Street Address"
              name="streetAddress"
              required
            />
            <FormInput
              defaultValue={formState.city}
              label="City"
              name="city"
              required
            />
            <FormInput
              defaultValue={formState.zipCode}
              label="Zip Code"
              name="zipCode"
              required
            />
            <FormInput
              defaultValue={formState.taxIdNumber}
              label="Tax ID Number"
              name="taxIdNumber"
              required
            />
          </div>
        </div>

        {/* Documents */}
        <div className="flex flex-col gap-3 mt-10">
          <h4 className="text-cyan-600">Documents</h4>
          <div className="grid grid-cols-1 self-stretch gap-y-2 gap-x-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo consectetur repudiandae tenetur repellendus. Earum alias
              sapiente dolores, aliquam necessitatibus nostrum eaque cupiditate
              consequuntur itaque, corrupti eligendi expedita, architecto
              deleniti possimus?
            </p>
          </div>
        </div>
      </div>
    </StepForm>
  );
}

function Step3({ formState }: StepProps) {
  return (
    <StepForm
      step={3}
      label="Additional Users"
      description="Invite users to manage your company with you. Provide their email addresses and an invitation will be sent to their inboxes."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 self-stretch gap-y-2 gap-x-10 pb-10 px-32">
        <FormInput
          defaultValue={formState.email1}
          label="User 1"
          type="email"
          name="email1"
        />
        <FormInput
          defaultValue={formState.email2}
          label="User 2"
          type="email"
          name="email2"
        />
      </div>
    </StepForm>
  );
}

interface FormState {
  // Step 1 : Personal informations
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  passwordConfirm?: string;

  // Step 2 : Business Information
  brandName?: string;
  brandType?: string;
  streetAddress?: string;
  city?: string;
  zipCode?: string;
  taxIdNumber?: string;

  // Step 3 : More users
  email1?: string;
  email2?: string;
}

export default function Register() {
  const [step, setStep] = useState(0);
  const [width, setWidth] = useState("calc(100% / 3)");
  const [formState, setFormState] = useState<FormState>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    switch (step) {
      case 1:
        setWidth("calc(100% / 3 * 2)");
        break;
      case 2:
        setWidth("100%");
        break;
      default:
        setWidth("calc(100% / 3)");
        break;
    }
  }, [step]);

  function next(event: FormEvent) {
    event.preventDefault();

    const form = new FormData(formRef.current!);
    form.forEach((v, k) => {
      setFormState((current) => ({ ...current, [k]: v }));
    });

    if (step < 2) {
      setStep(step + 1);
    } else {
      console.log(formState);
    }
  }

  function prev() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: `url(${waves.src})`,
          }}
          className="h-screen bg-no-repeat bg-cover"
        >
          <form
            ref={formRef}
            onSubmit={next}
            className="container h-full flex flex-col gap-10 py-10"
          >
            <header className="flex justify-between text-white">
              <div className="font-bold">Blured Logo</div>
              <h1>Create New Account</h1>
              <a href="#">Contact Us</a>
            </header>

            <div className="bg-white shadow-2xl rounded-3xl overflow-clip w-full self-center">
              <nav className="relative bg-gray-100 overflow-clip">
                {/* Progress indicator */}
                <div className="flex absolute top-0 bottom-0 right-0 left-0">
                  <div
                    style={{
                      width,
                    }}
                    className={`shadow-xl shadow-blue-400 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all ${
                      step === 2 ? "rounded-r-none" : "rounded-r-full"
                    }`}
                  ></div>
                </div>
                <ol className={style.steps}>
                  <li className={style.activeStep}>You Profile</li>
                  <li className={step >= 1 ? style.activeStep : ""}>
                    Business Information
                  </li>
                  <li className={step >= 2 ? style.activeStep : ""}>
                    Additional Users
                  </li>
                </ol>
              </nav>

              <div className="h-full overflow-auto pb-10">
                {step === 0 && <Step1 formState={formState} />}
                {step === 1 && <Step2 formState={formState} />}
                {step === 2 && <Step3 formState={formState} />}
              </div>
            </div>

            <footer className="flex justify-between items-center">
              <Button
                type="button"
                onClick={prev}
                className="hover:bg-blue-100 text-blue-500"
              >
                <IconArrowLeft /> Back to Login
              </Button>

              <div className="flex gap-3 flex-col md:flex-row">
                {step > 0 && (
                  <Button
                    onClick={prev}
                    type="button"
                    className="text-blue-600 bg-white border border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <IconArrowLeft /> Previous Step
                  </Button>
                )}

                {step < 2 && (
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Next Step <IconArrowRight />
                  </Button>
                )}

                {step === 2 && (
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Finish <IconCheck />
                  </Button>
                )}
              </div>
            </footer>
          </form>
        </section>
      </main>
    </>
  );
}
