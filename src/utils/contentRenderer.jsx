import { COLORS } from "./constants";

/**
 * Parse inline bold text (**text**) in a string and convert to React elements
 * @param {string} text - Text with possible **bold** markers
 * @returns {Array} Array of text and <strong> elements
 */
function parseInlineBold(text) {
  const parts = [];
  let currentIndex = 0;
  const boldRegex = /\*\*(.+?)\*\*/g;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    // Add bold text
    parts.push(<strong key={match.index} style={{ fontWeight: 600 }}>{match[1]}</strong>);
    currentIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Render markdown-style content to React elements with proper spacing
 * @param {string} text - Markdown-formatted text
 * @returns {Array} Array of React elements
 */
export function renderContent(text) {
  const lines = text.split("\n");
  const elements = [];
  let listItems = [];
  let listType = null; // 'bullet' or 'numbered'

  const flushList = () => {
    if (listItems.length > 0) {
      const ListTag = listType === 'numbered' ? 'ol' : 'ul';
      elements.push(
        <ListTag 
          key={`list-${elements.length}`} 
          style={{
            marginLeft: "20px",
            marginTop: "12px",
            marginBottom: "12px",
            paddingLeft: "8px",
          }}
        >
          {listItems}
        </ListTag>
      );
      listItems = [];
      listType = null;
    }
  };

  lines.forEach((line, i) => {
    // Bold headers (e.g., **Header** atau **Header** dengan spasi)
    if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
      flushList();
      elements.push(
        <p
          key={`header-${i}`}
          style={{
            fontWeight: 700,
            color: COLORS.textPrimary,
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {line.trim().replace(/\*\*/g, "")}
        </p>
      );
      return;
    }

    // Bullet points (e.g., - Item)
    if (line.startsWith("- ")) {
      if (listType !== 'bullet') {
        flushList();
        listType = 'bullet';
      }
      const content = line.slice(2);
      listItems.push(
        <li
          key={`bullet-${i}`}
          style={{
            color: COLORS.textSecondary,
            fontSize: "14px",
            marginBottom: "6px",
            lineHeight: 1.7,
            paddingLeft: "4px",
          }}
        >
          {parseInlineBold(content)}
        </li>
      );
      return;
    }

    // Numbered list (e.g., 1. Item)
    if (/^\d+\./.test(line)) {
      if (listType !== 'numbered') {
        flushList();
        listType = 'numbered';
      }
      const content = line.replace(/^\d+\.\s/, "");
      listItems.push(
        <li
          key={`numbered-${i}`}
          style={{
            color: COLORS.textSecondary,
            fontSize: "14px",
            marginBottom: "6px",
            lineHeight: 1.7,
            paddingLeft: "4px",
          }}
        >
          {parseInlineBold(content)}
        </li>
      );
      return;
    }

    // Italic text (e.g., *italic*)
    if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
      flushList();
      elements.push(
        <p
          key={`italic-${i}`}
          style={{
            color: COLORS.textMuted,
            fontSize: "12px",
            fontStyle: "italic",
            marginTop: "12px",
            marginBottom: "8px",
          }}
        >
          {line.replace(/\*/g, "")}
        </p>
      );
      return;
    }

    // Empty line
    if (line.trim() === "") {
      flushList();
      elements.push(<div key={`spacer-${i}`} style={{ height: "8px" }} />);
      return;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        style={{
          color: COLORS.textSecondary,
          fontSize: "14px",
          lineHeight: 1.8,
          marginBottom: "8px",
        }}
      >
        {parseInlineBold(line)}
      </p>
    );
  });

  // Flush any remaining list items
  flushList();

  return elements;
}
