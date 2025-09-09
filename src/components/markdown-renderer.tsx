import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { Title, Divider } from "@mantine/core";

// ========================================================================= //
type MarkdownProps = {
  content: string;
  components?: Components;
};

// ========================================================================= //
export const MarkdownRenderer: React.FC<MarkdownProps> = ({ content, components }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => <Title order={1} {...props} />,
        h2: ({ ...props }) => <Title order={2} {...props} />,
        h3: ({ ...props }) => <Title order={3} {...props} />,
        hr: ({ ...props }) => <Divider my="md" {...props} />,
        ...components, // Allow overriding or extending
      }}
    >
      {content}
    </ReactMarkdown>
  );
};