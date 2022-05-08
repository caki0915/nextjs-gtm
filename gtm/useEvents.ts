import { useRouter } from "next/router";
import { useEffect } from "react";

const useEvents = () => {
  const router = useRouter();
  useEffect(() => {
    const onRouteChangeComplete = (url: string) => {
      window.dataLayer?.push({
        event: "route_complete",
        url,
      });
    };
    const onRouteChangeError = (error: { cancelled: boolean }, url: string) => {
      // Don't fire on cancelled routes
      if (error.cancelled) return;
      window.dataLayer?.push({
        event: "route_error",
        url,
        error: JSON.stringify(error),
      });
    };
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default useEvents;
