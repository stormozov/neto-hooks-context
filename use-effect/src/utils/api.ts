/**
 * Универсальная утилита для получения данных с сервера
 * 
 * @description
 * Использует fetch API.
 */
export const fetchData = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};
