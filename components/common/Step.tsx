import { ReactNode } from "react";
import { FormInput } from "..";

interface Props {
  step: number;
  label: string;
  description: string;
  children: ReactNode;
}

export function StepForm({ step, label, description, children }: Props) {
  return (
    <>
      <div className="p-10 flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3 lg:w-1/2">
          <span className="text-xl text-neutral-600">Step {step}</span>
          <h1 className="text-3xl">{label}</h1>
          <p>
            {description}
          </p>
        </div>

        {children}
      </div>
    </>
  );
}
