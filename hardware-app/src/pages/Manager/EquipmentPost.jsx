import { useEffect, useState } from "react";
import EquipmentPostForm from "../../components/ManagerPanal/EquipmentPostForm";
import EquipmentList from "../../components/ManagerPanal/EquipmentList";

export default function EquipmentPost({ user }) {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <EquipmentPostForm user={user} onSuccess={() => setRefresh(!refresh)} />
      <EquipmentList key={refresh} user={user} />
    </div>
  );
}
