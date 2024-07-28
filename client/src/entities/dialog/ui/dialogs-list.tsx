import { Link } from "react-router-dom";
import { useGetDialogsQuery } from "../model/dialog.api"
import { generatePath } from "react-router";

export const DialogsList = () => {
  const { data, isLoading } = useGetDialogsQuery();

  if (isLoading) return <div>Loading...</div>;

  return data.map(dialog => (
    <Link to={generatePath("/dialogs/:dialogId", { dialogId: dialog.id })}>
      <div>
        {dialog.title}
      </div>
    </Link>
  ))

}