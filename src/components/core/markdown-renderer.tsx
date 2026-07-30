import { Anchor, Divider, List, ListItem, Title } from "@mantine/core";
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

// ========================================================================= //
/** */
type MarkdownProps = {
  content: string;
  components?: Components;
};

/** */
export const MarkdownRenderer: React.FC<MarkdownProps> = ({ content, components }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => <Title order={1} {...props} />,
        h2: ({ ...props }) => <Title order={2} {...props} />,
        h3: ({ ...props }) => <Title order={3} {...props} />,
        hr: ({ ...props }) => <Divider my="md" {...props} />,
        a: (
          { href, children, ref, key, ...props }, // eslint-disable-line @typescript-eslint/no-unused-vars
        ) => (
          <Anchor href={href} {...props} variant="link" underline="never">
            {children}
          </Anchor>
        ),
        ul: ({ children }) => <List listStyleType="disc">{children}</List>,
        ol: ({ children }) => <List type="ordered">{children}</List>,
        li: ({ children }) => <ListItem>{children}</ListItem>,
        ...components, // Allow overriding or extending
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
