import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { ENDPOINTS, Request } from "@/utils";
import { Post } from "./types";

function getPost({ id }: { id: number }) {
  return Request<Post, Error>({
    method: "GET",
    endpoint: ENDPOINTS.POST({ id }),
  });
}

export function usePostQuery({ id }: { id: number }) {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost({ id }),
    select: (data: AxiosResponse<Post>) => data.data,
  });
}
