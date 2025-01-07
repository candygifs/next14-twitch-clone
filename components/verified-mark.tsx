import { Check } from "lucide-react";

const VERIFIED_USERS = [
  'hatikoinside',
  'user_2rGryq0M83Xv24oO53FJ4X4ozCa'
];

export const VerifiedMark = ({ userId }: { userId: string }) => {
  if (!VERIFIED_USERS.includes(userId)) {
    return null;
  }

  return (
    <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
      <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
    </div>
  );
};