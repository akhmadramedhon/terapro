import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IsiDataUser() {
  const { user } = useUser();
  const saveUser = useMutation(api.users.saveUser);
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadUrl = await fetch("/api/upload-url").then((res) => res.text());
    const uploadRes = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": ktp.type },
      body: ktp,
    });
    const { storageId } = await uploadRes.json();

    await saveUser({
      userId: user.id,
      nama,
      nik,
      imageKtp: storageId,
      role: "user"
    });

    alert("Data berhasil disimpan!");
    navigate("/dashboard-user");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
      <input value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" />
      <input type="file" onChange={(e) => setKtp(e.target.files[0])} />
      <button type="submit">Simpan</button>
    </form>
  );
}
