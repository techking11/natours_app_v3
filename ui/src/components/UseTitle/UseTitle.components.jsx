import { useEffect } from "react";

export default function useTitle(showTitle) {
  useEffect(() => {
    document.title = showTitle
  }, [showTitle]);
}