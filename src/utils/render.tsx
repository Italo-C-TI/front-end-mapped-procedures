import { render } from "@testing-library/react";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export function renderProviders(Component: React.FC, props: any) {
  return render(
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  );
}
