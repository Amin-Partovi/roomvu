import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import type { UseQueryResult } from "@tanstack/react-query";

import PostDetail from "./page";
import { usePostQuery } from "@/queries/posts/postQuery";
import { Post } from "@/queries/posts/types";

jest.mock("../../queries/posts/postQuery", () => ({
  usePostQuery: jest.fn(),
}));

describe("Home component", () => {
  test("renders loading spinner while fetching data", async () => {
    const mockUsePostsQuery = usePostQuery as jest.MockedFunction<
      () => Partial<UseQueryResult<Post, Error>>
    >;

    // Mock usePostsQuery to simulate loading state
    mockUsePostsQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<PostDetail params={{ id: 1 }} />);

    // Ensure the loading spinner is rendered
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders posts when data is available", async () => {
    const mockPost = { id: 1, title: "Post 1", body: "Body 1", userId: 1 };

    const mockUsePostsQuery = usePostQuery as jest.MockedFunction<
      () => Partial<UseQueryResult<Post, Error>>
    >;

    // Mock usePostsQuery to simulate successful data fetching
    mockUsePostsQuery.mockReturnValue({
      data: mockPost,
      isLoading: false,
    });

    render(<PostDetail params={{ id: 1 }} />);

    // Ensure posts are rendered
    expect(screen.getByText("Post 1")).toBeInTheDocument();
  });

  // Ensure loading spinner is not in the document after the data is fetched

  expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
});
