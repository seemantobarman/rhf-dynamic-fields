import { useForm, useFieldArray } from 'react-hook-form';

function App() {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'coTravellers',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Main Traveller Details</h1>
      {/* Your main traveller fields go here */}

      <h2>Co-Traveller Details</h2>
      {fields.map((traveller, index) => (
        <div key={traveller.id}>
          <input
            {...register(`coTravellers[${index}].name`)}
            placeholder="Name"
            defaultValue={traveller.name} // if you have default values
          />
          <input
            {...register(`coTravellers[${index}].email`)}
            placeholder="Email"
            defaultValue={traveller.email}
          />
          {/* Add more fields as needed */}

          <button type="button" onClick={() => remove(index)}>
            Remove Traveller
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({})}>
        Add More Traveller
      </button>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
