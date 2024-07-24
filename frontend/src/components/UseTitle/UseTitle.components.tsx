import { useEffect } from "react";

export default function useTitle(showTitle: string): void {
  useEffect(() => {
    document.title = showTitle
  }, [showTitle]);
}