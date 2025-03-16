import { useEffect } from "react";
import { signoutSuccess } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleSignout = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/signout", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (res.headers.get("content-type")?.includes("application/json")) {
          const data = await res.json();
          if (!res.ok) {
            console.error("Signout error:", data.message);
          } else {
            console.log("Signout successful:", data.message);
            dispatch(signoutSuccess());
            navigate("/login");
          }
        } else {
          console.error("Unexpected response format:", res);
        }
      } catch (error) {
        console.error("Signout failed:", error.message);
      }
    };

    if (currentUser) {
      handleSignout();
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, currentUser]);

  return null;
}
