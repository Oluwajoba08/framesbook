import React, { useState, useEffect, useRef, useCallback } from "react"

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface FetchOptions extends RequestInit {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: BodyInit | null
}

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useFetch<T = unknown>(url: string, options: FetchOptions = {}) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  const fetchData = useCallback(
    async (abortController: AbortController) => {
      // const abortController = new AbortController()
      try {
        // setState((prev) => ({ ...prev, loading: true, error: null }))
        const targetUrl = url.startsWith("/") && process.env.NODE_ENV === "production" ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : url

        const response = await fetch(targetUrl, {
          ...options,
          signal: abortController.signal,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setState({ data, loading: false, error: null })
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          // Request was aborted, no need to update state
          return
        }
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error("An unknown error occured"),
        })
      }
      return () => {
        abortController.abort()
      }
    },
    [url, options]
  )

  useEffect(() => {
    const abortController = new AbortController()
    fetchData(abortController)

    return () => {
      abortController.abort()
    }
  }, [fetchData])

  const refetch = useCallback(async () => {
    const abortController = new AbortController()
    fetchData(abortController)

    return () => {
      abortController.abort()
    }
  }, [fetchData])

  return { ...state, refetch }
}
