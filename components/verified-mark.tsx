import { Check } from "lucide-react";

// Список username верифицированных пользователей
const VERIFIED_USERNAMES = [
  'hatikoinside',
  'second_username',
  // Добавляйте сюда username кого хотите заверифицировать
];

export const VerifiedMark = ({ username }: { username?: string } = {}) => {
  // Если username передан и есть в списке - показываем галочку
  if (username && VERIFIED_USERNAMES.includes(username)) {
    return (
      <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
        <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
      </div>
    );
  }

  return null;
}