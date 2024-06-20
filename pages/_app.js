import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../util/query-client";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
