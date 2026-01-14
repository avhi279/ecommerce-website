import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet, Navigate } from "react-router-dom";  
import axios from "axios";
import Spinner from "../spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(null); // null so that we can show spinner while loading
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/admin-auth", {
          headers: {
            Authorization: `Bearer ${auth?.token}`,  // ✅ FIXED (Bearer prefix added)
          },
        });
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.log(error);
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
    else setOk(false);
  }, [auth?.token]);

  // ✅ Show loader while checking
  if (ok === null) return <Spinner />;

  return ok ? <Outlet /> : <Navigate to="/" />;
}
