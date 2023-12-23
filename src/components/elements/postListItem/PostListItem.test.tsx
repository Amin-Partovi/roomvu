import { render, screen, fireEvent } from "@testing-library/react";

import PostListItem from "./PostListItem";
import { convertIdToDate } from "@/utils";

const mockPost = {
  id: 1,
  title: "mock title",
  body: "mock body",
  userId: 1,
};

describe("PostListItem component", () => {
  test("should display title, body and date of the post", () => {
    render(<PostListItem post={mockPost} />);
    const title = screen.getByText(mockPost.title);
    const body = screen.getByText(mockPost.body);
    const date = screen.getByText(convertIdToDate(mockPost.id));
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test("changes style on mouseEnter and MouseLeave", () => {
    render(<PostListItem post={mockPost} />);
    const postItem = screen.getByTestId("post-item");
    fireEvent.mouseEnter(postItem);

    expect(postItem).toHaveClass("hovered");

    fireEvent.mouseLeave(postItem);
    expect(postItem).toHaveClass("hovered");
  });

  test("has a correct link", () => {
    render(<PostListItem post={mockPost} />);
    const postItem = screen.getByTestId("post-item");
    const href = postItem.getAttribute("href");
    expect(href).toBe(`/${mockPost.id}`);
  });
});
