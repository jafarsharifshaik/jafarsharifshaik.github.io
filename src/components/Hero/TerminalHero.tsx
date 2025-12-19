import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Command {
  prompt: string;
  output: string | string[];
  delay?: number;
}

const commands: Command[] = [
  {
    prompt: '$ whoami',
    output: 'Jafar Sharif Shaik',
    delay: 500,
  },
  {
    prompt: '$ cat role.txt',
    output: 'Senior Data Engineer @ Kraft Heinz',
    delay: 400,
  },
  {
    prompt: '$ ls skills/',
    output: ['python/', 'snowflake/', 'dbt/', 'airflow/', 'aws/', 'spark/'],
    delay: 300,
  },
  {
    prompt: '$ cat certifications.md',
    output: [
      '- Snowflake SnowPro Core',
      '- AWS Data Engineer Associate',
      '- AWS Solutions Architect',
      '- Databricks Spark 3.0',
      '- Astronomer Airflow',
    ],
    delay: 400,
  },
  {
    prompt: '$ ./build_pipeline.sh',
    output: [
      '✓ Extracting from sources...',
      '✓ Transforming with dbt...',
      '✓ Loading to Snowflake...',
      '✓ Pipeline complete! 50% faster than before.',
    ],
    delay: 600,
  },
];

export default function TerminalHero() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<
    { prompt: string; output: string | string[]; isTyping: boolean }[]
  >([]);
  const [isTypingPrompt, setIsTypingPrompt] = useState(true);
  const [typedPrompt, setTypedPrompt] = useState('');

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const currentCommand = commands[currentCommandIndex];

    // Type the prompt character by character
    if (isTypingPrompt) {
      if (typedPrompt.length < currentCommand.prompt.length) {
        const timeout = setTimeout(() => {
          setTypedPrompt(currentCommand.prompt.slice(0, typedPrompt.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing prompt, show output after delay
        const timeout = setTimeout(() => {
          setDisplayedCommands((prev) => [
            ...prev,
            { prompt: currentCommand.prompt, output: currentCommand.output, isTyping: false },
          ]);
          setIsTypingPrompt(true);
          setTypedPrompt('');
          setCurrentCommandIndex((prev) => prev + 1);
        }, currentCommand.delay || 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCommandIndex, isTypingPrompt, typedPrompt]);

  // Restart animation
  const handleRestart = () => {
    setCurrentCommandIndex(0);
    setDisplayedCommands([]);
    setTypedPrompt('');
    setIsTypingPrompt(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="w-full max-w-3xl">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="terminal"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-4 text-sm text-slate-400 font-mono">
              jafar@data-engineer: ~
            </span>
            {currentCommandIndex >= commands.length && (
              <button
                onClick={handleRestart}
                className="ml-auto text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                ↻ Replay
              </button>
            )}
          </div>

          {/* Terminal Body */}
          <div className="terminal-body overflow-hidden">
            <AnimatePresence>
              {displayedCommands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3"
                >
                  <div className="terminal-prompt">{cmd.prompt}</div>
                  <div className="terminal-output mt-1">
                    {Array.isArray(cmd.output) ? (
                      cmd.output.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {line}
                        </motion.div>
                      ))
                    ) : (
                      <span>{cmd.output}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Currently typing prompt */}
            {currentCommandIndex < commands.length && (
              <div className="flex items-center">
                <span className="terminal-prompt">{typedPrompt}</span>
                <span className="terminal-cursor" />
              </div>
            )}

            {/* Final prompt after completion */}
            {currentCommandIndex >= commands.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center mt-3"
              >
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cursor" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Buttons below terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a href="#experience" className="btn btn-primary">
            View Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="/images/JafarSharifShaik_Resume.pdf"
            download
            className="btn btn-secondary"
          >
            Download Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
