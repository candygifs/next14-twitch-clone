"use client";

import { VerifiedMark } from "@/components/verified-mark";
import { BioModal } from "./bio-modal";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
  isVerified?: boolean;
}

export const AboutCard = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  bio,
  followedByCount,
  isVerified = false,
}: AboutCardProps) => {
  // Жестко задаем список верифицированных пользователей
  const verifiedUsers = [
    "user_2rGryq0M83Xv24oO53FJ4X4ozCa", 
    "hatikoinside",
    "клоун_стримера_id3"
  ];

  // Проверяем по ID
  const isReallyVerified = verifiedUsers.includes(hostIdentity);

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  const followedByLabel = followedByCount === 1 ? "follower" : "followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl bg-background p-6 lg:p-10 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
            About {hostName}
            {isReallyVerified && <VerifiedMark />}
          </div>
          {isHost && (
            <BioModal initialValue={bio} />
          )}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">
            {followedByCount}
          </span> {followedByLabel}
        </div>
        <p className="text-sm">
          {bio || "This user prefers to keep an air of mystery about them."}
        </p>
      </div>
    </div>
  );
};