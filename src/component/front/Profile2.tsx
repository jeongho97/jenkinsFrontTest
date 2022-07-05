import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIload } from "../../app/Auths";
const Profile2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(APIload("/v2/user/me"));
  }, []);

  return <div>profile2</div>;
};
export default Profile2;

/*
{
           
    console.log(ok.data);
    console.log(ok.data.length);
    console.log(ok.data.length);
    console.log(ok.data.length === 0);
    console.log(ok.data.length === 0);
    console.log(ok.data.length === 0);

    if (ok.data.legth === 0) {
        console.log(data.id);
        await axios({
            method: "post",
            url: "http://localhost:8000/user",
            data: {
                userId: data.id,
                password: data.id,
                name: data.properties.nickname,
                img: data.properties.profile_image,
            },
            headers: { "Content-Type": "application/json" },
        });
    } else {
        localStorage.setItem("loginUser", ok.data.id);
    }
} catch (err) {
    console.log(err);
}
*/
