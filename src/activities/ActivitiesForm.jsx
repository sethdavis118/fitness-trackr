import useMutation from "../api/useMutation";

export default function ActivitiesForm() {
  const { mutate, error } = useMutation("POST", "/activities", ["activities"]);

  const submit = (FormData) => {
    const activity = {
      name: FormData.get("name"),
      description: FormData.get("description"),
    };
    mutate(activity);
  };

  return (
    <>
      <h2>Add new activity</h2>
      {error ? <p>There was an error. Please try again.</p> : null}
      <form action={submit}>
        <label>Name</label>
        <input type="text" placeholder="Name" name="name" />
        <label>Description</label>
        <input type="text" placeholder="Description" name="description" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
