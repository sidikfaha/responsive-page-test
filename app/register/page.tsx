"use client";

import waves from "@/assets/waves.svg";
import style from "./style.module.css";
import { FormEvent, useEffect, useState } from "react";
import { Button, FormInput, IconArrowLeft, IconArrowRight } from "@/components";

export default function Register() {
  const [step, setStep] = useState(0);
  const [width, setWidth] = useState("calc(100% / 3)");

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
    event.preventDefault()
    if (step < 3) {
      setStep(step + 1);
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
          <form onSubmit={next} className="container h-full flex flex-col gap-10 py-10">
            <header className="flex justify-between text-white">
              <div className="font-bold">Blured Logo</div>
              <h1>Create New Account</h1>
              <a href="#">Contact Us</a>
            </header>

            <div className="bg-white shadow-2xl rounded-3xl overflow-clip w-full self-center">
              <nav className="relative bg-gray-100">
                {/* Progress indicator */}
                <div className="flex absolute top-0 bottom-0 right-0 left-0">
                  <div
                    style={{
                      width,
                    }}
                    className={`bg-gradient-to-r from-cyan-300 to-blue-400 transition-all ${
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
                <div className="p-10 flex flex-col items-center gap-10">
                  <div className="text-center flex flex-col gap-3 lg:w-1/2">
                    <span className="text-xl text-neutral-600">Step 1</span>
                    <h1 className="text-3xl">Your Profile</h1>
                    <p>
                      Enter the login information for your account. You will be
                      able to create additional users after registering.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 self-stretch gap-y-2 gap-x-10 pb-10 px-32">
                    <FormInput label="First Name" name="firstName" required />
                    <FormInput label="Last Name" name="lastName" required />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                    />
                    <FormInput
                      label="Password"
                      name="password"
                      type="password"
                      required
                    />
                    <FormInput
                      label="Confirm Password"
                      name="passwordConfirm"
                      type="password"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <footer className="flex justify-between items-center">
              <Button className="hover:bg-blue-100 text-blue-500">
                <IconArrowLeft /> Back to Login
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Next Step <IconArrowRight />
              </Button>
            </footer>
          </form>
        </section>
      </main>
    </>
  );
}
