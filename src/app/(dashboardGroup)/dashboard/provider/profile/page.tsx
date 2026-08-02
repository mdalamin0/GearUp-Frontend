
import ProfileCard from "../../_components/shared/ProfileCard";
import ProfileHeader from "../../_components/shared/ProfileHeader";
import { getMe } from "@/services/getMe";

const ProviderProfilePage = async () => {
  const user = await getMe();

  return (
    <div className="space-y-8">
      <ProfileHeader />

      <ProfileCard user={user.data} />
    </div>
  );
};

export default ProviderProfilePage;
