import { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
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
        "Bienvenue sur mon portfolio interactif !",
        "",
        "Vous pouvez directement poser votre question.",
        "Exemple : « Quels sont tes projets ? »",
        "",
        "Tapez 'help' pour voir les commandes disponibles.",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "La requête a été rejetée."
        );
      }

      addOutput(data.answer.split("\n"));
    } catch (error) {
      addOutput([
        "Erreur de l'Assistant du Terminal :",
        error.message,
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const executeCommand = (rawCommand) => {
    const trimmedCommand = rawCommand.trim();

    if (!trimmedCommand) return;

    const command = trimmedCommand.toLowerCase();

    setCommandHistory((prev) => {
      const updated = [...prev, trimmedCommand];
      return updated.slice(-50);
    });

    setHistoryIndex(-1);

    switch (command) {
      case "help":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: [
              "Commandes disponibles :",
              "",
              "  help        → Afficher cette aide",
              "  about       → À propos de Toky",
              "  skills      → Compétences techniques",
              "  services    → Services proposés",
              "  projects    → Projets réalisés",
              "  experience  → Expérience professionnelle",
              "  contact     → Informations de contact",
              "  resume      → Ouvrir le CV",
              "  github      → Ouvrir GitHub",
              "  linkedin    → Ouvrir LinkedIn",
              "  whoami      → Présentation de Toky",
              "  clear       → Effacer le terminal",
              "",
              "Vous pouvez également poser directement une question.",
              "Exemple : Quels sont tes projets ?",
            ],
          },
        ]);
        return;

      case "about":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Navigation vers la section À propos..."],
          },
        ]);

        setTimeout(() => {
          scrollToSection("about");
        }, 150);

        return;

      case "skills":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Lecture des compétences..."],
          },
        ]);

        setTimeout(() => {
          scrollToSection("competences");
        }, 150);

        return;

      case "services":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Lecture des services..."],
          },
        ]);

        setTimeout(() => {
          scrollToSection("services");
        }, 150);

        return;

      case "projects":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Lecture des projets..."],
          },
        ]);

        setTimeout(() => {
          scrollToSection("projects");
        }, 150);

        return;

      case "experience":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Lecture de l'expérience..."],
          },
        ]);

        setTimeout(() => {
          scrollToSection("experience");
        }, 150);

        return;

      case "contact":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: [
              "Navigation vers la section de contact...",
            ],
          },
        ]);

        setTimeout(() => {
          scrollToSection("contact");
        }, 150);

        return;

      case "whoami":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: [
              "Toky Todinirina",
              "",
              "Front-End Developer",
              "Research Assistant",
              "",
              "Interested in technology, research, design and digital experiences.",
            ],
          },
        ]);

        return;

      case "resume":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Ouverture du CV..."],
          },
        ]);

        setTimeout(() => {
          window.open(
            "/assets/resume.pdf",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);

        return;

      case "github":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Ouverture de GitHub..."],
          },
        ]);

        setTimeout(() => {
          window.open(
            "https://github.com/toky-todinirina",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);

        return;

      case "linkedin":
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
          {
            type: "output",
            content: ["Ouverture de LinkedIn..."],
          },
        ]);

        setTimeout(() => {
          window.open(
            "https://www.linkedin.com/in/toky-todinirina",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);

        return;

      case "clear":
        setHistory([]);
        return;

      default:
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            content: trimmedCommand,
          },
        ]);

        askAI(trimmedCommand);
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isThinking) return;

    const value = input.trim();

    if (!value) return;

    executeCommand(value);
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

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commandHistory.length || historyIndex === -1) {
        return;
      }

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const value = input.toLowerCase();

      if (!value) return;

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
  }, [history, isThinking]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
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
          <FaRobot aria-hidden="true" />
          <span>Bot</span>
        </button>
      )}

      {isOpen && (
        <section
          id="portfolio-terminal"
          className="terminal-section"
          aria-label="Terminal interactif"
        >
          <div className="terminal-container">
            <div
              className="terminal-window"
              onClick={focusTerminal}
            >
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-control terminal-control--red" />
                  <span className="terminal-control terminal-control--yellow" />
                  <span className="terminal-control terminal-control--green" />
                </div>

                <div className="terminal-title">
                  Bot Assistant
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
                          Mr Bot
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
                      {item.content.map(
                        (line, lineIndex) => (
                          <div key={lineIndex}>
                            {line || "\u00A0"}
                          </div>
                        )
                      )}
                    </div>
                  );
                })}

                {isThinking && (
                  <div className="terminal-output terminal-thinking">
                    <span>Mr Bot réfléchit</span>

                    <span className="terminal-thinking-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </div>
                )}

                <form
                  className="terminal-input-line"
                  onSubmit={handleSubmit}
                >
                  <span className="terminal-prompt">
                    Prompt:~$
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
                    placeholder={
                      isThinking
                        ? "Assistant en train de réfléchir..."
                        : "Écrivez votre question..."
                    }
                    aria-label="Écrivez votre question"
                    aria-busy={isThinking}
                  />

                  <span className="terminal-cursor" />
                </form>
              </div>
            </div>

            <p className="terminal-hint">
              Tapez <strong>help</strong> pour voir les
              commandes disponibles.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Terminal;