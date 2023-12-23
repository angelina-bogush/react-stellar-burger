import styles from "./ProfilePage.module.css";
import { ProfileForm } from "../../components/profile/profileForm/ProfileForm";
import { ProfileNav } from "../../components/profile/profileNav/profileNav";
export const ProfilePage = () => {
  return (
    <div className={styles.pageContainer}>
      <ProfileNav />
      <ProfileForm />
    </div>
  );
};
