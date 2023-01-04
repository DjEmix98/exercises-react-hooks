import { useContext } from "react";
import { AvatarContext } from "../hooks/useAvatarContext";

export function Avatar() {
  const { user, userIcon } = useContext(AvatarContext);
  return (
    <div className="exercise__container mt-4">
      <section>
      <h4 className="counter__title mb-3">Exercise 4 - Avatar</h4>
        <img src={userIcon} alt={"user"} height={40} />
        <p>User: {user}</p>
      </section>
    </div>
  );
}
