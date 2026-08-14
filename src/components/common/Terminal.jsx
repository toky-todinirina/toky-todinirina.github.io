import { useEffect, useRef, useState } from "react";
import { FaTerminal, FaTimes } from "react-icons/fa";
import "../../styles/components/terminal.scss";

const COMMANDS = [
  "help",
  "about",
  "skills",
  "services",
  "projects",
  "experience",
  "contact",
  "resume",
  "github",
  "linkedin",
  "whoami",
  "ask",
  "clear",
];
const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "output",
      content: [
        "Welcome to Toky's interactive portfolio.",
        "Type 'help' to see available commands.",
      ],
    },
  ]);

  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const addOutput = (content) => {
    setHistory((prev) => [
      ...prev,
      {
        type: "output",
        content: Array.isArray(content) ? content : [content],
      },
    ]);
  };

  const askAI = async (message) => {
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Terminal command failed");
      }

      addOutput(data.answer.split("\n"));
    } catch (error) {
      addOutput(["Terminal assistant error:", error.message]);
    } finally {
      setIsThinking(false);
    }
  };

  const executeCommand = (rawCommand) => {
    const trimmedCommand = rawCommand.trim();
    const command = trimmedCommand.toLowerCase();

    if (!command) return;

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        content: command,
      },
    ]);

    setCommandHistory((prev) => {
      const updated = [...prev, command];
      return updated.slice(-50);
    });

    setHistoryIndex(-1);

    if (command.startsWith("ask ")) {
      const question = trimmedCommand.slice(4).trim();

      if (!question) {
        addOutput(["Usage: ask <your question>"]);
        return;
      }

      addOutput(["Terminal is thinking..."]);
      askAI(question);
      return;
    }

    switch (command) {
      case "help":
        addOutput([
          "Available commands:",
          "  ask <question> : Ask the AI assistant",
          "",
          "  about       → About me",
          "  skills      → Technical skills",
          "  services    → My services",
          "  projects    → My projects",
          "  experience  → My experience",
          "  contact     → Contact me",
          "  resume      → Open my resume",
          "  github      → Open GitHub",
          "  linkedin    → Open LinkedIn",
          "  whoami      → Who is Toky?",
          "  clear       → Clear terminal",
        ]);
        break;

      case "ask":
        addOutput(["Usage: ask <your question>"]);
        break;

      case "about":
        addOutput([
          "Navigating to About...",
        ]);

        setTimeout(() => {
          scrollToSection("about");
        }, 150);

        break;

      case "skills":
        addOutput([
          "Loading technical skills...",
        ]);

        setTimeout(() => {
          scrollToSection("skills");
        }, 150);

        break;

      case "services":
        addOutput([
          "Loading available services...",
        ]);

        setTimeout(() => {
          scrollToSection("services");
        }, 150);

        break;

      case "projects":
        addOutput([
          "Loading projects...",
        ]);

        setTimeout(() => {
          scrollToSection("projects");
        }, 150);

        break;

      case "experience":
        addOutput([
          "Loading experience...",
        ]);

        setTimeout(() => {
          scrollToSection("experience");
        }, 150);

        break;

      case "contact":
        addOutput([
          "Opening contact section...",
        ]);

        setTimeout(() => {
          scrollToSection("contact");
        }, 150);

        break;

      case "whoami":
        addOutput([
          "Toky Todinirina",
          "",
          "Front-End Developer",
          "Research Assistant",
          "",
          "Interested in technology, research, design and digital experiences.",
        ]);
        break;

      case "resume":
        addOutput([
          "Opening resume...",
        ]);

        setTimeout(() => {
          window.open("/resume.pdf", "_blank");
        }, 300);

        break;

      case "github":
        addOutput([
          "Opening GitHub...",
        ]);

        setTimeout(() => {
          window.open(
            "https://github.com/",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);

        break;

      case "linkedin":
        addOutput([
          "Opening LinkedIn...",
        ]);

        setTimeout(() => {
          window.open(
            "https://www.linkedin.com/",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);

        break;

      case "clear":
        setHistory([]);
        break;

      default:
        addOutput([
          `command not found: ${command}`,
          "",
          "Type 'help' to see available commands.",
        ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commandHistory.length) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commandHistory.length || historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const value = input.toLowerCase();

      const matches = COMMANDS.filter((command) =>
        command.startsWith(value)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop =
        terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      {!isOpen && (
        <button
          className="terminal-launcher"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le terminal interactif"
          aria-expanded="false"
          aria-controls="portfolio-terminal"
        >
          <FaTerminal aria-hidden="true" />
          <span>Terminal</span>
        </button>
      )}

      {isOpen && (
    <section
      id="portfolio-terminal"
      className="terminal-section"
      aria-label="Terminal interactif"
    >
      <div className="terminal-container">
        <div className="terminal-window" onClick={focusTerminal}>
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="terminal-control terminal-control--red" />
              <span className="terminal-control terminal-control--yellow" />
              <span className="terminal-control terminal-control--green" />
            </div>

            <div className="terminal-title">
              toky@portfolio:~
            </div>

            <button
              className="terminal-close"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(false);
              }}
              aria-label="Fermer le terminal"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          <div
            className="terminal-body"
            ref={terminalBodyRef}
          >
            {history.map((item, index) => {
              if (item.type === "command") {
                return (
                  <div
                    className="terminal-line terminal-command"
                    key={index}
                  >
                    <span className="terminal-prompt">
                      toky@portfolio:~$
                    </span>

                    <span>{item.content}</span>
                  </div>
                );
              }

              return (
                <div
                  className="terminal-output"
                  key={index}
                >
                  {item.content.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line || "\u00A0"}
                    </div>
                  ))}
                </div>
              );
            })}

            <form
              className="terminal-input-line"
              onSubmit={handleSubmit}
            >
              <span className="terminal-prompt">
                toky@portfolio:~$
              </span>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                disabled={isThinking}
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command"
                aria-busy={isThinking}
              />

              <span className="terminal-cursor" />
            </form>
          </div>
        </div>

        <p className="terminal-hint">
          Type <strong>help</strong> to explore the portfolio.
        </p>
      </div>
    </section>
      )}
    </>
  );
}
export default Terminal;
