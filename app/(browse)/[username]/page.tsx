import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { StreamPlayer } from "@/components/stream-player";

interface UserPageProps {
  params: {
    username: string;
  };
};

const UserPage = async ({
  params
}: UserPageProps) => {
  // Получаем данные пользователя по username
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  // Проверяем статус "подписки" и "блокировки"
  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  // Проверяем статус "верификации"
  const isVerified = user.verified;

  return ( 
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>
        {user.username}{" "}
        {isVerified && <span style={{ color: "green", fontSize: "20px" }}>✔️</span>}
      </h1>
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing={isFollowing}
      />
    </div>
  );
}
 
export default UserPage;
