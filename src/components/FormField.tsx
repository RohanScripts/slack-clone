import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FieldConfig {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  regex?: {
    value: RegExp;
    message: string;
  };
}

interface FormBuilderProps {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<any>;
  submitText?: string;
}

export const FormField = ({
  fields,
  onSubmit,
  submitText,
}: FormBuilderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-6">
      {fields.map((field) => (
        <div key={field.id}>
          <Label
            htmlFor={field.id}
            className="mb-1 text-sm font-medium text-gray-700"
          >
            {field.label}
          </Label>
          <Input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
            id={field.id}
            type={field.type}
            {...register(field.id, {
              required: field.required ? `${field.label} is required` : false,
              pattern: field.regex,
            })}
          />
          {errors[field.id] && (
            <p className="text-sm text-red-500">
              {errors[field.id]?.message?.toString()}
            </p>
          )}
        </div>
      ))}
      <Button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        {submitText}
      </Button>
    </form>
  );
};
