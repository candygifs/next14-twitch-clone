import { Check } from "lucide-react";
import { db } from "@/lib/db"; // Импорт вашего клиента базы данных

export const VerifiedMark = async () => {
  // Список username верифицированных пользователей
  const verifiedUsernames = [
    'hatikoinside',
    'z',
    // Добавляйте сюда username кого хотите заверифицировать
  ];

  try {
    // Получаем текущего пользователя (используйте ваш метод получения)
    const user = await db.user.findFirst({
      where: { 
        username: { 
          in: verifiedUsernames 
        } 
      },
      select: { username: true }
    });

    // Если пользователь найден в списке - показываем галочку
    if (user) {
      return (
        <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
          <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
        </div>
      );
    }
  } catch (error) {
    console.error("Verification check error", error);
  }

  return null;
}