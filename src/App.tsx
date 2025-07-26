
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewIndex from "./pages/NewIndex";
import NotFound from "./pages/NotFound";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewIndex />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
