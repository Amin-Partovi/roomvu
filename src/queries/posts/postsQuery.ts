import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { ENDPOINTS, Request } from "@/utils";
import { Post } from "./types";

function getPosts() {
  return Request<Post[], Error>({ method: "GET", endpoint: ENDPOINTS.POSTS });
}

export function usePostsQuery() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    select: (data: AxiosResponse<Post[]>) => data.data,
  });
}
