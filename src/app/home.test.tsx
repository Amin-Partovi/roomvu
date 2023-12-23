import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import type { UseQueryResult } from "@tanstack/react-query";

import Home from "./page";
import { usePostsQuery } from "@/queries/posts/postsQuery";
import { Post } from "@/queries/posts/types";

jest.mock("../queries/posts/postsQuery", () => ({
  usePostsQuery: jest.fn(),
}));

describe("Home component", () => {
  test("renders loading spinner while fetching data", async () => {
    const mockUsePostsQuery = usePostsQuery as jest.MockedFunction<
      () => Partial<UseQueryResult<Post[], Error>>
    >;

    // Mock usePostsQuery to simulate loading state
    mockUsePostsQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<Home />);

    // Ensure the loading spinner is rendered
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders posts when data is available", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1", body: "Body 1", userId: 1 },
      { id: 2, title: "Post 2", body: "Body 2", userId: 1 },
    ];

    const mockUsePostsQuery = usePostsQuery as jest.MockedFunction<
      () => Partial<UseQueryResult<Post[], Error>>
    >;

    // Mock usePostsQuery to simulate successful data fetching
    mockUsePostsQuery.mockReturnValue({
      data: mockPosts,
      isLoading: false,
    });

    render(<Home />);

    // Ensure posts are rendered
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  // Ensure loading spinner is not in the document after the data is fetched

  expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
});
