import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    
    if (authStatus !== authentication) navigate("/");
    setLoader(false);
  }, [authentication, authStatus, navigate]);
  return loader ? (
    <div className="flex justify-center content-center h-screen">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Protected;