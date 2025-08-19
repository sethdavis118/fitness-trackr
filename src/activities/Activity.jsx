import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import { useEffect, useState } from "react";

export default function Activity({ activity }) {
  const { token } = useAuth();
  const { mutate, error } = useMutation(
    "DELETE",
    `/activities/${activity.id}`,
    ["activities"]
  );
  const [message, setMessage] = useState("Delete");

  function deleteActivity() {
    mutate();
  }

  useEffect(() => {
    if (error) {
      setMessage(
        "You must be the same user who created this activity to perform this action"
      );
    }
  }, [error]);

  return (
    <>
      <li>{activity.name}</li>
      <div>
        {token ? <button onClick={deleteActivity}>{message}</button> : null}
      </div>
    </>
  );
}
