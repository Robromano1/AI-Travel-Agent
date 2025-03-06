import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  departingDestination: string;
  arrivingDestination: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const resData = await fetch("http://localhost:8000/fetchAIAnswer", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      const response = await resData.json();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(watch("departingDestination"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("departingDestination", { required: true })} />
      {errors.departingDestination && (
        <span>Departing destination is required</span>
      )}
      <input
        type="text"
        {...register("arrivingDestination", { required: true })}
      />
      {errors.arrivingDestination && (
        <span>Arriving destination is required</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default Form;
