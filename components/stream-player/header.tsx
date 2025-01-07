"use client";

import { VerifiedMark } from "@/components/verified-mark";
import { UserAvatar } from "@/components/user-avatar";
import { FollowButton } from "./follow-button";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  imageUrl: string;
  isFollowing: boolean;
  name: string;
  verifiedMark?: React.ReactNode;
}

export const Header = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  imageUrl,
  isFollowing,
  name,
  verifiedMark
}: HeaderProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center">
      <UserAvatar
        imageUrl={imageUrl}
        username={hostName}
        size="lg"
        isLive={false}
      />
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg font-semibold">{hostName}</h2>
          {verifiedMark}
          {!isHost && (
            <FollowButton
              hostIdentity={hostIdentity}
              isFollowing={isFollowing}
            />
          )}
        </div>
        <p className="text-sm font-light">{name}</p>
      </div>
    </div>
  );
};

export const HeaderSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center">
      <div className="w-32 h-32 rounded-full animate-pulse bg-gray-700" />
      <div className="space-y-2 flex-1">
        <div className="h-6 w-36 rounded animate-pulse bg-gray-700" />
        <div className="h-4 w-24 rounded animate-pulse bg-gray-700" />
      </div>
    </div>
  );
};