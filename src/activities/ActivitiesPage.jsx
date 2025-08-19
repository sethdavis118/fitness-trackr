import { useEffect, useState } from "react";
import useQuery from "../api/useQuery";
import Activity from "./Activity";
import ActivitiesForm from "./ActivitiesForm";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const { token } = useAuth();

  const { data } = useQuery("/activities", "activities");

  console.log(data);
  useEffect(() => {
    setActivities(data);
  }, [data]);
  console.log(activities);
  return (
    <>
      <h1>Activities</h1>
      <div>
        {activities?.map((activity) => (
          <Activity activity={activity} />
        ))}
      </div>
      {token ? <ActivitiesForm></ActivitiesForm> : null}
    </>
  );
}
