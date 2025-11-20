import { fetchData } from "@utils";
import { useEffect, useMemo, useState } from "react";

/**
 * Интерфейс, описывающий свойства компонента useFetch
 */
export interface UseFetchResult<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

/**
 * Кастомный хук для получения данных с сервера и приведения к формату:
 * `{ data, loading, error }`
 */
export default function useFetch<T = unknown>(
	url: string,
	options?: RequestInit,
): UseFetchResult<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const memoizedOptions = useMemo(() => options, [options]);

	useEffect(() => {
		if (!url) {
			setError(new Error("URL is required"));
			setLoading(false);
			return;
		}

		const abortController = new AbortController();
		let isMounted = true;

		const getData = async () => {
			try {
				setLoading(true);
				setError(null);

				const result = await fetchData<T>(url, {
					...memoizedOptions,
					signal: abortController.signal,
				});

				if (isMounted) setData(result as T);
			} catch (err) {
				if (isMounted && err instanceof Error) {
					if (err.name !== "AbortError") setError(err);
				}
			} finally {
				if (isMounted) setLoading(false);
			}
		};

		getData();

		return () => {
			isMounted = false;
			abortController.abort();
		};
	}, [url, memoizedOptions]);

	return { data, loading, error };
}
